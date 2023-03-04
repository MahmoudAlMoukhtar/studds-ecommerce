import React, {useState} from "react";
import {BiShowAlt, BiHide} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
import * as api from "../../api/index";
import {motion} from "framer-motion";
import {ToastContainer} from "react-toastify";

const initialState = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const navigait = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    if (isSignup) {
      const {data} = await api.signup(formData);
      localStorage.setItem("userEcommerce", JSON.stringify(data));
      await api.createCart();
      navigait("/");
    } else {
      const {data} = await api.signin(formData);
      localStorage.setItem("userEcommerce", JSON.stringify(data));
      navigait("/");
    }
  };

  const handleTextFieldChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const switchMode = () => {
    setIsSignup(!isSignup);
  };

  const container = {
    hidden: {opacity: 1, scale: 0},
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <React.Fragment>
      <motion.div
        variants={container}
        whileInView="visible"
        initial="hidden"
        className="flex justify-center items-center min-h-full w-full sm:w-[600px] rounded mx-10 mt-12 my-8 px-4 sm:px-6 lg:px-8 bg-black text-white"
      >
        <div className="flex flex-col w-full max-w-md ">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
              {isSignup ? "Sign-Up" : "Sign in to your account"}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-400">
              Or{" "}
              <a href="#" className="font-medium text-white">
                start your 14-day free trial
              </a>
            </p>
          </div>
          <form
            className="mt-8 space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className=" rounded-md shadow-sm">
              {isSignup && (
                <div>
                  <label htmlFor="fullName" className="">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-400 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="First Name"
                    onChange={handleTextFieldChange}
                  />
                </div>
              )}
              <div>
                <label htmlFor="email" className="">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-400 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  onChange={handleTextFieldChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="">
                  Password
                </label>
                <div className="flex gap-2 items-center appearance-none rounded-none rounded-b-md border border-gray-300">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-400 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Password"
                    onChange={handleTextFieldChange}
                  />
                  {!showPassword ? (
                    <BiShowAlt
                      onClick={() => setShowPassword(!showPassword)}
                      className="cursor-pointer "
                      size={20}
                    />
                  ) : (
                    <BiHide
                      onClick={() => setShowPassword(!showPassword)}
                      className="cursor-pointer "
                      size={20}
                    />
                  )}
                </div>
                {isSignup && (
                  <div className="flex gap-2 items-center appearance-none rounded-none rounded-b-md border border-gray-300">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-400 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Confirm Password"
                      onChange={handleTextFieldChange}
                    />
                    {!showPassword ? (
                      <BiShowAlt
                        onClick={() => setShowPassword(!showPassword)}
                        className="cursor-pointer "
                        size={20}
                      />
                    ) : (
                      <BiHide
                        onClick={() => setShowPassword(!showPassword)}
                        className="cursor-pointer "
                        size={20}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-white focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-400"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-white hover:text-white">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-[#ca0202]"
              >
                {isSignup ? "Sign Up" : "Sign In"}
              </button>
            </div>

            <div className="group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white">
              {isSignup ? (
                <div>
                  Already have an account?{" "}
                  <button onClick={switchMode} className="font-bold">
                    Sign In
                  </button>
                </div>
              ) : (
                <div>
                  Don't have an account?{" "}
                  <button onClick={switchMode} className="font-bold">
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
        <ToastContainer theme="dark" />
      </motion.div>
    </React.Fragment>
  );
};

export default Auth;
