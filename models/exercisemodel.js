const mongoose = require("mongoose")

const exerciseSchema = mongoose.Schema({
  date: Date,
  exercise: Number,
  weight: Number,
  reps: Number,
  sets: Number,
})

const Exercise = mongoose.model("Exercise", exerciseSchema, "exercises")

module.exports = Exercise
