const express = require('express')
const router = express.Router()
const models = require('../models')

// Consumer
router.get('/:consumerid', (req, res) => {
  // res.send(req.params.consumerid)
  models.Consumer.findOne({
      where : { id : req.params.consumerid },
      include : [{
          model : models.Booking
      }]
  })
  .then((data) => {
    res.send(data)
    res.render('/profile', {
      consumerData : data
    })
  })
  .catch(err => {
    res.send(err)
  })
})

// EDIT BOOKING GET
let bookingData = ''
router.get('/profile/:consumerid', (req, res) => {
    models.booking.findByPk(req.params.id)
    .then(data => {
        bookingData = data
        // return models.findAll()
    })
    .then(() => {
        res.render('profile', {
            output : studentData,
            subject : subjectName 
        })
    })
})

// EDIT BOOKING POST
router.post('/profile/:consumerid', (req, res) => {
    models.Booking.update({
        studio : req.body.studio,
        bookingDate : req.body.bookingDate,
    }, {
        where : {
            id : req.params.id
        }
    })
    .then(() => {
        res.redirect('/profile')
    })
    .catch((err) => {
        console.log(err)
    })
})

// DELETE BOOKING
router.get('/profile/:consumerid', (req, res) => {
  models.Booking.destroy({
      where: { 
          id : req.params.id 
      }  
  })
  .then(() => {
      res.redirect('/profile')
  })
  .catch(err => {
    console.log(err)
  })
})



module.exports = router


