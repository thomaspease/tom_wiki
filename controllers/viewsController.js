const catchAsync = require("../utils/catchAsync")

exports.displayHome = catchAsync(async (req, res, next) => {
  res.status(200).render("base", {
    title: "Home",
  })
})

exports.displayBodyHome = catchAsync(async (req, res, next) => {
  res.status(200).render("body/body-home", {
    title: "Body: Home",
  })
})

exports.displayLogFood = catchAsync(async (req, res, next) => {
  res.status(200).render("body/log-food", {
    title: "Log food",
  })
})

exports.displayLogMeasurement = catchAsync(async (req, res, next) => {
  res.status(200).render("body/log-measurement", {
    title: "Log measurement",
  })
})

exports.displayLogExercise = catchAsync(async (req, res, next) => {
  res.status(200).render("body/log-exercise", {
    title: "Log exercise",
  })
})

exports.displayTodos = catchAsync(async (req, res, next) => {
  res.status(200).render("todos", {
    title: "Todos",
  })
})
