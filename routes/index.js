// MAIN ROUTE MODEL
const express = require('express')
const router = express.Router()

//RENDER HOMEPAGE
router.get('/', (req, res) => {
  res.render('pages/home')
})

module.exports = router