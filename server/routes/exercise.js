const express = require("express");
const router = express.Router();
const {getExercise} = require("../controllers/exercise")


router.get("/exercise/getExercise",getExercise)


module.exports = router