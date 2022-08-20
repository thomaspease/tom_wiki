const mongoose = require("mongoose")

const entrySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  theme: {
    type: mongoose.Schema.ObjectId,
    unique: false,
    required: true,
    ref: "Theme",
  },
  subtheme: String,
  tag: Array,
  yearStart: Number,
  yearEnd: Number,
  people: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Person",
    },
  ],
  author: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Person",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})

const Entry = mongoose.model("Entry", entrySchema, "entries")

module.exports = Entry
