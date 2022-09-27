const express = require("express");
const app = require("../server");
const apiRouter = express.Router();
const session = require ("express-session")


app.use(
    session({
        store: new (require('connect-pg-simple')(session))({
            // Insert connect-pg-simple options here
          }),
        secret: "Key that will sign cookie",
        resave: false,
        saveUninitialized: false
}))

// Import and mount the profile router
const profileRouter = require("../server/routes/profile");
app.use("/api/profile", profileRouter);

// Import and mount the products router
const productsRouter = require("../server/routes/products");
app.use("/api/products", productsRouter);

// Import and mount the cart router
const cartRouter = require("../server/routes/cart");
app.use("/api/cart", cartRouter);


module.exports = apiRouter;
