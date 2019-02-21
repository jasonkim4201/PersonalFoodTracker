const router = require("express").Router();
const db = require("../../config/connection");

// set up homepage for handlebars

router
  .route("/")
  .get(function(req, res) {
    db.query("SELECT * FROM foodEaten", (error, dbFoods) => {
      if (error) {
        console.log(error);
        return res.status(500).json(error);
      }
      res.render("foodEaten", {foodEatenList: dbFoods})
    });
  });

  module.exports = router;