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