const express = require("express");
const router = express.Router();
const passport = require("passport");

const CartCtrl = require("./controllers/cart.controller");
const ItemCart = require("./controllers/items.controller");

const CartModel = require("./models/cart.model");
const Middlewares = require("../core/middlewares/index");
const LoadCart = Middlewares.LoadModel({ model: CartModel });
const Pagination = Middlewares.Pagination(CartModel);

router.post(
  "/create/",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => next(),
  CartCtrl.Create
);

router.put(
  "/:id/edit",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => next(),
  [LoadCart],
  CartCtrl.Update
);

router.get(
  "/:id/detail",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => next(),

  CartCtrl.Read
);

router.post(
  "/:id/remove",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => next(),

  CartCtrl.Remove
);

router.post(
  "/:id/addproduct/",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => next(),
  [LoadCart],
  ItemCart.AddToItem
);
router.post(
  "/:id/removeproduct/",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => next(),

  ItemCart.RemoveItem
);
// router.get(
//   "/index",
//   passport.authenticate("jwt", { session: false }),
//   (req, res, next) => next(),
//   Middlewares.Pagination(ProductModel),
//   ProductCtrl.Index
// );

//Exports router
module.exports = router;
