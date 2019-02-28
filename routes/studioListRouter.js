const express = require('express')
const router = express.Router()
const Model = require('../models')
const Studio = Model.Studio

router.get('/', (req, res) => {
  Studio.findAll()
  .then(studios => {
    res.render('pages/studioList', {
      Studios: Studios
    })
  })
  .catch(err => {
    res.send(err)
  })
})

router.post("/:studioId/book", (req, res) => {
  Model.Booking.create({
    StudioId: req.params.studioId,
    ConsumerId: 1,
    book_date: req.body.bookDate
  })
  .then(() => {
    res.redirect("/studios")
  })
  .catch(err => {
    console.log(err);
    res.send(err)
  })
})

module.exports = router