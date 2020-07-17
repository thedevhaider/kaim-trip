const express = require("express");
const passport = require("passport");
const keys = require("../../config/keys");
const constants = require("../../config/constants");
const FileUpload = require("../../utils/file-upload");
const validateDestinationInput = require("../../validation/destination");
const router = express.Router();

//Load the user model
const Destination = require("../../models/Destination");

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
      res.status(400).json(errors);
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
              .then((destination) => res.json(destination))
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

module.exports = router;
