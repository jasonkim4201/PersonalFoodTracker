const router = require("express").Router();
const mealsEatenRoutes = require("./mealsEatenRoutes");
const leftoversRoute = require("./leftovers");
const homeCookedRoute = require("./homeCooked");
const orderedOutRoute = require("./orderedOut");
const vegetarianRoute = require("./vegetarian");
const meatyRoute = require("./withMeat");
// create prefix

router.use("/mealsEaten", mealsEatenRoutes);
router.use("/leftovers", leftoversRoute);
router.use("/homeCooked", homeCookedRoute);
router.use("/orderedOut", orderedOutRoute);
router.use("/vegetarian", vegetarianRoute);
router.use("/withMeat", meatyRoute);

module.exports = router;