const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const app = express();
app.use(express.json());

// Temporary home route
app.get("/", (req, res) => {
  res.send("WhatsApp bot backend is live! 🚀");
});

// You can define more routes here or later import from a routes file

mongoose.connect(process.env.MONGODB_URI || "", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected");
}).catch((err) => {
  console.error("MongoDB error:", err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
