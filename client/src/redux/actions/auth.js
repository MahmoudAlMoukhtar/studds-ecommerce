import {toast} from "react-toastify";
import * as api from "../../api/index";

export const signin = formData => {
  return async dispatch => {
    const {data} = await api.signin(formData);
    toast.success("Login successfully");
    dispatch({type: "SIGNIN", payload: data});
    localStorage.setItem("userEcommerce", JSON.stringify(data));
  };
};

export const signup = formData => {
  return async dispatch => {
    const {data} = await api.signup(formData);
    toast.success("Signup successfully");
    dispatch({type: "SIGNUP", payload: data});
    localStorage.setItem("userEcommerce", JSON.stringify(data));
  };
};

export const Logout = () => {
  return dispatch => {
    localStorage.removeItem("user");
    dispatch({type: "logout"});
  };
};
