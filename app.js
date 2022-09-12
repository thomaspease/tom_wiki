const express = require("express")
const path = require("path")
const morgan = require("morgan")
const rateLimit = require("express-rate-limit")
const mongoSanitize = require("express-mongo-sanitize")
const xss = require("xss-clean")
const hpp = require("hpp")
const cookieParser = require("cookie-parser")

const AppError = require("./utils/appError")
const globalErrorHandler = require("./controllers/errorController")
const entryRouter = require("./routes/entryRoutes")
const personRouter = require("./routes/personRoutes")
const themeRouter = require("./routes/themeRoutes")
const viewRouter = require("./routes/viewRoutes")
const exerciseRouter = require("./routes/exerciseRoutes")
const foodRouter = require("./routes/foodRoutes")
const measurementRouter = require("./routes/measurementRoutes")

const app = express()

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views"))

//Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

//Limit requests from same API
const limiter = rateLimit({
  max: 1000,
  windowMS: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour",
})
app.use("/api", limiter)

//Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }))
app.use(cookieParser())

//Data sanitization against NOSQL query injections
app.use(mongoSanitize())

//Data sanitization against XSS
app.use(xss())

//Preventing parameter pollution
app.use(hpp())

app.use(express.static(path.join(__dirname, "public")))

app.use("/", viewRouter)
app.use("/api/v1/entries", entryRouter)
app.use("/api/v1/people", personRouter)
app.use("/api/v1/themes", themeRouter)
app.use("/api/v1/measurement", measurementRouter)
app.use("/api/v1/exercise", exerciseRouter)
app.use("/api/v1/food", foodRouter)

//A req will only reach here if it hasn't been handled by the other handlers
//The star means all routes
app.all("*", (req, res, next) => {
  //If next ever receives an argument, then express presumes that it is an error, and sends it straight to the global error handling middleware, without going through the other middleware.
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404))
})

app.use(globalErrorHandler)

module.exports = app
