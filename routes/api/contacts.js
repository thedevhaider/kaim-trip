const nodemailer = require("nodemailer");
const express = require("express");
const keys = require("../../config/keys");

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

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: keys.emailSenderEmailId,
          pass: keys.emailSenderPassword,
        },
      });
      const message = {
        from: req.body.email, // Sender address
        to: keys.emailReceiver, // List of recipients
        subject: !req.body.subject ? "KaimTrip Query Forum" : req.body.subject, // Subject line
        html: ` <h2>Sender Details:</h2>
                <b>Name</b> : ${req.body.name} <br> 
                <b>Number</b> : ${req.body.number} <br> 
                <b>Email</b> : ${req.body.email} <br> 
                <b>Message</b> : ${req.body.message}`, // Plain text body
      };
      transporter.sendMail(message, (err, info) => {
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
