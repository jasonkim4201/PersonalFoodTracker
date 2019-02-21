const db = require("../config/connection");

module.exports = {

  //find all meals
  findAllMeals: function(req, res) {
    db.query("SELECT * FROM foodEaten", (error, dbFoods) => {
      if (error) {
        console.log(error);
        return res.status(500).json(error);
      }
      res.json(dbFoods);
    });
  },

  // find food by id req.params.id
  findMealById: function(req, res) {
    db.query("SELECT * FROM foodEaten WHERE id = ?", [req.params.id], (error, dbFoods) => {
      if (error) {
        console.log(error);
        return res.status(400).json(error);
      }
      res.json(dbFoods[0]);
    });
  },

  // find all by home cooked
  findMealsHomeCooked: function(req, res) {
    db.query("SELECT * FROM foodEaten WHERE home_cooked = true", (error, dbFoods) => {
      if (error) {
        console.log(error);
        return res.status(400).json(error);
      }
      res.json(dbFoods);
    });
  },

  // find all by ordering out
  findOrderedOutMeals: function(req, res) {
    db.query("SELECT * FROM foodEaten WHERE home_cooked = false", (error, dbFoods) => {
      if (error) {
        console.log(error);
        return res.status(400).json(error);
      }
      res.json(dbFoods);
    });
  }, 

  findVegetarianMeals: function(req, res) {
    db.query("SELECT * FROM foodEaten WHERE is_vegetarian = true", (error, dbFoods) => {
      if (error) {
        console.log(error);
        return res.status(400).json(error);
      }
      res.json(dbFoods);
    });
  },

  findMeatMeals: function(req, res) {
    db.query("SELECT * FROM foodEaten WHERE is_vegetarian = false", (error, dbFoods) => {
      if (error) {
        console.log(error);
        return res.json(400).json(error);
      }
      res.json(dbFoods);
    });
  },

  // find all by leftovers
  findLeftovers: function(req, res) {
    db.query("SELECT * FROM foodEaten WHERE has_leftovers = true", (error, dbFoods) => {
      if (error) {
        console.log(error);
        return res.status(400).json(error);
      }
      res.json(dbFoods);
    });
  },

// create foodEaten will use POST method
  createMealEaten: function(req, res) {
    db.query("INSERT INTO foodEaten SET ?", req.body, (error, dbFoods) => {
      if (error) {
        console.log(error);
        return res.status(400).json(error);
      }
      res.json(dbFoods);
    });
  },

// update if there's leftovers or not using req.params.id
  updateLeftovers: function(req, res) {
    db.query("UPDATE foodEaten SET has_leftovers = false WHERE id = ?", [req.params.id], (error, dbFoods) => {
      if (error) {
        console.log(error);
        return res.status(400).json(error);
      }
      res.json(dbFoods);
    });
  },
// delete list of foods eaten
  deleteLeftovers: function(req, res) {
    db.query("DELETE FROM foodEaten WHERE id = ?", [req.params.id], (error, dbFoods) => {
      if (error) {
        console.log(error);
        return res.status(400).json(error);
      }
      res.json(dbFoods);
    });
  }


}