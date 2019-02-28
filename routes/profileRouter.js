const express = require('express')
const router = express.Router()
const models = require('../models')

// Consumer
router.get('/:consumerid', (req, res) => {
  // res.send(req.params.consumerid)
  let consumerData;
  console.log('masuk')
  models.Consumer.findAll({
      where : { id : req.params.consumerid },
      include : [{
          model : models.Booking
      }]
  })
  .then((data) => {
    // consumerData = data
    res.send(data)
    res.render('../views/pages/profile', {
      consumerData : data
    })
  })
})

// // EDIT BOOKING GET
// let bookingData = ''
// router.get('/:consumerid', (req, res) => {
//     models.booking.findByPk(req.params.id)
//     .then(data => {
//         bookingData = data
//         // return models.findAll()
//     })
//     .then(() => {
//         res.render('profile', {
//             output : studentData,
//             subject : subjectName 
//         })
//     })
// })

// // EDIT BOOKING POST
// router.post('/:consumerid', (req, res) => {
//     models.Booking.update({
//         studio : req.body.studio,
//         bookingDate : req.body.bookingDate,
//     }, {
//         where : {
//             id : req.params.id
//         }
//     })
//     .then(() => {
//         res.redirect('/profile')
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// })

// DELETE BOOKING
router.get('/:consumerid', (req, res) => {
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