import React from "react";
import Spinner from "../../Spinner";
import Pay from "../../components/Pay";
import {motion} from "framer-motion";
import {useSelector} from "react-redux";
import {ToastContainer} from "react-toastify";
import CartItem from "../../components/CartItem";

const CartPage = () => {
  const {cartProducts, loading} = useSelector(state => state.cart);
  const totalCart = cartProducts?.reduce(
    (total, item) => total + item.price,
    0
  );
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

  if (loading) return <Spinner />;
  if (cartProducts.length === 0)
    return <h1 className="z-50 text-6xl min-h-screen">Empty Cart</h1>;
  return (
    <motion.div
      variants={container}
      animate="visible"
      initial="hidden"
      className="flex flex-col gap-20 justify-center gap-10 bg-[#d9d4ce] px-4 md:px-10 lg:px-40 xl:px-60 my-40 w-full"
    >
      <div className="flex justify-between items-center w-full">
        <p className="font-semibold text-xl">Shopping Card</p>
        <Pay totalCart={totalCart} />
      </div>
      <div className="flex flex-col items-center gap-4">
        {cartProducts.map(p => (
          <CartItem p={p} key={p._id} />
        ))}
      </div>
      <ToastContainer theme="dark" />
    </motion.div>
  );
};

export default CartPage;
