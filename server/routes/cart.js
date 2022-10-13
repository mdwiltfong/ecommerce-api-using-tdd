const express = require('express');
const pool = require('../db');
const cartRouter = express.Router();
const queries = require('../queries');

// Add Item(s) to cart
cartRouter.post('/', async (req, res, next) => {
    let productId = 0;
    const { size, quantity, productName } = req.body
    // console.log(req.body)
    let cartProduct = {
        name: productName, 
        size: size,
        quantity: quantity
    };
    try {
        if (req.session.cart === undefined) {
            req.session.cart = cartProduct;
            const addCartItem = await pool.query(queries.sessionQueries.addSessionCartItem, [req.session]);
            console.log(addCartItem);
            return res.status(201).send(req.session);
        };
    } catch (err) {
        console.log(err.message);
    }

    // This needs to be for a given user, thus needs a user_id. 
    // Checks the cart for the existence of product so as to add to quantity if it exists
    // If it doesnt exist then a new entry is created.  
    try {
        const checkCart = await pool.query(queries.checkExists, [productId]);
        if (checkCart.rows.length) {

        }
    } catch (err) {
        console.log(err.message);
    }
    // 
})

module.exports = cartRouter