const mongoose = require("mongoose")

const foodSchema = mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  calories: Number,
  fat: Number,
  protein: Number,
  fibre: Number,
  carbs: Number,
})

const Food = mongoose.model("Food", foodSchema, "foods")

module.exports = Food
