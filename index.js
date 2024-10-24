const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productRoute = require('./product/routes/products.routs')
require('dotenv').config();
const cors = require('cors');

const dbUrl = process.env.DATABASE_URL;
const PORT = 5000;

app.use(express.json()); // to parse json data in request body
app.use(express.urlencoded({ extended: false }));

app.use(cors({
  origin: 'http://localhost:3000'
}));

// app.use('/', (req, res) => {
//     res.send('Welcome to my API!');
// })

app.use('/products', productRoute)

mongoose.connect(dbUrl)
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log("Server is running on port 5000 thanks");
    });
  })
  .catch(() => {
    console.log("Failed to connect to MongoDB");
  });