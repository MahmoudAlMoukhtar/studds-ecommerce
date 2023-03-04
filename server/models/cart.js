const mongooose = require("mongoose");

const cartSechma = mongooose.Schema({
  idUser: {
    type: String,
  },
  products: {
    type: [
      {
        idProduct: String,
        quantity: Number,
        size: String,
      },
    ],
  },
});

const Cart = mongooose.model("Cart", cartSechma);

module.exports = Cart;
