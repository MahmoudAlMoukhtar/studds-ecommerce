import React from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {HiMenuAlt1} from "react-icons/hi";
import {toast} from "react-toastify";

const styles = {
  linkPages:
    "text-sm md:text-md font-semibold py-[4px] px-2 lg:px-4 hover:bg-[#000] hover:text-[#fff] transtion duration-200 text-white sm:text-black",
};

const activeStyle = {
  color: "white",
  backgroundColor: "#000",
  padding: "4px 12px",
  fontWeight: "bold",
};

const Navbar = ({setNavBarModal, navbarModal}) => {
  const user = JSON.parse(localStorage.getItem("userEcommerce"));
  const navigaite = useNavigate();
  return (
    <nav className="flex justify-between sm:justify-center items-center gap-4 px-4 sm:px-20 md:px-40 lg:px-50 py-4 w-full  bg-[#ca0202] sm:bg-inherit shadow-xl">
      <ul className="invisible absolute sm:flex sm:items-center  md:gap-4 sm:visible sm:static">
        <NavLink
          style={({isActive}) => (isActive ? activeStyle : undefined)}
          to="/"
          end
          className={styles.linkPages}
        >
          <a href="#home">Home</a>
        </NavLink>
        <NavLink
          style={({isActive}) => (isActive ? activeStyle : undefined)}
          to="/products"
          end
          className={styles.linkPages}
        >
          Products
        </NavLink>
        <NavLink
          style={({isActive}) => (isActive ? activeStyle : undefined)}
          to="/aboutUs"
          className={styles.linkPages}
        >
          About
        </NavLink>
      </ul>
      <Link
        to="/"
        className="flex flex-col text-white font-bold text-3xl lg:text-4xl xl:text-5xl    md:mr-[100px]  md:ml-[130px]"
      >
        STUDDS
      </Link>
      <div className="flex justify-center md:gap-4 items-center">
        <ul className="invisible absolute sm:flex sm:items-center  md:gap-4 sm:visible sm:static">
          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/contact"
            end
            className={styles.linkPages}
          >
            <a href="#home">Contact</a>
          </NavLink>
          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/cart"
            end
            className={styles.linkPages}
          >
            Cart
          </NavLink>
        </ul>
        {!user ? (
          <NavLink
            style={({isActive}) => (isActive ? activeStyle : undefined)}
            to="/auth"
            end
            className={styles.linkPages}
          >
            Login
          </NavLink>
        ) : (
          <button
            className={styles.linkPages}
            onClick={() => {
              localStorage.removeItem("userEcommerce");
              toast.success("Logout successfully");
              navigaite("/");
            }}
          >
            Logout
          </button>
        )}
        <HiMenuAlt1
          size={30}
          onClick={() => setNavBarModal(!navbarModal)}
          className="cursor-pointer text-white sm:text-black"
        />
      </div>
    </nav>
  );
};

export default Navbar;
