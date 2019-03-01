const express = require('express')
const router = express.Router()
const models = require('../models')

// Consumer
router.get('/:consumerid', (req, res) => {
  models.Consumer.findAll({
    where : { id : req.params.consumerid },
    include: [{
      model: models.Studio
    }],
  })
  .then((foundConsumer) => {
    // res.send(foundConsumer[0])
    res.render('pages/profile', {
      consumerData : foundConsumer[0]
    })
  })
  .catch((err) => {
    res.send(err)
  })
})

router.get("/:consumerId/delete/:bookingId", (req, res) => {
  models.Booking.destroy({
    where: {
      id: req.params.bookingId,
    }
  })
  .then(() => {
    res.redirect(`/profile/${req.params.consumerId}`)
  })
  .catch(err => {
    res.send(err)
  })
})

router.get("/:consumerId/edit/:bookingId", (req, res) => {
  models.Booking.findByPk(req.params.bookingId)
  .then(foundBooking => {
      console.log(foundBooking.book_date);
    res.render("pages/profile/editSchedule", {
      bookDate: foundBooking.book_date,
      consumerId: req.params.consumerId,
      bookingId: req.params.bookingId
    })
  })
  .catch((err) => {
    res.send(err)
  })
})

router.post("/:consumerId/edit/:bookingId", (req, res) => {
  models.Booking.update({
    book_date: req.body.bookDate
  }, {
    where: {
      id: req.params.bookingId
    }
  })
  .then(() => {
    res.redirect(`/profile/${req.params.consumerId}`)
  })
  .catch((err) => {
    res.send(err)
  })
})


module.exports = router