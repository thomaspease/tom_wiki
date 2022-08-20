const mongoose = require("mongoose")

const personSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bio: String,
  born: Number,
  died: Number,
})

const Person = mongoose.model("Person", personSchema, "people")

module.exports = Person
