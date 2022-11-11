const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const busSchema = Schema(
  {
    name: { 
      type: String,
      required: true,
    },

    places: {
      type: Number,
      required: true,
    },
    matrql:{
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = bus = mongoose.model("bus", busSchema);
