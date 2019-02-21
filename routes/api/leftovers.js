const router = require("express").Router();
const foodEatenController = require("../../controllers/foodEatenController");

router
  .route("/")
  .get(foodEatenController.findLeftovers);

  module.exports = router;