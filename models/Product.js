const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  pricePerKg: Number,
  category: String,
  imageUrl: String
});

module.exports = mongoose.model("Product", productSchema);