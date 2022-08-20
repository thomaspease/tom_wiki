const mongoose = require("mongoose")

const themeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
})

const Theme = mongoose.model("Theme", themeSchema, "subthemes")

module.exports = Theme
