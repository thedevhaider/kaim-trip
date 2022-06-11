var express = require("express");
var router = express.Router();
var indexController = require("../controllers/index");

router.get("/login", (req, res, next) => {
  res.render("login", {
    req,
    res,
  });
});

router.post("/login", indexController.loginPost);

router.get("/delete/:id/:action", indexController.delete);

router.get("/", indexController.checkSession, indexController.index);

router.get(
  "/add-destination",
  indexController.checkSession,
  indexController.addDestination
);

router.get(
  "/add-place",
  indexController.checkSession,
  indexController.addPlace
);

router.post(
  "/add-place",
  indexController.checkSession,
  indexController.addPlacePost
);

router.get(
  "/all-destinations",
  indexController.checkSession,
  indexController.allDestinations
);

router.get(
  "/all-places",
  indexController.checkSession,
  indexController.allPlaces
);

router.post(
  "/add-destination",
  indexController.checkSession,
  indexController.addDestinationPost
);

module.exports = router;
