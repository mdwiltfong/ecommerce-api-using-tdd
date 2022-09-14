const express = require('express');
const pool = require('../db');
const productsRouter = express.Router();
const queries = require('../queries');

// GET all product images 
productsRouter.get('/', async (req, res, next) => {
    try {
        const data = await pool.query(queries.getProductsData);
        res.send(data.rows)
    // console.log(data.rows)
    } catch (err) {
        console.log(err.message)
    }
})

productsRouter.get('/:id', async (req, res, next) => {
    try {
        // console.log(req.params.id)
        const productData = await pool.query(queries.productData, [req.params.id]);
        res.send(productData)
        console.log(productData)
    } catch (err) {
        console.log(err.message)
    }
})


module.exports = productsRouter;