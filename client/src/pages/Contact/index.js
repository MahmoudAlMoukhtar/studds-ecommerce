import React from "react";
import {MdLocationOn, MdOutlineEmail} from "react-icons/md";
import {AiOutlineMail, AiOutlinePhone} from "react-icons/ai";
import {motion} from "framer-motion";
import {toast, ToastContainer} from "react-toastify";

const ContactPage = () => {
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
    <motion.section
      variants={container}
      whileInView="visible"
      initial="hidden"
      id="contact"
      className="flex flex-col justify-between gap-8 bg-[#000] my-20 py-20 text-white  px-10 rounded-md mx-4 sm:w-[600px]"
    >
      <h4 className="text-4xl tracking-[0.2em] font-bold text-center">
        CONTACT US
      </h4>

      <div className="flex flex-col sm:flex-row sm:justify-between gap-4 w-full text-white">
        <div className="flex flex-col gap-2 items-center bg-[#ca0202] w-full sm:w-auto p-2 sm:py-4 sm:px-8 hover:scale-105 transtion duration-500 rounded">
          <AiOutlinePhone size={30} color="white" />
          <div className="flex flex-col items-center  text-xs">
            +(314) 287-6300
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center bg-[#ca0202] w-full sm:w-auto p-2 sm:py-4 sm:px-8 hover:scale-105 transtion duration-500 rounded">
          <AiOutlineMail size={30} color="white" />
          <div className="flex flex-col items-center  text-xs">
            studds@gmail.com
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center bg-[#ca0202] w-full sm:w-auto p-2 sm:py-4 sm:px-8 hover:scale-105 transtion duration-500 rounded">
          <MdLocationOn size={30} color="white" />
          <div className="flex flex-col items-center  text-xs">
            <p>United States</p>
          </div>
        </div>
      </div>
      <form className="flex flex-col justify-center items-center gap-y-8">
        <label
          for="name"
          className="text-white font-semibold flex flex-col w-[100%]"
        >
          First Name
          <input
            type="text"
            name="name"
            id="name"
            className="border-[1px] border-black  px-4 py-2  w-[100%] rounded text-black"
          />
        </label>
        <label
          for="name"
          className="text-white font-semibold flex flex-col w-[100%] rounded"
        >
          Last Name
          <input
            type="text"
            name="name"
            id="name"
            className="border-[1px] border-black px-4 py-2  w-[100%] rounded text-black"
          />
        </label>
        <label for="email" className="text-white font-semibold w-[100%]">
          Email
          <input
            type="email"
            name="email"
            id="email"
            className="border-[1px] border-black  px-4 py-2  w-[100%] rounded text-black"
          />
        </label>
        <label for="message" className="text-white font-semibold w-[100%]">
          Message
          <textarea
            name=""
            id=""
            cols={"100"}
            rows="5"
            className="border-[1px] border-black w-[100%] rounded text-black"
          ></textarea>
        </label>
      </form>
      <button
        className="bg-[#ca0202] p-4 font-semibold text-white transtion duration-200 w-full rounded"
        onClick={() => {
          toast.success("Submit your message in successfull");
        }}
      >
        Submit
      </button>
      <ToastContainer theme="dark" />
    </motion.section>
  );
};
export default ContactPage;
