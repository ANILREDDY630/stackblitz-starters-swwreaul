const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


const app = express();


const PORT = process.env.PORT || 5000;


const mongoURI = process.env.MONGO_URI;


mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to database');
})
.catch((error) => {
  console.error('Error connecting to database:', error.message);
});

// Define a Simple Route for Testing
app.get('/', (req, res) => {
  res.send('Customer Management System Backend is Running');
});

// Start the Express Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
