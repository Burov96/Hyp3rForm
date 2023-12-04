import React, { useContext, useState, useEffect } from "react";
import { ShoppingCartContext as ShoppingCartProvider } from "../App";
import TrashFull from "./trash-full.svg";
import TrashEmpty from "./trash-empty.svg";
import { motion } from "framer-motion";

function CartItem({ product, removeFromCart }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [count, setCount] = useState(product.quantity || 1);

  const { updateProductQuantity } = useContext(ShoppingCartProvider);

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
          : "w-[96%] h-32 z-10 translate-y-10 mt-5 p-2 m-6 font-roboto flex bg-slate-600 bg-opacity-40 rounded-3xl justify-evenly items-center hover:bg-opacity-80 transition-all"
      }`}
    >
      {count > 1 && (
        <h1 className="absolute left-7 -mr-12 text-7xl font-bold animate-colorChange transition-all">
          {count} x
        </h1>
      )}{" "}
      <img
        src={product.imgSrc}
        alt={product.alt}
        className=" w-40 m-3 mt-1 select-none"
      />
      <select
        value={count}
        className="w-9 scrollbar-hide scrollbar-width-none"
        onChange={handleQuantityPicker}
      >
        {Array.from({ length: 10 }, (_, index) => (
          <option key={index} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      <h2 className=" font-bold text-2xl">{product.name}</h2>
      <h3 className="flex-wrap w-60 h-fit text-sm font-montserrat">
        {product.desc}
      </h3>
      <h1 className="text-2xl font-semibold">{product.price * count}</h1>
      <button
        className={`${
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
  const { cart, removeFromCart } = useContext(ShoppingCartProvider);
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
      className="relative overflow-y-scroll h-[90%]"
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
      <div className=" w-[300px] bg-slate-600 rounded-3xl font-roboto mt-20  p-8 ml-[78%] m-11 pr-28 text-end font-extrabold text-3xl">
        {cena == 0 && <alert>Your cart is empty :(</alert>}
        {cena > 100 && (
          <h5 className=" text-xl">{cena.toFixed(2)} BGN + Free shipping 🚚</h5>
        )}
        {cena < 100 && <h5 className=" text-xl">{cena.toFixed(2)} BGN</h5>}
      </div>
    </motion.div>
  );
}
