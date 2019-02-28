const express = require('express')
const router = express.Router()
const models = require('../models')

//RENDER HOMEPAGE
router.get('/', (req, res) => {
  res.render('pages/register')
})

module.exports = router