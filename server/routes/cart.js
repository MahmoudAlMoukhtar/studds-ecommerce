const express = require("express");
const {
  getProductsCartByIdUser,
  createCart,
  addProductToCart,
  emptyCart,
  deleteProductById,
  updateProductCartByID,
} = require("../controller/cart");
const authMW = require("../middleware/authMW");

const router = express.Router();

router.get("/", authMW, getProductsCartByIdUser);
router.post("/", authMW, createCart);
router.put("/", authMW, addProductToCart);
router.patch("/", authMW, updateProductCartByID);
router.delete("/", authMW, emptyCart);
router.delete("/:id", authMW, deleteProductById);

module.exports = router;
