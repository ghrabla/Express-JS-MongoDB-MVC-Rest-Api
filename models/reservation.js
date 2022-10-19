const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = Schema({
  ticket_number: {
    type: String,
    required: true,
  },
  price: { 
    type: Number,
    required: true,
  },
  id_owner: { 
    type: Schema.Types.ObjectId,
    required: true,
  },
  id_trip: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  id_bus: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  },
  { timestamps: true }
);

module.exports = reservation = mongoose.model("reservation", reservationSchema);
