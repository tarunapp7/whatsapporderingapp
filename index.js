const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./src/routes');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
