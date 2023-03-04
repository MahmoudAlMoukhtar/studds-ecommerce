import * as api from "../../api/index";
import {toast} from "react-toastify";

import {
  ADD_CART_PRODUCT,
  FETCH_CART_PRODUCTS,
  FETCH_PRODUCTS,
  FETCH_PRODUCT_BY_ID,
  REMOVE_CART_PRODUCT,
  UPDATE_CART_PRODUCT,
} from "../constants/constants";

export const fetchAllProductsCartAction = () => async dispatch => {
  try {
    const {data} = await api.fetchCart();
    dispatch({type: "LOADING_CART", payload: true});
    dispatch({type: FETCH_CART_PRODUCTS, payload: data});
    dispatch({type: "LOADING_CART", payload: false});
  } catch (err) {
    console.log("Error in action FETCH_CART_PRODUCTS");
  }
};

export const addProductCartAction = updates => async dispatch => {
  try {
    const res = await api.updateCart(updates);

    toast.success("Add Product to cart successfull");
    dispatch({type: ADD_CART_PRODUCT, payload: res.data});
  } catch (err) {
    toast.error("Add Product to cart fall");
    console.log("Error in action ADD_CART_PRODUCT");
  }
};

export const removeProductCartAction = id => async dispatch => {
  try {
    const {data} = await api.deleteProductCartById(id);
    toast.success("Reomved Product from cart successfull");
    dispatch({type: REMOVE_CART_PRODUCT, payload: id});
  } catch (err) {
    toast.error("Error in removed product from cart");
    console.log("Error in action REMOVE_CART_PRODUCT");
  }
};

export const updateProductCartAction = updates => async dispatch => {
  try {
    const {data} = await api.updateProductCart(updates);
    dispatch({type: UPDATE_CART_PRODUCT, payload: data});
  } catch (err) {
    console.log("Error in action UPDATE_CART_PRODUCT");
  }
};
