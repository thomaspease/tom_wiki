const Theme = require("../models/thememodel")
const factory = require("./handlerFactory")

exports.getAllThemes = factory.getAll(Theme)
exports.createTheme = factory.createOne(Theme)
exports.getTheme = factory.getOne(Theme)
exports.updateTheme = factory.updateOne(Theme)
exports.deleteTheme = factory.deleteOne(Theme)
