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
    if (foundConsumer !== null) {
      if(bcrypt.compareSync(req.body.password, foundConsumer.password)) {
        req.session.foundConsumer = foundConsumer.id
        res.redirect("/")
      }
      else {
        throw new Error ("Wrong password")
      }
    }
    else {
      throw new Error ("User does not exist")
    }
  })
  .catch(err => {
    res.send(err)
  })
})

module.exports = router