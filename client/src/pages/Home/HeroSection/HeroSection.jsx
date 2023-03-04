import React from "react";
import {AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai";
import SliderItems from "../../../components/SliderITems";
import {motion} from "framer-motion";
const HeroSection = () => {
  const item = {
    hidden: {y: 50, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      variants={item}
      className="item flex flex-col items-center w-full"
    >
      <img src="/item0.png" alt="item" className="sm:hidden sm:absolute " />
      <section
        id="hero"
        className="flex justify-between items-center gap-4 px-4 sm:px-10 md:px-20 lg:px-40 w-full"
      >
        <div className="flex flex-col gap-6  sm:w-60">
          <div className="flex gap-2">
            <img src="/redDots.png" className="w-8 h-8" />
            <p className="text-sm">
              Check Out
              <br />
              2015 fall collection
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs lg:text-md tracking-widest text-[#ca0202]">
              INRODUCING THE ALL NEW
            </p>
            <h2 className="font-bold text-3xl md:text-4xl lg:text-6xl">
              CUB-07
              <br />
              DECOR
            </h2>
          </div>
          <button className="text-xs text-black border-[2px] border-[#ca0202] rounded-3xl text-black w-32 py-2 px-4 font-semibold shadow-xl">
            Know more
          </button>
        </div>
        <img
          src="/item0.png"
          alt="item"
          className="translate-x-[-40px] hidden absolute sm:block sm:static"
        />
        <SliderItems />
      </section>
    </motion.div>
  );
};

export default HeroSection;
