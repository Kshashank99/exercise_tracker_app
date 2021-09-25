const express = require("express");
const router = express.Router();
const {getFoodItem} = require("../controllers/food")


router.post("/food/getFoodVals",getFoodItem)


module.exports = router