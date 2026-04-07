const express = require('express');
const mongoose = require('mongoose');

const app = express();

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello from Backend 🚀');
});

app.listen(5000, () => {
  console.log('Backend running on port 5000');
});
