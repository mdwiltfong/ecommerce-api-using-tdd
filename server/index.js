const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000;

module.exports = app;

//Middleware
app.use(cors());
app.use(express.json())

//Add middleware for parsing request bodies
app.use(bodyParser.json())

//Import and mount cart router
const apiRouter = require('../server/api');
app.use('/api', apiRouter);


app.listen(PORT, () => {
    console.log(`server has started on port ${PORT}`)
});