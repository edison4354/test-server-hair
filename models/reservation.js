const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for appointment
const ReservationSchema = new Schema({
  nameValue: { type: String, required: true},
  phoneValue: { type: String, required: true},
  dateValue: { type: String, required: true},
  timeValue: { type: String, required: true},
  serviceValue: { type: String, required: true},
  descValue: { type: String, required: true}
});

// Create model for appointment
const Reservation = mongoose.model('newReservations', ReservationSchema);

module.exports = Reservation;