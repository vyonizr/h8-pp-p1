const express = require('express')
const router = express.Router()
const models = require('../models')

//RENDER HOMEPAGE
router.get('/', (req, res) => {
  res.render('pages/register')
})

router.post('/', (req, res) => {
  models.Consumer.create({
    username : req.body.username,
    full_name : req.body.full_name,
    password : req.body.password,
    email : req.body.email,
    gender : req.body.gender 
  })
  .then(() => {
    res.redirect('/')
  })
  .catch(err => {
    res.send(err)
  })
})

module.exports = router