const CartModel = require("../models/cart.model");

const Create = async (data) => {
  const user = new CartModel(data);
  return await user.save();
};

const Find = async (query) => {
  return await CartModel.findById(query);
};

const Single = async (query) => {
  return await CartModel.findById(query)
    .populate("user", "-password")
    .populate("items.product");
};
const Delete = async (query) => {
  return await CartModel.deleteOne(query);
};

const RemoveProduct = async (cartID, productID) => {
  return await CartModel.updateOne(
    { _id: cartID },
    {
      $pull: {
        product: { id: productID },
      },
    }
  );
};

module.exports = {
  Create,
  Single,
  Delete,
  Find,
  RemoveProduct,
};
