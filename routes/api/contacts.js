const nodemailer = require("nodemailer");
const express = require("express");

const validateContactInput = require("../../validation/contact");
const router = express.Router();

// Load the Destination model
const Contact = require("../../models/Contact");

// @routes     GET api/contacts/healthcheck
// @desc       Tests contacts routes
// @access     Public
router.get("/healthcheck", (req, res) =>
  res.json({ contact: "Contacts Working" })
);

// @routes     POST api/contacts/
// @desc       Create Contact
// @access     Public
router.post("/", (req, res) => {
  // Validate request
  const { isValid, errors } = validateContactInput(req.body);

  if (!isValid) {
    console.log(errors);
    return res.status(400).json(errors);
  }

  const contactFields = {};
  contactFields.name = req.body.name;
  contactFields.number = req.body.number;
  contactFields.email = req.body.email;
  contactFields.message = req.body.message;
  if (req.body.subject) contactFields.subject = req.body.subject;

  new Contact(contactFields)
    .save()
    .then((contact) => {
      console.log("Saved Contact", contact);
      const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "9d598ba6a27ed5",
          pass: "e4eccb8ef3ae62",
        },
      });
      const message = {
        from: "elonmusk@tesla.com", // Sender address
        to: "mohdhaider30@gmail.com", // List of recipients
        subject: !req.body.subject ? "KaimTrip Query Forum" : req.body.subject, // Subject line
        text: req.body.message, // Plain text body
      };
      transport.sendMail(message, (err, info) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Response from Mail Service", info);
        }
      });
      res.status(201).json(contact);
    })
    .catch((err) =>
      res.status(400).json({ error: "Could not able to contact" })
    );
});

module.exports = router;
