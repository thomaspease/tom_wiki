const Exercise = require("../models/exercisemodel")
const factory = require("./handlerFactory")

exports.getAllExercises = factory.getAll(Exercise)
exports.createExercise = factory.createOne(Exercise)
exports.getExercise = factory.getOne(Exercise)
exports.updateExercise = factory.updateOne(Exercise)
exports.deleteExercise = factory.deleteOne(Exercise)
