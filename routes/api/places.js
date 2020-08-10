const express = require("express");
const passport = require("passport");
const keys = require("../../config/keys");
const constants = require("../../config/constants");
const FileUpload = require("../../utils/file-upload");
const validatePlaceInput = require("../../validation/place");
const router = express.Router();

//Load the place model
const Place = require("../../models/Place");

//Load the Destination Model
const Destination = require("../../models/Destination");

// @routes     GET api/places/healthcheck
// @desc       Tests places routes
// @access     Public
router.get("/healthcheck", (req, res) => res.json({ place: "Places Working" }));

// @routes     POST api/places/
// @desc       Create Place
// @access     Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Validate request
    const { isValid, errors } = validatePlaceInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    // Check if provided destination exists
    Destination.findById({ _id: req.body.destination })
      .then((destination) => {
        // Check if place already exists
        Place.findOne({
          name: {
            $regex: new RegExp(req.body.name, "i"),
          },
        })
          .then((place) => {
            // Send validation response if place with name already exists
            if (place) {
              return res.status(400).json({
                error: `Place with name '${req.body.name}' already exists`,
              });
            }

            // Instantiate S3 Object
            uploader = new FileUpload();

            // Upload image to s3 and set the url
            const bannerPromise = uploader.upload(
              uploader.base64ToFile(req.body.banner),
              keys.s3RootPlaceFolder,
              req.body.name,
              constants.bannerImage
            );

            const thumbnailPromise = uploader.upload(
              uploader.base64ToFile(req.body.thumbnail),
              keys.s3RootPlaceFolder,
              req.body.name,
              constants.thumbnailImage
            );

            let imagePromises = [bannerPromise, thumbnailPromise];

            // Iterate over images and create promises
            const images = req.body.images;
            if (images && images.length > 0) {
              images.map((image) => {
                imagePromises.push(
                  uploader.upload(
                    uploader.base64ToFile(image),
                    keys.s3RootPlaceFolder,
                    req.body.name,
                    constants.galleryImage
                  )
                );
              });
            }

            // Iterate over schedule array
            const schedule = req.body.schedule;
            if (schedule && schedule.length > 0) {
              schedule.map((day) => {
                imagePromises.push(
                  uploader.upload(
                    uploader.base64ToFile(day.image),
                    keys.s3RootPlaceFolder,
                    req.body.name,
                    constants.activityImage
                  )
                );
              });
            }

            Promise.all(imagePromises)
              .then((imagePromisesRes) => {
                // Create Place Payload
                const placeField = {};
                placeField.name = req.body.name;
                placeField.description = req.body.description;
                placeField.tagline = req.body.tagline;
                placeField.destination = destination;
                placeField.banner = imagePromisesRes[0];
                placeField.thumbnail = imagePromisesRes[1];
                if (req.body.youtube) placeField.youtube = req.body.youtube;
                if (req.body.duration) placeField.duration = req.body.duration;
                if (req.body.rating) placeField.rating = req.body.rating;
                if (req.body.budget) placeField.budget = req.body.budget;
                if (images && images.length > 0) {
                  if (req.body.schedule && req.body.schedule.length > 0) {
                    placeField.images = imagePromisesRes.slice(
                      2,
                      -req.body.schedule.length
                    );
                  } else {
                    placeField.images = imagePromisesRes.slice(2);
                  }
                }

                if (req.body.schedule && req.body.schedule.length > 0)
                  placeField.schedule = imagePromisesRes.slice(
                    -req.body.schedule.length
                  );

                new Place(placeField)
                  .save()
                  .then((place) => res.status(201).json(place))
                  .catch((err) => res.status(404).json({ error: err }));
              })
              .catch((err) => res.status(400).json({ error: err }));
          })
          .catch((err) =>
            res.status(400).json({ error: "Something went wrong" })
          );
      })
      .catch((err) =>
        res.status(404).json({
          destination: `Destination with id '${req.body.destination}' is not found`,
        })
      );
  }
);

// @routes     GET api/places/
// @desc       List Places
// @access     Public
router.get("/", (req, res) => {
  // Offsets for Pagination
  const skip = req.query.skip ? Number(req.query.skip) : 0;
  const limit = req.query.limit ? Number(req.query.limit) : 10;

  // Query Places
  Place.find({}, {}, { skip: skip, limit: limit })
    .sort("-createdAt")
    .then((places) => res.json(places))
    .catch((err) =>
      res.status(400).json({ error: "Could not able to list Places" })
    );
});

// @route   DELETE api/places/:place_id
// @desc    Delete Place
// @access  Private
router.delete(
  "/:place_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Place.findById({ _id: req.params.place_id })
      .then((place) => {
        place.remove();
        res.json({
          message: `Place with id '${req.params.place_id}' successfuly deleted`,
        });
      })
      .catch((err) =>
        res.status(400).json({
          error: `Place with id '${req.params.place_id}' does not exists`,
        })
      );
  }
);

module.exports = router;
