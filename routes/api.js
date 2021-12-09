const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservation');

router.get('/appointment', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  Reservation.find({}, 'nameValue')
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/appointment', (req, res, next) => {
  Reservation.create(req.body)
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;