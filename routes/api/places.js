const express = require("express");
const passport = require("passport");
const keys = require("../../config/keys");
const constants = require("../../config/constants");
const FileUpload = require("../../utils/file-upload");
const validatePlaceInput = require("../../validation/place");
const router = express.Router();

//Load the place model
const Place = require("../../models/Place");

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
      res.status(400).json(errors);
    }
  }
);

module.exports = router;
