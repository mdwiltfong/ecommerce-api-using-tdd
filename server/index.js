require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5000;

module.exports = app;

//Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//Add middleware for parsing request bodies
app.use(bodyParser.json());

//Import and mount cart router
const apiRouter = require("../server/api");
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});
