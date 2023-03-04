const Cart = require("../models/cart");
const Product = require("../models/product");

const getProductsCartByIdUser = async (req, res) => {
  try {
    let productsDetailes = [];
    const productsCart = await Cart.findOne({idUser: req.userId});

    if (productsCart.products.length > 0) {
      for (let product of productsCart.products) {
        if (Object.keys(product).length < 1) continue;
        const detailProduct = await Product.findById(product.idProduct);
        productsDetailes.push({
          ...detailProduct._doc,
          quantity: product.quantity,
          size: product.size,
        });
      }
    }

    res.status(200).json(productsDetailes);
  } catch (err) {}
};

const createCart = async (req, res) => {
  const products = req.body;
  try {
    const cart = await new Cart({
      idUser: req.userId,
      products: products,
    });
    await cart.save();
    res.status(201).json(cart);
  } catch (err) {
    res.status(400).send({message: err.message});
  }
};

const addProductToCart = async (req, res) => {
  const updates = req.body;
  try {
    let cart = await Cart.findOne({idUser: req.userId});
    const newProduct = await Product.findById(updates.idProduct);
    cart.products.push(updates);
    await Cart.findOneAndUpdate({idUser: req.userId}, cart, {
      new: true,
    });
    res.status(200).json({...newProduct._doc, ...updates});
  } catch (err) {
    res.status(400).send({message: err.message});
  }
};
const updateProductCartByID = async (req, res) => {
  const updates = req.body;
  try {
    let cart = await Cart.findOne({idUser: req.userId});
    const product = await Product.findById(updates.idProduct);
    cart = {
      ...cart._doc,
      products: cart._doc.products.map(p => {
        if (p.idProduct == updates.idProduct) {
          return {
            ...p._doc,
            size: updates.size,
            quantity: parseInt(updates.quantity),
          };
        } else {
          return p;
        }
      }),
    };
    await Cart.findOneAndUpdate({idUser: req.userId}, cart, {
      new: true,
    });
    res.status(200).json({...product._doc, ...updates});
  } catch (err) {
    res.status(400).send({message: err.message});
  }
};

const emptyCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({idUser: req.userId});
    cart.products = [];
    const updatedCartProducts = await Cart.findOneAndUpdate(
      {idUser: req.userId},
      cart,
      {
        new: true,
      }
    );
    res.status(200).json(updatedCartProducts);
  } catch (err) {
    res.status(400).send({message: err.message});
  }
};

const deleteProductById = async (req, res) => {
  const {id: _id} = req.params;
  try {
    let cart = await Cart.findOne({idUser: req.userId});
    const index = cart.products.findIndex(p => p.idProduct === _id);
    cart.products.splice(index, 1);
    const updatedCartProducts = await Cart.findOneAndUpdate(
      {idUser: req.userId},
      cart,
      {
        new: true,
      }
    );
    res.status(200).json(updatedCartProducts);
  } catch (err) {
    res.status(400).send({message: err.message});
  }
};

module.exports = {
  getProductsCartByIdUser,
  createCart,
  addProductToCart,
  emptyCart,
  deleteProductById,
  updateProductCartByID,
};
/* 

const upadteCart = async (req, res) => {
  const updates = req.body;
  try {
    let cart = await Cart.findOne({idUser: req.userId});
    const newProduct = await Product.findById(updates.idProduct);
    const finded = cart.products.find(p => p.idProduct == newProduct._id);
    if (finded) {
      cart = {
        ...cart,
        products: cart.products.map(p => {
          if (p._id === newProduct._id) {
            return {...p, quantity: p.quantity + updates.quantity};
          } else {
            return p;
          }
        }),
      };
    } else {
      cart.products.push(updates);
    }
    await Cart.findOneAndUpdate({idUser: req.userId}, cart, {
      new: true,
    });
    res.status(200).json({...newProduct._doc, ...updates});
  } catch (err) {
    res.status(400).send({message: err.message});
  }
};

*/
