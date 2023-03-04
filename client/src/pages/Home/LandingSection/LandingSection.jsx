import React from "react";
import {motion} from "framer-motion";
const LandingSection = () => {
  const item = {
    hidden: {y: 50, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.section
      variants={item}
      id="landing"
      className="flex flex-col md:flex-row justify-between items-center gap-20 px-4 sm:px-10 md:px-20 lg:px-40 w-full h-[600px] my-40 "
    >
      <div className="flex flex-col gap-6 w-full md:w-96 md:translate-y-[-150px]">
        <p className="text-4xl">
          <span className="font-bold">Welcome to</span>
          <br />
          2015 fall collection
        </p>
        <span className="bg-[#ca0202] h-1 w-40"></span>
        <p>
          Studds Accessories Ltd. is one of the leading manufacturers and
          exporters of Helmets & two wheeler accessories in india. Our product
          range includes Two Wheeler Accessories. Studds has a strong global
          presence with partners in over 35 countries
        </p>
        <button className="text-xs text-black border-[2px] border-[#ca0202] rounded-3xl text-black w-24 py-2 px-4 font-semibold shadow-xl">
          red more
        </button>
      </div>

      <div className="flex flex-col items-end text-end gap-6 w-full md:w-96 md:translate-y-[-150px]">
        <p className="text-4xl">
          <span className="font-bold">Share</span>
          <br />
          your design
        </p>
        <span className="bg-[#ca0202] h-1 w-40"></span>
        <p>
          Studds Accessories Ltd. is one of the leading manufacturers and
          exporters of Helmets & two wheeler accessories in india. Our product
          range includes Two Wheeler Accessories. Studds has a strong global
          presence with partners in over 35 countries
        </p>
        <button className="text-xs text-black border-[2px] border-[#ca0202] rounded-3xl text-black w-24 py-2 px-4 font-semibold shadow-xl">
          share now
        </button>
      </div>
      <div className="w-full static block z-40 md:absolute	md:hidden  translate-y-[-150px]">
        <img src="/collection.png" className="min-w-[350px] md:w-full" />
      </div>
    </motion.section>
  );
};

export default LandingSection;
/* <img
        src="/collection.png"
        alt="item"
        className="translate-x-[-170px] translate-y-[100px] "
      /> */
