const catchAsync = require("../utils/catchAsync")
const Person = require("../models/personmodel")

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

exports.displayLogWiki = catchAsync(async (req, res, next) => {
  const thing = await Person.find()
  const people = thing.forEach((el) => el.name)

  console.log(people)

  res.status(200).render("wiki/wiki-input", {
    title: "Wiki input",
    people,
  })
})
