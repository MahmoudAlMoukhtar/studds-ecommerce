import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import Spinner from "../../Spinner";
import Rating from "../../components/Rating";
import {useDispatch, useSelector} from "react-redux";
import {fetchProductByIdAction} from "../../redux/actions/productsActions";
import {addProductCartAction} from "../../redux/actions/cart";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BeatLoader from "react-spinners/BeatLoader";

const DetailProduct = () => {
  //react router
  const {id} = useParams();
  const navigate = useNavigate();
  //const product = products.find(p => p.id === id);
  const [counter, setCounter] = useState(0);
  const [size, setSize] = useState("S");
  const {loadingProduct, product} = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductByIdAction(id));
  }, []);

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
  //return jsx UI product
  if (loadingProduct)
    return (
      <div className="flex flex-col justify-center min-h-screen ">
        <BeatLoader
          color={"#000"}
          loading={true}
          cssOverride={""}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        ></BeatLoader>
      </div>
    );
  return (
    <motion.div
      variants={container}
      animate="visible"
      initial="hidden"
      className="flex justify-between flex-warp items-start gap-20 px-4 sm:px-10 flex-col md:flex-row xl:px-40 my-20 py-10  bg-[#d9d4ce] text-black"
    >
      <div className="">
        <img
          src={product.imageUrl}
          alt="product"
          className="w-[400px] rounded"
        />
      </div>
      <div className="flex flex-col gap-6 w-80">
        <h5 className="text-4xl text-[#ca0202] font-semibold">
          {product.titleProduct}
        </h5>
        <Rating />
        <h5 className="text-md">{product.description}</h5>
        <h5 className="text-4xl font-bold">${product.price}</h5>
        <select
          className="w-full p-2 rounded cursor-pointer"
          onChange={e => setSize(e.target.value)}
          value={size}
        >
          <option value="S">S</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXl">XXL</option>
          <option value="3Xl">3XL</option>
        </select>
        <div className="flex flex-col justify-center items-center text-black">
          <input
            type="number"
            className="px-1 py-2 w-full"
            value={counter}
            onChange={e => {
              if (parseInt(e.target.value) > 0) {
                setCounter(parseInt(e.target.value));
              }
            }}
          />
          <button
            className="bg-[#ca0202] py-2 px-6 text-white w-full"
            onClick={async () => {
              const user = JSON.parse(localStorage.getItem("userEcommerce"));
              if (!user) {
                navigate("/");
              } else {
                dispatch(
                  addProductCartAction({
                    idProduct: product._id,
                    quantity: counter,
                    size: size,
                  })
                );

                //navigate("/cart");
              }
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
      <ToastContainer theme="dark" />
    </motion.div>
  );
};
export default DetailProduct;
