const express = require("express");
const passport = require("passport");
const keys = require("../../config/keys");
const constants = require("../../config/constants");
const FileUpload = require("../../utils/file-upload");
const validateDestinationInput = require("../../validation/destination");
const router = express.Router();

// Load the Destination model
const Destination = require("../../models/Destination");
const Place = require("../../models/Place");

// @routes     GET api/destinations/healthcheck
// @desc       Tests destinations routes
// @access     Public
router.get("/healthcheck", (req, res) =>
  res.json({ destination: "Destinations Working" })
);

// @routes     POST api/destinations/
// @desc       Create Destination
// @access     Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Validate request
    const { isValid, errors } = validateDestinationInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    // Check is Destination already exists
    Destination.findOne({
      name: {
        $regex: new RegExp(req.body.name, "i"),
      },
    })
      .then((destination) => {
        // Send validation response if Destination already exists
        if (destination) {
          return res.status(400).json({
            error: `Destination with name '${req.body.name}' already exists`,
          });
        }

        // Instantiate S3 Object
        uploader = new FileUpload();

        // Upload image to s3 and set the url
        const bannerPromise = uploader.upload(
          uploader.base64ToFile(req.body.banner),
          keys.s3RootDestinationFolder,
          req.body.name,
          constants.bannerImage
        );

        const thumbnailPromise = uploader.upload(
          uploader.base64ToFile(req.body.thumbnail),
          keys.s3RootDestinationFolder,
          req.body.name,
          constants.thumbnailImage
        );

        Promise.all([bannerPromise, thumbnailPromise])
          .then((values) => {
            // Create Destination Payload
            const destinationFields = {};
            destinationFields.name = req.body.name;
            destinationFields.description = req.body.description;
            destinationFields.tagline = req.body.tagline;
            destinationFields.state = req.body.state;
            destinationFields.banner = values[0];
            destinationFields.thumbnail = values[1];

            // Create Destination into Database
            new Destination(destinationFields)
              .save()
              .then((destination) => res.status(201).json(destination))
              .catch((err) =>
                res
                  .status(400)
                  .json({ error: "Could not able to create destination" })
              );
          })
          .catch((err) =>
            res.status(400).json({ error: "Could not able to upload images" })
          );
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({
          error: "Something went wrong",
        });
      });
  }
);

// @routes     GET api/destinations/
// @desc       List Destinations
// @access     Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Offsets for Pagination
    const skip = req.query.skip ? Number(req.query.skip) : 0;
    const limit = req.query.limit ? Number(req.query.limit) : 10;

    // Query Destinations
    Destination.find({}, {}, { skip: skip, limit: limit })
      .sort("-createdAt")
      .then((destinations) => res.json(destinations))
      .catch((err) =>
        res.status(400).json({ error: "Could not able to list Destinations" })
      );
  }
);

// @route   DELETE api/destinations/:destination_id
// @desc    Delete Destination
// @access  Private
router.delete(
  "/:destination_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Destination.findById({ _id: req.params.destination_id })
      .populate("places")
      .then((destination) => {
        destination.places.map((place) =>
          Place.deleteOne({ _id: place }).catch((err) =>
            console.log(`Place id ${place} not found for deleting`)
          )
        );
        destination.remove();
        res.json({
          message: `Destination with id '${req.params.destination_id}' successfuly deleted`,
        });
      })
      .catch((err) =>
        res.status(400).json({
          error: `Destination with id '${req.params.destination_id}' does not exists`,
        })
      );
  }
);

// @routes     GET api/destinations/popular
// @desc       List Popular Destinations
// @access     Public
router.get("/popular", (req, res) => {
  // Offsets for Pagination
  const skip = req.query.skip ? Number(req.query.skip) : 0;
  const limit = req.query.limit ? Number(req.query.limit) : 10;

  // Query Destinations
  Destination.aggregate([
    {
      $addFields: {
        places_count: { $size: { $ifNull: ["$places", []] } },
      },
    },
    {
      $sort: { places_count: -1 },
    },
    {
      $limit: limit,
    },
    {
      $skip: skip,
    },
  ])
    .then((destinations) => res.json(destinations))
    .catch((err) =>
      res.status(400).json({ error: "Could not able to list Destinations" })
    );
});

// @route   GET api/destinations/:destination_id
// @desc    Get Destination by ID
// @access  Public
router.get("/:destination_id", (req, res) => {
  Destination.findById({ _id: req.params.destination_id })
    .populate("places")
    .then((destination) => {
      if (!destination) {
        return res.json({
          error: `Destination with id '${req.params.destination_id}' does not exists`,
        });
      }

      res.json(destination);
    })
    .catch((err) =>
      res.status(400).json({
        error: `Destination with id '${req.params.destination_id}' does not exists`,
      })
    );
});

module.exports = router;
