const express = require('express');
const pool = require('../db');
const cartRouter = express.Router();
const queries = require('../queries');

// Add Item(s) to cart
cartRouter.post('/', async (req, res, next) => {
    let cartProductNumber = 0;
    const { size, quantity, productName } = req.body;
    try {
        const getProductNumber = await pool.query(queries.productQueries.productData, [productName]);
        cartProductNumber = getProductNumber.rows[0].id;
        console.log(cartProductNumber)
    } catch (error) {
        console.log(error)
    }
    // let productId = 0;
    // console.log(req.body)
    let cartProduct = {
        [cartProductNumber]: {
            [size]: {
                quantity: quantity
            }
        }
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
})

cartRouter.put('/:id', async (req, res, next) => {

    // let cartData;
    // try {
    //     const grabCartItem = await pool.query(queries.sessionQueries.checkSession)
    // } catch (error) {
    //     console.log(error)
    // }

    // try {
    //     const editCartItem = await pool.query(queries, [req.params.id]);
    //     res.status(200).send(editCartItem);
    // } catch (error) {
    //     console.log(error)
    // }
})


module.exports = cartRouter