const Person = require("../models/personmodel")
const factory = require("./handlerFactory")

exports.getAllPeople = factory.getAll(Person)
exports.createPerson = factory.createOne(Person)
exports.getPerson = factory.getOne(Person)
exports.updatePerson = factory.updateOne(Person)
exports.deletePerson = factory.deleteOne(Person)
