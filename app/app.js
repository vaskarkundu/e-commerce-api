const express = require("express");
const dotenv = require("dotenv");
const passport = require("passport");
const cors = require("cors");

const app = express();
dotenv.config();

// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// passport
app.use(passport.initialize());
require("./module/auth/config/passport");

// // Routes
app.use("/api/v1", require("./module/auth/route"));
app.use("/api/v1/products", require("./module/product/route"));
app.use("/api/v1/cart", require("./module/cart/route"));
module.exports = app;
