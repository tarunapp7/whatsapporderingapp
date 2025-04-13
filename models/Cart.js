const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  phone: { type: String, required: true },
  items: [
    {
      name: String,
      quantity: String,
      weight: String,
      price: Number
    }
  ]
});

module.exports = mongoose.model("Cart", cartSchema);