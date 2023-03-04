import React from "react";
import {Link} from "react-router-dom";
import {
  AiOutlineFacebook,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-black flex flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-start gap-10 flex-wrap sm:flex-nowrap text-white py-10 px-4 sm:px-10 lg:px-40 w-full">
      <div className="w-40 block sm:hidden ">
        <img src="/item0.png" className="w-full translate-y-[-50px]" />
      </div>
      <div className="flex flex-col gap-4">
        <a href="#" className="text-[#ca0202] font-bold text-4xl">
          STUDDS
        </a>
        <p className="text-sm text-gray-500">Studds Accessories Ltd</p>
        <ul className="flex items-center gap-1">
          <a
            target="blank"
            href="https://www.facebook.com/"
            className="border-[1px] border-gray-700 rounded-full p-[4px]"
          >
            <AiOutlineFacebook size={20} />
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/"
            className="border-[1px] border-gray-700 rounded-full p-[4px]"
          >
            <AiFillLinkedin size={20} />
          </a>
          <a
            target="blank"
            href="https://twitter.com/"
            className="border-[1px] border-gray-700 rounded-full p-[4px]"
          >
            <AiOutlineTwitter size={20} />
          </a>
          <a
            target="blank"
            href="https://www.instagram.com/"
            className="border-[1px] border-gray-700 rounded-full p-[4px]"
          >
            <AiFillInstagram size={20} />
          </a>
        </ul>
      </div>
      <section className="flex flex-col justify-center items-center text-center sm:flex-row  sm:justify-between sm:items-start sm:text-start gap-4 flex-wrap sm:flex-nowrap w-full">
        <div className="flex flex-col gap-4">
          <h5 className="text-md">GENERAL</h5>
          <nav className="flex flex-col justify-center items-center text-center  sm:justify-between sm:items-start sm:text-start gap-4">
            <Link to={"/"} className="text-gray-500 text-sm">
              HOME
            </Link>
            <Link to={"/aboutUs"} className="text-gray-500 text-sm">
              ABOUT
            </Link>
            <Link to={"/menu"} className="text-gray-500 text-sm">
              Products
            </Link>
          </nav>
        </div>
        <div className="flex flex-col justify-center items-center text-center  sm:justify-between sm:items-start sm:text-start gap-4">
          <h5 className="text-md">CONTACT</h5>
          <nav className="flex flex-col justify-center items-center text-center  sm:justify-between sm:items-start sm:text-start gap-4">
            <Link to={"/contact"} className="text-gray-500 text-sm">
              CONTACT US
            </Link>
            <Link to={"/cart"} className="text-gray-500 text-sm">
              CART
            </Link>
            <Link to={"/auth"} className="text-gray-500 text-sm">
              LOGIN
            </Link>
          </nav>
        </div>
        <div className="flex flex-col justify-center items-center text-center  sm:justify-between sm:items-start sm:text-start gap-4">
          <h5 className="text-md">MEDIA</h5>
          <nav className="flex flex-col justify-center items-center text-center  sm:justify-between sm:items-start sm:text-start gap-4">
            <a
              target="blank"
              href="https://www.facebook.com/"
              className="text-gray-500 text-sm"
            >
              FACEBOOK
            </a>
            <a
              target="blank"
              href="https://www.instagram.com/"
              className="text-gray-500 text-sm"
            >
              INSTGRAM
            </a>
            <a
              target="blank"
              href="https://twitter.com/"
              className="text-gray-500 text-sm"
            >
              TWITTER
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/"
              className="text-gray-500 text-sm"
            >
              LINKEDIN
            </a>
          </nav>
        </div>
        <div className="w-40 hidden sm:block sm:static">
          <img
            src="/item0.png"
            className="w-full translate-y-[-50px]"
            alt="helmet"
          />
        </div>
      </section>
    </div>
  );
};

export default Footer;
