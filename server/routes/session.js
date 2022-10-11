const express = require("express");
const sessionRouter = express.Router();
// const queries = require("../queries");

// GET individual product's details
sessionRouter.get("/", async (req, res, next) => {
    try {
        console.log("Session fetched from session route");
        res.status(200);
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = sessionRouter;