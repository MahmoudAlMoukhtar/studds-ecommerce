import React from "react";
import {NavLink, useNavigate} from "react-router-dom";

const styles = {
  linkPages:
    "text-[#000] hover:text-white hover:text-white hover:bg-black py-6 px-2 font-semibold w-full hover:border-l-8 hover:border-[#ca0202] hover:font-bold w-full transtion duration-200",
  navBarModalHidden: "hidden",
  navBarModal:
    "fixed inset-0 bg-opacity-75 transition-opacity flex flex-col justify-center items-center z-50",
};

const NavbarModal = ({setNavBarModal, navbarModal}) => {
  const user = JSON.parse(localStorage.getItem("userEcommerce"));
  const navigaite = useNavigate();
  return (
    <div
      id="modal-nav"
      className={navbarModal ? styles.navBarModal : styles.navBarModalHidden}
    >
      <div
        onClick={() => setNavBarModal(false)}
        className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity flex flex-col justify-center items-center"
      ></div>
      <div
        id="content-modal-Collaps"
        className="bg-white flex flex-col gap-y-4 fixed z-10 top-0 left-0 border w-60 min-h-full shadow-2xl animate__animated animate__fadeInLeft"
      >
        <div id="header-cart" className="my-2 w-100">
          <button
            onClick={() => setNavBarModal(false)}
            className="font-bold ml-4"
          >
            X
          </button>
        </div>
        <ul className="flex flex-col items-start gap-2">
          <NavLink
            className={({isActive}) =>
              isActive
                ? "text-white bg-black py-6 px-2 font-bold w-full border-l-8 border-[#ca0202]"
                : styles.linkPages
            }
            to="/"
            end
          >
            <a href="#home">Home</a>
          </NavLink>
          <NavLink
            className={({isActive}) =>
              isActive
                ? "text-white bg-black py-6 px-2 font-bold w-full border-l-8 border-[#ca0202]"
                : styles.linkPages
            }
            to="/products"
            end
          >
            Products
          </NavLink>
          <NavLink
            className={({isActive}) =>
              isActive
                ? "text-white bg-black py-6 px-2 font-bold w-full border-l-8 border-[#ca0202]"
                : styles.linkPages
            }
            to="/aboutUs"
          >
            About
          </NavLink>
          <NavLink
            className={({isActive}) =>
              isActive
                ? "text-white bg-black py-6 px-2 font-bold w-full border-l-8 border-[#ca0202]"
                : styles.linkPages
            }
            to="/contact"
            end
          >
            <a href="#home">Contact</a>
          </NavLink>

          <NavLink
            className={({isActive}) =>
              isActive
                ? "text-white bg-black py-6 px-2 font-bold w-full border-l-8 border-[#ca0202]"
                : styles.linkPages
            }
            to="/cart"
            end
          >
            Cart
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default NavbarModal;

/* 

*/
