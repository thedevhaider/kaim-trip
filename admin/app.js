var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var express = require("express");
var index = require("./routes/index");
var session = require("express-session");
var app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

app.use(
  bodyParser.urlencoded({
    extended: false,
    limit: "500mb",
  })
);
app.use(bodyParser.json({ limit: "500mb" }));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);

const port = process.env.PORT || 4000;

app.listen(port, function () {
  console.log("Admin Server is running at port : " + port);
});

module.exports = app;
