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
const Index = async (query, page, size, sortQuery) => {
  if (!sortQuery) sortQuery = { updateAt: -1 };
  return await CollectionModel.find(query)
    .skip((page - 1) * size)
    .limit(size)
    .sort(sortQuery);
};
const Count = async (query) => {
  try {
    return await CollectionModel.countDocuments(query);
  } catch (error) {
    return [];
  }
};

module.exports = {
  Create,
  Single,
  Delete,
  Index,
  Count,
};
