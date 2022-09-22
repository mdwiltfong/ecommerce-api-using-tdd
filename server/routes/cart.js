const express = require('express');
const pool = require('../db');
const cartRouter = express.Router();
const queries = require('../queries');

// Add Item(s) to cart
cartRouter.post('/:id', async (req, res, next) => {
    let productId = 0;
    const { size, quantity, productName } = req.body
    // console.log(req.body)
    try {
        const getItemId = await pool.query(queries.productId, [productName]);
        // console.log(getItemId.rows[0].id)
        productId = getItemId.rows[0].id;
        console.log(productId)
    } catch (err) {
        console.log(err.message)
    }
    try {
        const checkCart = await pool.query(queries.checkExists, [productId]);
        if (checkCart.rows.length) {
            
        }
    } catch (err) {
        console.log(err.message)
    }
})

module.exports = cartRouter