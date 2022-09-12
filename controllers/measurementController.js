const Measurement = require("../models/measurementmodel")
const factory = require("./handlerFactory")

exports.getAllMeasurements = factory.getAll(Measurement)
exports.createMeasurement = factory.createOne(Measurement)
exports.getMeasurement = factory.getOne(Measurement)
exports.updateMeasurement = factory.updateOne(Measurement)
exports.deleteMeasurement = factory.deleteOne(Measurement)
