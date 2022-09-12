const express = require("express")
const measurementController = require("../controllers/measurementController")

const router = express.Router()

router
  .route("/")
  .get(measurementController.getAllMeasurements)
  .post(measurementController.createMeasurement)

router
  .route("/:id")
  .get(measurementController.getMeasurement)
  .patch(measurementController.updateMeasurement)
  .delete(measurementController.deleteMeasurement)

module.exports = router
