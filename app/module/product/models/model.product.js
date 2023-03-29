const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: String,
  summary: String,
  description: String,
  sku: { type: String, required: true },
  media: [
    {
      src: String,
      contentType: String,
    },
  ],
  price: { type: String, required: true },
  stock: Number,
  preOrder: Boolean,
  preOrderDate: Date,
  preOrderStock: Number,
  createAt: Date,
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ProductModel", ProductSchema);
