const express = require("express")
const exerciseController = require("../controllers/exerciseController")

const router = express.Router()

router
  .route("/")
  .get(exerciseController.getAllExercises)
  .post(exerciseController.createExercise)

router
  .route("/:id")
  .get(exerciseController.getExercise)
  .patch(exerciseController.updateExercise)
  .delete(exerciseController.deleteExercise)

module.exports = router
