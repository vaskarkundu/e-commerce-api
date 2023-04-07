const express = require("express");
const router = express.Router();
const passport = require("passport");

const OrderCtrl = require("./controllers/order.controller");

const OrderModel = require("./models/order.model");
const Middlewares = require("../core/middlewares/index");
const LoadOrder = Middlewares.LoadModel({ model: OrderModel });

router.post(
  "/create/",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => next(),
  OrderCtrl.Create
);

router.put(
  "/:id/edit",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => next(),
  [LoadOrder],
  OrderCtrl.Update
);

router.get(
  "/:id/detail",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => next(),
  OrderCtrl.Read
);

router.post(
  "/:id/remove",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => next(),
  OrderCtrl.Remove
);

//Exports router
module.exports = router;
