const mongoose = require("mongoose")

const exerciseSchema = mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  exercise: Number,
  weight: Number,
  reps: Number,
  sets: Number,
})

const Exercise = mongoose.model("Exercise", exerciseSchema, "exercises")

module.exports = Exercise
