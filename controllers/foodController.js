const Food = require("../models/foodmodel")
const factory = require("./handlerFactory")

exports.getAllFoods = factory.getAll(Food)
exports.createFood = factory.createOne(Food)
exports.getFood = factory.getOne(Food)
exports.updateFood = factory.updateOne(Food)
exports.deleteFood = factory.deleteOne(Food)
