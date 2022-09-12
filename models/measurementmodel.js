const mongoose = require("mongoose")

const measurementSchema = mongoose.Schema({
  date: Date,
  weight: Number,
  bicep: Number,
  shoulder: Number,
  waist: Number,
  thigh: Number,
  calf: Number,
  neck: Number,
  chest: Number,
})

const Measurement = mongoose.model(
  "Measurement",
  measurementSchema,
  "measurements"
)

module.exports = Measurement
