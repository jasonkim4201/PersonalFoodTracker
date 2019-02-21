$(document).ready(function () {
  console.log("ready");

  $("#submitMeal").on("click", function (event) {
    event.preventDefault();

    //  accept values for each input box
    const meal = $("#foodFormEntry").val().trim();

    if (meal === "") {
      alert("add something!");
      return false;
    } else {
      //define the whole entry as a object for ajax POST
      const homeCooked = $("#homeCookedOrNot").val();
      const vegetarian = $("#vegetarianOrNot").val();
      const leftovers = $("#leftoversOrNot").val();
      const foodInput = {
        meal: $("#foodFormEntry").val().trim(),
        home_cooked: parseInt(homeCooked),
        is_vegetarian: parseInt(vegetarian),
        has_leftovers: parseInt(leftovers)
      };

      console.log(foodInput);

      $.ajax({
          url: "/api/mealsEaten",
          method: "POST",
          data: foodInput
        })
        .then((mealEntry) => {
          console.log("items submitted");
          $("#foodFormEntry").val("");
        });
    }
  }); //end submit function

  // these are all my get requests here for view by catagory. probably use switch case
  $("#viewFoods").on("click", function (event) {
    event.preventDefault();

    const viewParams = $("#sortViewsBy").val();

    switch (viewParams) {
      case "all":
        console.log("view all the stuff");
        break;

      case "homeCook":
        console.log("home");
        break;

      case "orderedOut":
        console.log('Stop eating out');
        break;

      case "vegetarian":
        console.log("veggies are good for u");
        break;

      case "meaty":
        console.log("meaty!");
        break;

      case "leftovers":
        console.log("More food 4 tomorrow");
        break;

      case "devoured":
        console.log("all the stuff u devoured");
        break;

      default:
        console.log("Select a view.");
        break;
    }
  });

// FUNCTION ZONES FOR THE SWITCH CASES

// 
const viewAll = () => {

}







}); //end of ready function