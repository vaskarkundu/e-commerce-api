const CartModel = require("../models/cart.model");

const Create = async (data) => {
  const user = new CartModel(data);
  return await user.save();
};

const Single = async (query) => {
  return await CartModel.findById(query)
    .populate("user", "-password")
    .populate("items.product");
};
const Delete = async (query) => {
  return await CartModel.deleteOne(query);
};

module.exports = {
  Create,
  Single,
  Delete,
};
