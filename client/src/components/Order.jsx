import React, {useState} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import {CgProfile} from "react-icons/cg";
import {BsTelephone} from "react-icons/bs";
import {IoLocationSharp} from "react-icons/io5";
import Pay from "./Pay";

const initialState = {
  email: "",
  location: "",
  productId: "",
  phone: 0,
};
const STATUS = {
  IDLE: "IDLE",
  SUBMITTING: "SUBMITTING",
  SUBMITTED: "SUBMITTED",
  COMPLETED: "COMPLETED",
};

const Order = () => {
  const user = JSON.parse(localStorage.getItem("userEcommerce"));
  const [formDataOrder, setFormDataOrder] = useState(initialState);
  const [saveError, setSaveError] = useState(null);
  const [touche, setTouche] = useState({});
  const [status, setStatus] = useState(STATUS.IDLE);
  const navigait = useNavigate();

  //   if (user) {
  //     return <Navigate to="/account" replace />;
  //   }
  //Derived state
  const errors = getErrors(formDataOrder);
  const isValid = Object.keys(errors).length === 0;

  function handleBlur(event) {
    const {id} = event.target;
    setTouche(curTouche => {
      return {...curTouche, [id]: true};
    });
  }

  function getErrors(formDataOrder) {
    const result = {};
    if (!formDataOrder.email) result.email = "Email is required";
    if (!formDataOrder.phone) result.phone = "phone is required";
    if (!formDataOrder.location) result.location = "location is required";
    return result;
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus(STATUS.SUBMITTED);
    if (isValid) {
      try {
        // const res = await api.signin(formDataOrder);
        // localStorage.setItem("userEcommerce", JSON.stringify(res.data));
        //console.log("submit test");
        setSaveError();
        setStatus(STATUS.COMPLETED);
        navigait("/");
      } catch (err) {
        setSaveError(err);
        setStatus(STATUS.SUBMITTED);
      }
    } else {
      setStatus(STATUS.SUBMITTED);
    }
  };
  const handleTextFieldChange = e => {
    e.persist();
    setFormDataOrder({...formDataOrder, [e.target.name]: e.target.value});
  };
  return (
    <motion.section
      id="order"
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      className="flex justify-center items-center flex-col md:flex-row gap-40 px-10 md:px-20 lg:px-40 bg-white w-full py-40 h-full"
    >
      <motion.div
        initial={{x: "-100px"}}
        whileInView={{x: 0}}
        className="flex flex-col gap-10 items-center w-full"
      >
        <div className="flex flex-col gap-2 items-center text-[#004440] z-40">
          <h2 className="text-4xl  xl:text-6xl font-semibold w-full">
            ORDER <span className="text-[#f1c19d]">YOUR</span>
          </h2>
          <p className="text-3xl lg:text-4xl">OWN DRINK</p>
        </div>
        <form
          className="flex flex-col items-start justify-center gap-10 w-full"
          onSubmit={handleSubmit}
        >
          {!isValid && status === STATUS.SUBMITTED && (
            <div role="alert">
              <p className="font-bold text-xl text-red-600">
                Please fix the following errors:
              </p>
              <ul>
                {Object.keys(errors).map((keyObj, index) => {
                  return (
                    <li key={keyObj}>{`${index + 1}- ${errors[keyObj]}`}</li>
                  );
                })}
              </ul>
            </div>
          )}
          <label className="flex items-center gap-6 w-full">
            <CgProfile size={20} />
            <input
              type="text"
              name="email"
              className="w-full p-1 border-b-2 border-[#004440]"
              placeholder="email"
              onChange={handleTextFieldChange}
              onBlur={handleBlur}
            />
          </label>
          {touche.email && (
            <p
              role="alert"
              className="text-white bg-red-300 p-1 w-full text-center"
            >
              {errors.email}
            </p>
          )}
          <label className="flex items-center gap-6 w-full">
            <BsTelephone size={20} />
            <input
              type="number"
              name="phone"
              className="w-full p-1 border-b-2 border-[#004440]"
              placeholder="phone"
              onChange={handleTextFieldChange}
              onBlur={handleBlur}
            />
          </label>
          {touche.phone && (
            <p
              role="alert"
              className="text-white bg-red-300 p-1 w-full text-center"
            >
              {errors.phone}
            </p>
          )}
          <label className="flex items-center gap-6 w-full">
            <IoLocationSharp size={20} />
            <select
              name="location"
              placeholder="Select Location"
              className="w-full p-1 border-b-2 border-[#004440] cursor-pointer"
              onChange={handleTextFieldChange}
              onBlur={handleBlur}
            >
              <option className="cursor-pointer">Jl Seturan, Yogyakarta</option>
              <option className="cursor-pointer">
                Jl Kaliurang, Yogyakarta
              </option>
              <option className="cursor-pointer">
                Jl Ahmad Dahlan, Yogyakarta
              </option>
              <option className="cursor-pointer">
                Jl Tanjung Duren, Jakarta
              </option>
            </select>
          </label>
          {touche.location && (
            <p
              role="alert"
              className="text-white bg-red-300 p-1 w-full text-center"
            >
              {errors.location}
            </p>
          )}
          <Pay />
        </form>
      </motion.div>
      <motion.div
        initial={{x: "100px"}}
        whileInView={{x: 0}}
        className="w-full max-w-[500px]"
      >
        <img src="/cup2Green.png" className="w-full" />
      </motion.div>
    </motion.section>
  );
};

export default Order;
