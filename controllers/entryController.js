const Entry = require("../models/entrymodel")
const factory = require("./handlerFactory")

exports.getAllEntries = factory.getAll(Entry)
exports.createEntry = factory.createOne(Entry)
exports.getEntry = factory.getOne(Entry)
exports.updateEntry = factory.updateOne(Entry)
exports.deleteEntry = factory.deleteOne(Entry)
