const express = require('express');
const app = require('../server');
const apiRouter = express.Router();

// Import and mount the profile router
const profileRouter = require('../server/routes/profile');
app.use('/api/profile', profileRouter);

// Import and mount the products router
const productsRouter = require('../server/routes/products');
app.use('/api/products', productsRouter);

// Import and mount the cart router
// const cartRouter = require('../server/routes/cart');
// app.use('/api/cart')


module.exports = apiRouter;