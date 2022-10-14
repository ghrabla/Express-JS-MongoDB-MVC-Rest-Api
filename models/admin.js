const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema(
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
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = admin = mongoose.model("admin", adminSchema);
