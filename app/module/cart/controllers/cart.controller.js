const CartRepo = require("../../cart/repositories/cart.repository");
const CartModel = require("../models/cart.model");

exports.Create = async (req, res) => {
  let cart = { ...req.body, user: req.user._id };

  try {
    let _cart = await CartRepo.Create(cart);
    return res.status(200).json({
      message: "Cart created successfully",
      data: _cart,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// exports.Update = async (req, res) => {
//   let product = req.model;
//   try {
//     Object.assign(product, req.body);
//     await product.save();
//     return res.json({
//       message: "Product updated successfully",
//       data: product,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// };

exports.Read = async (req, res) => {
  const cartID = req.params.id;
  try {
    let cart = await CartRepo.Single(cartID);

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    return res.status(200).json({ message: "Cart is here", data: cart });

    console.log(cart); // The full user document
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.Remove = async (req, res) => {
  let cartID = req.params.id;
  try {
    await CartRepo.Delete({ _id: cartID });
    return res.status(200).json({ message: "Cart removed successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
