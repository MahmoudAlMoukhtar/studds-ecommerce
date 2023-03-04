import React from "react";
import {motion} from "framer-motion";

const ProductsCategory = () => {
  return (
    <motion.section
      initial={{y: "300px"}}
      whileInView={{y: 0}}
      transition={{duration: 1}}
      className="flex flex-col justify-center items-center gap-10 px-4 sm:px-10 md:px-20 lg:px-40 w-full bg-[#d9d4ce] py-20"
    >
      <h2 className="text-3xl sm:text-4xl text-[#ca0202]">
        Products Categories
      </h2>
      <div className="flex justify-center items-center gap-20 w-full flex-wrap md:flex-nowrap">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#482924] font-bold  text-center w-full">
          OPEN FACE HELMET
        </h1>
        <p className="w-[600px] font-semibold">
          Studds Accessories Ltd. is one of the leading manufacturers and
          exporters of Helmets & two wheeler accessories in india. Our product
          range includes Two Wheeler Accessories. Studds has a strong global
          presence with partners in over 35 countries
        </p>
      </div>

      <img src="/collection2.png" className="min-w-[350px] md:w-full" />
    </motion.section>
  );
};

export default ProductsCategory;
