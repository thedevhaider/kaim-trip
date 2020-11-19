const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateDestinationInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.tagline = !isEmpty(data.tagline) ? data.tagline : "";
  data.banner = !isEmpty(data.banner) ? data.banner : "";
  data.thumbnail = !isEmpty(data.thumbnail) ? data.thumbnail : "";
  data.state = !isEmpty(data.state) ? data.state : "";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be 2 to 30 character long";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name is required";
  }

  if (!Validator.isLength(data.description, { min: 10, max: 500 })) {
    errors.description = "Description must be 10 to 500 character long";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description is required";
  }

  if (!Validator.isLength(data.tagline, { min: 10, max: 200 })) {
    errors.tagline = "Tagline must be 10 to 200 character long";
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

  if (!Validator.isLength(data.state, { min: 3, max: 50 })) {
    errors.state = "State must be 3 to 50 character long";
  }

  if (Validator.isEmpty(data.state)) {
    errors.state = "State is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
