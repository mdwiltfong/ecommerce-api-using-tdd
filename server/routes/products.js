const express = require('express');
const pool = require('../db');
const productsRouter = express.Router();
const queries = require('../queries');

// GET all product images 
productsRouter.get('/', async (req, res, next) => {
    try {
        const sessionExists = await pool.query(queries.checkSession);
        if (!sessionExists.rows.length) {
            req.session.isAuth = true;
            console.log("Session created")
            // console.log(sessionExists)
        }
        console.log("Session exists")
    } catch (err) {
        console.log(err.message)
    }
    try {
        const data = await pool.query(queries.getProductsData);
        res.send(data.rows)
    // console.log(data.rows)
    } catch (err) {
        console.log(err.message)
    }
    
})

// GET individual product's details
productsRouter.get('/:id', async (req, res, next) => {
    try {
        // console.log(req.params.id)
        const productData = await pool.query(queries.productData, [req.params.id]);
        res.send(productData)
        // console.log(productData)
    } catch (err) {
        console.log(err.message)
    }
})


module.exports = productsRouter;