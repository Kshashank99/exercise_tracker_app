const express = require("express");
const router = express.Router();
const {getExercises,getExByCat,getExCats} = require("../controllers/exercise")


router.get("/exercise/getExercises",getExercises)
router.get("/exercise/getExercise/:category",getExByCat)
router.get("/exercise/categories",getExCats)

module.exports = router