const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  phone: { type: String, required: true, unique: true },
  name: String,
  address: String
});

module.exports = mongoose.model("User", userSchema);