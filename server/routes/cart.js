const express = require('express');
const pool = require('../db');
const cartRouter = express.Router();
const queries = require('../queries');

// Add Item(s) to cart
// cartRouter.get('/:id', async (req, res, next) => {
//     const productId = '';
//     const { size, quantity, productName } = req.body
//     console.log(req.body)
//     try {
//         // const productData = await pool.query(queries.productData, [req.params.id]);
//         // res.send(productData)
//         // // console.log(productData)
//     } catch (err) {
//         console.log(err.message)
//     }
// })