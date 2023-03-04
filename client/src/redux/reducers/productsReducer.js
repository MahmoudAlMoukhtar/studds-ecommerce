import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT_BY_ID,
  LOADING_PRODUCTS,
} from "../constants/constants";
const productsReducer = (
  state = {loading: true, products: [], product: {}, loadingProduct: true},
  action
) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {...state, products: action.payload};

    case FETCH_PRODUCT_BY_ID:
      //const product = state.products.find(item => item._id === action.payload);
      return {...state, product: action.payload};

    case LOADING_PRODUCTS:
      return {...state, loading: action.payload};
    case "LOADING_PRODUCT":
      return {...state, loadingProduct: action.payload};

    default:
      return state;
  }
};

export default productsReducer;
