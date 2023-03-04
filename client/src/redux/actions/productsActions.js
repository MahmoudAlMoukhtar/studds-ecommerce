import * as api from "../../api/index";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT_BY_ID,
  LOADING_PRODUCTS,
} from "../constants/constants";

export const fetchAllProductsAction = () => async dispatch => {
  try {
    const {data} = await api.fetchProducts();
    console.log(data);
    dispatch({type: FETCH_PRODUCTS, payload: data});
    dispatch({type: LOADING_PRODUCTS, payload: false});
  } catch (err) {
    console.log("Error in action fetchProducts");
  }
};

export const fetchProductByIdAction = id => async dispatch => {
  try {
    dispatch({type: "LOADING_PRODUCT", payload: true});
    const {data} = await api.fetchProductById(id);
    dispatch({type: FETCH_PRODUCT_BY_ID, payload: data});
    dispatch({type: "LOADING_PRODUCT", payload: false});
  } catch (err) {
    console.log("Error in action fetchProductByIdAction");
  }
};
