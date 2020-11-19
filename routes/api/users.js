const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const passport = require("passport");
const validateLoginInput = require("../../validation/login");
const router = express.Router();

//Load the user model
const User = require("../../models/User.js");

// @routes     GET api/users/healthcheck
// @desc       Tests users routes
// @access     Public
router.get("/healthcheck", (req, res) => res.json({ user: "Users Working" }));

// @routes     POST api/users/login
// @desc       Tests Login
// @access     Public
router.post("/login", (req, res) => {
  //Validate Login Inputs
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  //Getting credentials from the req header
  const email = req.body.email;
  const password = req.body.password;

  //Checking in the database
  User.findOne({ email }).then((user) => {
    //Check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    //Check for password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (1) {
        //User Matched
        const payload = { name: user.name, id: user._id };

        //Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 86400 },
          (err, token) => {
            if (err) throw err;
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        errors.password = "Password Incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

// @routes     GET api/users/current
// @desc       Returns current User
// @access     Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
    });
  }
);

// @routes     GET api/users/
// @desc       Returns all Users
// @access     Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.find()
      .sort({ date: -1 })
      .then((users) => res.json(users))
      .catch((err) => console.log(err));
  }
);

// @routes     DELETE api/users/
// @desc       Delete a User
// @access     Private
router.delete(
  "/:user_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findById({ _id: req.params.user_id })
      .then((user) => {
        user.remove();
        res.json({ message: `User with id ${req.params.user_id} deleted` });
      })
      .catch((err) => res.status(404).json({ message: "User not found" }));
  }
);

module.exports = router;
