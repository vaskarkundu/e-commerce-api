const express = require("express");
const router = express.Router();
const passport = require("passport");

const ProductCtrl = require("./controllers/product.controller");

const ProductModel = require("./models/model.product");
const Middlewares = require("../core/middlewares/index");
// const LoadModel = require("../core/middleware/index");
const LoadProduct = Middlewares.LoadModel({ model: ProductModel });

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => next(),
  ProductCtrl.Create
);
// router.put(
//   "/:id",
//   passport.authenticate("jwt", { session: false }),
//   (req, res, next) => next(),
//   [LoadCollection],
//   CollectionCtrl.Update
// );

// router.get(
//   "/:id",
//   passport.authenticate("jwt", { session: false }),
//   (req, res, next) => next(),
//   [LoadCollection],
//   CollectionCtrl.Details
// );

// router.post(
//   "/:id",
//   passport.authenticate("jwt", { session: false }),
//   (req, res, next) => next(),
//   [LoadCollection],
//   CollectionCtrl.Remove
// );

// router.get(
//   "/",
//   passport.authenticate("jwt", { session: false }),
//   (req, res, next) => next(),
//   CollectionCtrl.Index
// );

// router.post(
//   "/:id/products",
//   passport.authenticate("jwt", { session: false }),
//   (req, res, next) => next(),
//   [LoadCollection],
//   CollectionCtrl.AddProducts
// );
// router.put(
//   "/:id/products/:productId",
//   passport.authenticate("jwt", { session: false }),
//   (req, res, next) => next(),
//   [LoadCollection],
//   CollectionCtrl.UpdateCollectionProduct
// );
// router.post(
//   "/:id/products/:productId",
//   passport.authenticate("jwt", { session: false }),
//   (req, res, next) => next(),
//   [LoadCollection],
//   CollectionCtrl.RemoveProductFromCollection
// );
// router.post(
//   "/:id/products/:productId/sync",
//   passport.authenticate("jwt", { session: false }),
//   (req, res, next) => next(),
//   [LoadCollection],
//   CollectionCtrl.SyncProduct
// );
//Exports router
module.exports = router;
