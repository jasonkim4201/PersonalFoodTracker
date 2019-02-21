const router = require("express").Router();
const foodEatenController = require("../../controllers/foodEatenController");

router
  .route("/")
  .get(foodEatenController.findVegetarianMeals);

  module.exports = router;