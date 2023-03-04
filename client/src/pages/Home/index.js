import React, {useState} from "react";
import {BsArrowRight} from "react-icons/bs";
import ProductSlider from "../../components/ProductsSlider";
import {Link, useNavigate} from "react-router-dom";
import {AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai";
import {motion} from "framer-motion";
import HeroSection from "./HeroSection/HeroSection";
import LandingSection from "./LandingSection/LandingSection";
import ProductsCategory from "./ProductsCategory/ProductsCategory";
import SliderProducts from "./SliderProducts/SliderPRoducts";
import {ToastContainer} from "react-toastify";

const HomePage = () => {
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
    <motion.div
      variants={container}
      animate="visible"
      initial="hidden"
      className="container flex flex-col items-center w-full relative mt-12"
    >
      <HeroSection />
      <LandingSection />
      <ProductsCategory />
      <SliderProducts />
      <ToastContainer theme="dark" />
    </motion.div>
  );
};

export default HomePage;
