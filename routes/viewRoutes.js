const express = require("express")
const viewsController = require("../controllers/viewsController")

const router = express.Router()

router.get("/", viewsController.displayHome)
router.get("/body", viewsController.displayBodyHome)
router.get("/body/log/food", viewsController.displayLogFood)
router.get("/body/log/measurement", viewsController.displayLogMeasurement)
router.get("/body/log/exercise", viewsController.displayLogExercise)

module.exports = router
