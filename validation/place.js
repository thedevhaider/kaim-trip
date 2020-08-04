const Validator = require("validator");
const isEmpty = require("./is-empty");

// Load Destination Model
const Destination = require("../models/Destination");

module.exports = function validatePlaceInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.tagline = !isEmpty(data.tagline) ? data.tagline : "";
  data.banner = !isEmpty(data.banner) ? data.banner : "";
  data.thumbnail = !isEmpty(data.thumbnail) ? data.thumbnail : "";
  data.destination = !isEmpty(data.destination) ? data.destination : "";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be 2 to 30 character long";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name is required";
  }

  if (!Validator.isLength(data.description, { min: 10, max: 300 })) {
    errors.description = "Description must be 10 to 300 character long";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description is required";
  }

  if (!Validator.isLength(data.tagline, { min: 10, max: 30 })) {
    errors.tagline = "Tagline must be 10 to 30 character long";
  }

  if (Validator.isEmpty(data.tagline)) {
    errors.tagline = "Tagline is required";
  }

  if (Validator.isEmpty(data.banner)) {
    errors.banner = "Banner is required";
  }

  if (Validator.isEmpty(data.thumbnail)) {
    errors.thumbnail = "Thumbnail is required";
  }

  if (Validator.isEmpty(data.destination)) {
    errors.destination = "Destination is required";
  } else {
    Destination.findById({ _id: data.destination }).catch(
      (err) =>
        (errors.destination = `Destination with id ${data.destination} does not exists`)
    );
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
