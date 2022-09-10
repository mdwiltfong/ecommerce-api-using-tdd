const express = require('express');
const pool = require('../db');
const cartRouter = express.Router();
const queries = require('../queries');

// Add Item(s) to cart

