import React, {useState} from "react";
import {BsFillTrashFill} from "react-icons/bs";
import {useDispatch} from "react-redux";
import {
  removeProductCartAction,
  updateProductCartAction,
} from "../redux/actions/cart";

const CartItem = ({p}) => {
  const [counter, setCounter] = useState(p.quantity);
  const [size, setSize] = useState(p.size);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col text-center items-center justify-center w-80 shadow-xl p-4 sm:w-full sm:flex-row sm:justify-between items-center gap-4 py-2">
      <img src={p.imageUrl} alt="product cart" className="w-20 md:w-28" />
      <p className="sm:text-xs md:text-sm w-28 text-center">{p.titleProduct}</p>
      <p className="text-lg font-bold w-20">${p.price}</p>
      <select
        className="w-full sm:w-28 font-bold text-black p-2 rounded cursor-pointer bg-[#d9d4ce] shadow-lg"
        onChange={e => {
          setSize(e.target.value);
        }}
        value={size}
      >
        <option value="S">S</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXl">XXL</option>
        <option value="3Xl">3XL</option>
      </select>
      <input
        type="number"
        className="border-1 border-black px-2 w-full sm:w-20 md:w-28 text-black"
        value={counter}
        onChange={e => {
          setCounter(e.target.value);
        }}
      />
      <button
        className="bg-black text-white p-1 w-full sm:w-auto"
        onClick={async () => {
          dispatch(
            updateProductCartAction({
              idProduct: p._id,
              size: size,
              quantity: counter,
            })
          );
        }}
      >
        UPDATE
      </button>
      <button
        onClick={async () => {
          dispatch(removeProductCartAction(p._id));
        }}
      >
        <BsFillTrashFill size={20} />
      </button>
    </div>
  );
};
export default CartItem;
