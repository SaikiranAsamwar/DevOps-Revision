const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/mydb')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('2-Tier App Working 🚀');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
