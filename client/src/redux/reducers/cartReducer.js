import {
  ADD_CART_PRODUCT,
  FETCH_CART_PRODUCTS,
  REMOVE_CART_PRODUCT,
  UPDATE_CART_PRODUCT,
} from "../constants/constants";

const cartReducer = (state = {cartProducts: [], loading: true}, action) => {
  switch (action.type) {
    case FETCH_CART_PRODUCTS:
      return {...state, cartProducts: action.payload};

    case ADD_CART_PRODUCT:
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload],
      };

    case UPDATE_CART_PRODUCT:
      return {
        ...state,
        cartProducts: state.cartProducts.map(p => {
          if (p._id === action.payload._id) {
            return action.payload;
          } else {
            return p;
          }
        }),
      };

    case "LOADING_CART":
      return {...state, loading: action.payload};

    case REMOVE_CART_PRODUCT:
      const productIsExist = state.cartProducts.find(
        p => p._id === action.payload
      );
      console.log(productIsExist);
      if (productIsExist) {
        const cartRemovedItem = state.cartProducts.filter(
          p => p._id !== productIsExist._id
        );
        console.log(cartRemovedItem);
        return {...state, cartProducts: cartRemovedItem};
      } else {
        return state;
      }
    case "LOADING_CART":
      return {...state, loading: action.payload};
    default:
      return state;
  }
};

export default cartReducer;
