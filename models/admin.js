const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = Schema(
  {
    fullname: { 
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: { 
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = admin = mongoose.model("admin", adminSchema);
