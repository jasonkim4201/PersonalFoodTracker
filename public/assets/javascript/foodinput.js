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
        viewAll();
        break;

      case "homeCook":
        console.log("home");
        viewHomeCook();
        break;

      case "orderedOut":
        console.log('Stop eating out');
        viewOrderedOut();
        break;

      case "vegetarian":
        console.log("veggies are good for u");
        viewVegetarian();
        break;

      case "meaty":
        console.log("meaty!");
        viewMeaty();
        break;

      case "leftovers":
        console.log("More food 4 tomorrow");
        viewLeftovers();
        break;

      case "devoured":
        console.log("all the stuff u devoured");
        viewDevoured();
        break;

      default:
        console.log("Select a view.");
        break;
    }
  });

  // FUNCTION ZONES FOR THE SWITCH CASES

  const viewAll = () => {

    // make ajax call to view all
    $.ajax({
        url: "/api/mealsEaten",
        method: "GET"
      })
      .then(foodResponse => {
        // once get request is complete, empty #viewEatenFoods div and add in all listed items

        $("#viewEatenFoods").empty();

        foodResponse.forEach((item, index) => {
          // add each listed meal in a <li class="list-group-item"> tag and append it to #viewEatenFoods
          const $li = $(`<li class='list-group-item list-group-item-action list-group-item-info text-center font-weight-bold' id=${index + 1}>`);
          $("#viewEatenFoods").append($li.text(item.meal));
        });
      });
  }

const viewHomeCook = () => {
  $.ajax({
    url: "api/homeCooked",
    method: "GET"
  })
  .then(homeCookResponse => {
    $("#viewEatenFoods").empty();

    homeCookResponse.forEach((food, index) => {
      const $li = $(`<li class='list-group-item list-group-item-action list-group-item-success text-center font-weight-bold' id=${index + 1}>`);
      $("#viewEatenFoods").append($li.text(food.meal));
    });
  });
}

const viewOrderedOut = () => {
  $.ajax({
    url: "api/orderedOut",
    method: "GET"
  })
  .then(orderedResponse => {
    $("#viewEatenFoods").empty();

    orderedResponse.forEach((food, index) => {
      const $li = $(`<li class='list-group-item list-group-item-action list-group-item-danger text-center font-weight-bold' id=${index + 1}>`);
      $("#viewEatenFoods").append($li.text(food.meal));
    });
  });
}



}); //end of ready function