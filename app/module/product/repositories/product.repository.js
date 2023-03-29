const ProductModel = require("../models/model.product");

const Create = async (data) => {
  const user = new ProductModel(data);
  return await user.save();
};

const Single = async (query) => {
  return await ProductModel.findOne(query);
};
const Delete = async (query) => {
  return await ProductModel.deleteOne(query);
};
module.exports = {
  Create,
  Single,
  Delete,
};
