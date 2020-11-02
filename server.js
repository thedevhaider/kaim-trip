const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const path=require('path');
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const destinations = require("./routes/api/destinations");
const contacts = require("./routes/api/contacts");
const places = require("./routes/api/places");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const createAdminUser = require("./boot/admin");

const app = express();

var cors = require("cors");

app.use(cors({ origin: "*" }));


//Adding middlerware to express app
app.use(
  bodyParser.urlencoded({
    extended: false,
    limit: "100mb",
  })
);
app.use(bodyParser.json({ limit: "100mb" }));

//Config Keys
const db = process.env.MONGO_URI;

//Connect to MongoDB using Mongoose
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("> MongoDB connected");
    createAdminUser();
  })
  .catch((err) => console.log(err, "Error"));

//Adding passport middleware
app.use(passport.initialize());

//Passport Config
require("./config/passport")(passport);

// Routes APIs
app.use("/api/users", users);
app.use("/api/destinations", destinations);
app.use("/api/contacts", contacts);
app.use("/api/places", places);

if(process.env.NODE_ENV)
{
    app.use(express.static('client/build'));
    app.get('*',(req,res) =>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`> Running server on Port ${PORT}`));
