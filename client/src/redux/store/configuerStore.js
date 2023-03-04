import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/authReducer";
import cartReducer from "../reducers/cartReducer";
import productsReducer from "../reducers/productsReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      products: productsReducer,
      auth: authReducer,
      cart: cartReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
