const express = require('express')
const router = express.Router()
const models = require('../models')
const Consumer = models.Consumer

//RENDER HOMEPAGE
router.get('/', (req, res) => {
  res.render('pages/register')
})

router.post('/', (req, res) => {
  Consumer.create({
    username : req.body.username,
    full_name : req.body.fullName,
    password : req.body.password,
    email : req.body.email
  })
  .then(() => {
    res.redirect('/')
  })
  .catch(err => {
    console.log(err)
    res.send(err)
  })
})

module.exports = router