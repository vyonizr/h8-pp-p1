
// MAIN ROUTE MODEL
const express = require('express')
const router = express.Router()
const loginRoute = require('./loginRoute')

const HomeController = require('../controllers/homeController')

router.get("/", HomeController.getPage)
router.use("/login", loginRoute)


module.exports = router
