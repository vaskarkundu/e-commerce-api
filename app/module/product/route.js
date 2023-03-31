const express = require("express");
const router = express.Router();
const passport = require("passport");

const ProductCtrl = require("./controllers/product.controller");

const ProductModel = require("./models/model.product");
const Middlewares = require("../core/middlewares/index");
// const LoadModel = require("../core/middleware/index");
const LoadProduct = Middlewares.LoadModel({ model: ProductModel });
const Pagination = Middlewares.Pagination(ProductModel);

router.post(
  "/create/",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => next(),
  ProductCtrl.Create
);
router.put(
  "/:id/edit",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => next(),
  [LoadProduct],
  ProductCtrl.Update
);

router.get(
  "/:id/detail",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => next(),
  [LoadProduct],
  ProductCtrl.Details
);

router.post(
  "/:id/remove",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => next(),
  [LoadProduct],
  ProductCtrl.Remove
);

router.get(
  "/index",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => next(),
  Middlewares.Pagination(ProductModel),
  ProductCtrl.Index
);

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
