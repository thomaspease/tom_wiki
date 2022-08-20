const express = require("express")
const themeController = require("../controllers/themeController")

const router = express.Router()

router
  .route("/")
  .get(themeController.getAllThemes)
  .post(themeController.createTheme)

router
  .route("/:id")
  .get(themeController.getTheme)
  .patch(themeController.updateTheme)
  .delete(themeController.deleteTheme)

module.exports = router
