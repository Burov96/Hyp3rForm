import React, { useContext, useState, useEffect } from "react";
import TrashFull from "./trash-full.svg";
import TrashEmpty from "./trash-empty.svg";
import { motion } from "framer-motion";
import { ShoppingCartContext, ShoppingCartProvider } from "../context/ShoppingCart";

function CartItem({ product, removeFromCart }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [count, setCount] = useState(product.quantity || 1);

  const { updateProductQuantity } = useContext(ShoppingCartContext);

  const handleQuantityPicker = (event) => {
    const newQuantity = event.target.value;
    setCount(newQuantity);
    updateProductQuantity(product, newQuantity);
  };

  return (
    <div
      className={`${
        isDeleted
          ? "rounded-3xl justify-evenly items-center mt-5 p-2 m-6  w-[96%] h-32 z-10 font-roboto flex bg-slate-600 bg-opacity-80 scale-[.2] -translate-y-48 translate-x-20 opacity-25 transition-all duration-[500ms]"
          : "w-[96%] h-32 z-10 translate-y-10  mt-5 m-2 xl:m-6 font-roboto flex bg-slate-600 bg-opacity-40 rounded-3xl justify-evenly items-center hover:bg-opacity-80 transition-all"
      }`}
    >
      {count > 1 && (
        <h1 className="hidden xl:block absolute left-7 -mr-12 text-7xl font-bold animate-colorChange transition-all">
          {count} x
        </h1>
      )}{""}
      <img
        src={product.imgSrc}
        alt={product.alt}
        className="-ml-5 w-40 m-3 mt-1 select-none"
      />
      <select
        value={count}
        className=" scale-150  xl:w-9 scrollbar-hide scrollbar-width-none"
        onChange={handleQuantityPicker}
      >
        {Array.from({ length: 10 }, (_, index) => (
          <option key={index} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      <h2 className=" px-6 xl:px-0 font-bold text-2xl">{product.name}</h2>
      <h3 className="hidden xl:block flex-wrap w-60 h-fit text-sm font-montserrat">
        {product.desc}
      </h3>
      <h1 className=" px-4 text-2xl font-semibold">{product.price * count}</h1>
      <button
        className={` px-8 xl:px-0 ${
          isDeleted
            ? " disabled: cursor-not-allowed"
            : "bg-no-repeat bg-center bg-contain border-0 w-7 h-7 transition-all ease-in-out duration-300 scale-120"
        }`}
        style={{
          backgroundImage: isHovered
            ? `url(${TrashEmpty})`
            : `url(${TrashFull})`,
        }}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        onClick={() => {
          setTimeout(() => {
          removeFromCart(product, count);
          setIsDeleted(false);
          }, 520);
          setIsDeleted(true);
        }}
      ></button>
    </div>
  );
}

export default function Cart() {
  const { cart, removeFromCart } = useContext(ShoppingCartContext);
  const [cena, setCena] = useState(0);

  // Calculate the total cena when the cart changes
  useEffect(() => {
    const total = cart.reduce(
      (acc, product) =>
        acc + parseFloat(product.price) * (product.quantity || 1),
      0
    );
    // Multiply price with quantity
    setCena(total);
  }, [cart]);

  return (
    <motion.div
      className="relative overflow-y-scroll h-[90%] overflow-x-hidden"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
    >
      {cart.map((product, index) => (
        <CartItem
          key={index}
          product={product}
          removeFromCart={removeFromCart}
        />
      ))}
      <div className="xl:opacity-95 opacity-60 w-[300px] bg-slate-600 rounded-3xl font-roboto mt-20  p-9 xl:ml-[78%] ml-[35%] m-11 text-center font-bold text-3xl">
        {cena == 0 && <h1 className=" text-justify">Your cart is empty <br></br>:(</h1>}
        {cena > 0 && <div><h5 className=" text-xxl">{cena.toFixed(2)} BGN</h5>
        {cena > 100 && (
          <h5 className=" text-lg text-end"> + Free shipping 🚚</h5>
        )}</div>}
      </div>
    </motion.div>
  );
}
