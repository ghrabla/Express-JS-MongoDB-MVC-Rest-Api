const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = Schema(
  {
    fullname: { 
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    password: { 
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = client = mongoose.model("client", clientSchema);
