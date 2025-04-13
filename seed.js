const mongoose = require("mongoose");
const Product = require("./models/Product");
require("dotenv").config();

const snacks = [
  { name: "Murukulu (Jenthikalu)", pricePerKg: 320, category: "Snacks", imageUrl: "https://cdn.example.com/snacks/murukulu.jpg" },
  { name: "Atukula Mixture", pricePerKg: 320, category: "Snacks", imageUrl: "https://cdn.example.com/snacks/atukula_mixture.jpg" }
];

const sweets = [
  { name: "Boondi Laddu", pricePerKg: 360, category: "Sweets", imageUrl: "https://cdn.example.com/sweets/boondi_laddu.jpg" },
  { name: "Madatha Kaja", pricePerKg: 440, category: "Sweets", imageUrl: "https://cdn.example.com/sweets/madatha_kaja.jpg" }
];

const products = [...snacks, ...sweets];

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log("✅ Products seeded successfully!");
  process.exit();
}).catch((err) => console.error("MongoDB Error:", err));