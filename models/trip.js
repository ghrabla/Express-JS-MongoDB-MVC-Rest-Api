const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = Schema(
  {
    depart_city: { 
      type: String,
      required: true,
    },

    arrive_city: {
      type: String,
      required: true,
    },

    depart_date: { 
      type: String,
      required: true,
    },
    arrive_date: {
        type: String,
        required: true,
      },
    price: {
        type: Number,
        required: true,
      },
    places: {
        type: Number,
        required: true,
      },
    id_bus: [{
      type: Schema.Types.ObjectId,
      required: true,
      ref:'bus'
    }],
  },
  { timestamps: true }
);

module.exports = trip = mongoose.model("trip", tripSchema);
