const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservation');
const accountSid = 'AC4cb2bbcb4ecbeb20b58be947148a8bb0';
const authToken = '7aa8724a723c713b904d24c10c245631';

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

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
  client.messages
    .create({
      body: 'Hello Edison! This is Hair By Diana, please text YES to confirm your recent booking for 12/31/2021',
      to: '+19163338146', // Text this number
      from: '+15304530701', // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
});

module.exports = router;