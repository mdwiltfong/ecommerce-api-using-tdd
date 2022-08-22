const express = require('express');
const app = require('../server');
const apiRouter = express.Router();

// Import and mount the profile router
const profileRouter = require('../server/routes/profile');
app.use('/api/profile', profileRouter);


module.exports = apiRouter;