var rp = require("request-promise");
var jwt_decode = require("jwt-decode");

exports.loginPost = (req, res, next) => {
  var options = {
    method: "POST",
    uri: `${process.env.PUBLIC_URL}/api/users/login`,
    form: {
      email: req.body.email,
      password: req.body.password,
    },
  };
  rp(options)
    .then(async function (body) {
      body = JSON.parse(body);
      if (body.token);
      {
        req.session.token = body.token;
        var decoded = await jwt_decode(body.token.split(" ")[1]);
        req.session.name = decoded.name;
        req.session._id = decoded.id;
        res.redirect("/");
      }
    })
    .catch(function (err) {
      console.log(err);
    });
};

exports.index = (req, res, next) => {
  res.render("index", {
    req,
    res,
  });
};

exports.addDestination = (req, res, next) => {
  res.render("add-destination", {
    req,
    res,
  });
};

exports.addPlace = (req, res, next) => {
  var options = {
    method: "GET",
    uri: `${process.env.PUBLIC_URL}/api/destinations/?skip=0&limit=1000`,
    headers: {
      Authorization: req.session.token,
      "Content-Type": "application/json",
    },
  };
  rp(options)
    .then(async function (body) {
      body = JSON.parse(body);
      res.render("add-place", {
        req,
        res,
        data: body,
      });
    })
    .catch(function (err) {
      console.log(err);
    });
};

exports.allDestinations = (req, res, next) => {
  var options = {
    method: "GET",
    uri: `${process.env.PUBLIC_URL}/api/destinations/?skip=0&limit=1000`,
    headers: {
      Authorization: req.session.token,
      "Content-Type": "application/json",
    },
  };
  rp(options)
    .then(async function (body) {
      body = JSON.parse(body);
      res.render("all-destinations", {
        req,
        res,
        data: body,
      });
    })
    .catch(function (err) {
      console.log(err);
    });
};

exports.allPlaces = (req, res, next) => {
  var options = {
    method: "GET",
    uri: `${process.env.PUBLIC_URL}/api/places/?skip=0&limit=10`,
    headers: {
      Authorization: req.session.token,
      "Content-Type": "application/json",
    },
  };
  rp(options)
    .then(async function (body) {
      body = JSON.parse(body);
      res.render("all-places", {
        req,
        res,
        data: body,
      });
    })
    .catch(function (err) {
      console.log(err);
    });
};

exports.delete = (req, res, next) => {
  console.log(req.params);
  var options = {
    method: "DELETE",
    uri: `${process.env.PUBLIC_URL}/api/${req.params.action}/${req.params.id}`,
    headers: {
      Authorization: req.session.token,
      "Content-Type": "application/json",
    },
  };
  rp(options)
    .then(async function (body) {
      body = JSON.parse(body);
      res.send(body);
    })
    .catch(function (err) {
      res.send(err);
    });
};

exports.addDestinationPost = (req, res, next) => {
  var options = {
    method: "POST",
    uri: `${process.env.PUBLIC_URL}/api/destinations/`,
    headers: {
      Authorization: req.session.token,
      "Content-Type": "application/json",
    },
    form: {
      name: req.body.destinationName,
      description: req.body.description,
      state: req.body.state,
      tagline: req.body.tagline,
      banner: req.body.banner,
      thumbnail: req.body.thumbnail,
    },
  };
  rp(options)
    .then(async function (body) {
      body = JSON.parse(body);
      res.send(body);
    })
    .catch(function (err) {
      res.send(err);
    });
};

exports.checkSession = (req, res, next) => {
  if (!req.session.token) res.redirect("/login");
  else next();
};

exports.addPlacePost = (req, res, next) => {
  // Code for image gallery.
  var array = req.body.images.split("data:");
  var mm = [];
  for (var i = 1; i < array.length; i++) {
    array[i] = array[i].replace("//Z,", "//Z");
    mm.push(`data:${array[i]}`);
  }
  req.body.images = mm;
  // Code for schedule, image and description.
  mm = [];
  for (var i = 0; i < req.body.schedule.length; i++) {
    if (req.body.schedule[i] != "") {
      mm.push({
        description: req.body.descriptionSchedule[i],
        image: req.body.scheduleImage[i],
      });
    }
  }
  req.body.schedule = mm;
  var options = {
    method: "POST",
    uri: `${process.env.PUBLIC_URL}/api/places`,
    headers: {
      Authorization: req.session.token,
      "Content-Type": "application/json",
    },
    json: true,
    body: req.body,
  };
  rp(options)
    .then(async function (body) {
      res.send(body);
    })
    .catch(function (err) {
      res.send(err);
    });
};
