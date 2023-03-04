const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  titleProduct: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  favoraitCount: {
    type: Number,
    default: 0,
  },
  // name: {
  //   type: String,
  // },
  numberSell: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
  },
  stock: {
    type: Number,
    default: 0,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
