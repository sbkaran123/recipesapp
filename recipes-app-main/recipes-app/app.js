const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const recipeRoutes = require('./routes/recipeRoutes');

dotenv.config();

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });

// Routes
app.use('/api', recipeRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Recipes App!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
