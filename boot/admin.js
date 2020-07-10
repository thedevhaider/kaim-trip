const bcrypt = require("bcryptjs");
const keys = require("../config/keys");

// Load Model
const User = require("../models/User");

module.exports = function createAdminUser() {
  // Create Admin User
  const name = keys.adminName;
  const email = keys.adminEmail;
  const password = keys.adminPassword;

  //Find this request in the DB
  User.findOne({ email: email }).then((user) => {
    if (user) {
      console.log("> Could not create Admin User");
      console.log(`> User with email ${email} already exists`);
    } else {
      const newUser = new User({
        name: name,
        email: email,
        password: password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => console.log("> Admin User Created", user))
            .catch((err) => console.log("> Error Occured", err));
        });
      });
    }
  });
};
