const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reservationSchema = Schema({
  ticket_number: {
    type: Number,
    required: true,
  },
  price: { 
    type: Number,
    required: true,
  },
  id_owner:  [{
    type: Schema.Types.ObjectId,
    required: true,
    ref:'client'
  }],
  id_trip: [{
    type: Schema.Types.ObjectId,
    required: true,
    ref:'trip'
  }],
  id_bus:  [{
    type: Schema.Types.ObjectId,
    required: true,
    ref:'bus'
  }],
  },
  { timestamps: true }
);

module.exports = reservation = mongoose.model("reservation", reservationSchema);
