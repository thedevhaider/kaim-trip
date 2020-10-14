const Validator = require("validator");
const isEmpty = require("./is-empty");
const constants = require("../config/constants");

module.exports = function validateContactInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.number = !isEmpty(data.number) ? data.number : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.message = !isEmpty(data.message) ? data.message : "";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be 2 to 30 character long";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name is required";
  }

  if (
    !Validator.isMobilePhone(data.number, constants.mobileNumberLocales, {
      strictMode: true,
    })
  ) {
    errors.number = "Please provide valid mobile number with country code";
  }

  if (Validator.isEmpty(data.number)) {
    errors.number = "Number is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Please provide valid Email id";
  }

  if (Validator.isEmpty(data.number)) {
    errors.email = "Email is required";
  }

  if (!Validator.isLength(data.message, { min: 5, max: 300 })) {
    errors.message = "Message must be 5 to 300 character long";
  }

  if (Validator.isEmpty(data.message)) {
    errors.message = "Message is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
