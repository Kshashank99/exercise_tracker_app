const express = require("express");
const router = express.Router();
const {getExercises,getExByCat,getExCats, getExerciseById} = require("../controllers/exercise")


router.get("/exercise/getAllExercises",getExercises)
router.get("/exercise/getExercises/:category",getExByCat)
router.get("/exercise/categories",getExCats)
router.get("/exercise/getExercise/:id",getExerciseById)

module.exports = router