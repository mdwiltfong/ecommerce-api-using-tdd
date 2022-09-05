const express = require('express');
const pool = require('../db');
const productsRouter = express.Router();
const queries = require('../queries')

// GET all product images 
productsRouter.get('/', async (req, res, next) => {
    try {
        let images = await pool.query(queries.getImages);
        res.send(images.rows)
    console.log(images.rows)
    } catch (err) {
        console.err(err.message)
    }
})



module.exports = productsRouter;