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

// // passport
// app.use(passport.initialize());
// require("./modules/auth/config/passport");

// // Routes
// app.use("/v1", require("./modules/auth/route"));
// app.use("/v1/products", require("./modules/product/route"));
// app.use("/v1/collections", require("./modules/collections/route"));
module.exports = app;
