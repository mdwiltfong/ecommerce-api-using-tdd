const express = require('express');
const pool = require('../db');
const profileRouter = express.Router();
var bcrypt = require('bcryptjs');

//"POST" a hashed password and username
profileRouter.post('/', async (req, res, next) => {
    try {
        let { email, password, confirmPassword } = req.body;
        const hash = await bcrypt.hash(password, 10);
        console.log({
            email,
            password,
            confirmPassword,
            hash
        });
        const newEmail = await pool.query(
            "INSERT INTO (email) VALUES ($1)",
            [email]
        );
        res.status(200).json(newEmail)
    } catch (err) {
        console.log(err);
        res.status(500).send('Something broke!');
    }
})

module.exports = profileRouter;