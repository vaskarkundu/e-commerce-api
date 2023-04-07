const OrderModel = require("../models/order.model");

const Create = async (data) => {
  const user = new OrderModel(data);
  return await user.save();
};

const Find = async (query) => {
  return await OrderModel.findById(query);
};

const Single = async (query) => {
  return await OrderModel.findById(query)
    .populate("user", "-password")
    .populate("carts.cart");
};
const Delete = async (query) => {
  return await OrderModel.deleteOne(query);
};

module.exports = {
  Create,
  Single,
  Delete,
  Find,
};
