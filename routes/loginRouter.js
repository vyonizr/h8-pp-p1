const express = require('express')
const router = express.Router()
const bcrypt = require("bcryptjs")
const salt = bcrypt.genSaltSync(10);
const Model = require('../models')
const Consumer = Model.Consumer

//RENDER HOMEPAGE
router.get('/', (req, res) => {
  res.render('pages/login')
})

router.post("/", (req, res) => {
  Consumer.findOne({
    where: {
      username: req.body.username
    }
  })
  .then(foundConsumer => {
    if(foundConsumer !== null && bcrypt.compareSync(req.body.password, foundConsumer.password)) {
      res.redirect(`/profile/${foundConsumer.id}`)
    }
    else {
      throw new Error ("wrong username / password")
    }
  })
  .catch(err => {
    res.send(err)
  })
})


module.exports = router