const router = require("express").Router();
const foodEatenController = require("../../controllers/foodEatenController");

// define my api routes

// when user hits /api/mealsEaten
router
  .route("/")
  .get(foodEatenController.findAllMeals)
  .post(foodEatenController.createMealEaten);

// when user hits /api/mealsEaten/:id
router
  .route("/:id")
  .get(foodEatenController.findMealById)
  .put(foodEatenController.updateLeftovers)
  .delete(foodEatenController.deleteLeftovers);


  module.exports = router;