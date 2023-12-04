import React, { useState, createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./views/NavBar.jsx";
import AnimatedRoutes from "./views/AnimatedRoutes.jsx";
import bkgr from "/src/views/bckgr.jpg";

export const ShoppingCartContext = createContext();

let initialCart;
try {
  initialCart = JSON.parse(localStorage.getItem("cart")) || [];
} catch (error) {
  console.error("Error parsing cart data from localStorage:", error);
  initialCart = [];
}

function ShoppingCartProvider({ children }) {
  const [cart, setCart] = useState(initialCart);

  const addToCart = (item, dobaveni) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.name === item.name
      );
      let newCart;
      if (existingItem) {
        existingItem.quantity =
          Number(existingItem.quantity) + Number(dobaveni);
        newCart = [...prevCart];
      } else {
        newCart = [...prevCart, { ...item, quantity: dobaveni }];
      }
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const updateProductQuantity = (product, quantity) => {
    setCart((prevCart) => {
      const productIndex = prevCart.findIndex(
        (cartItem) => cartItem.name === product.name
      );

      if (productIndex !== -1) {
        const updatedProduct = {
          ...prevCart[productIndex],
          quantity: quantity,
        };
        const updatedCart = [...prevCart];
        updatedCart[productIndex] = updatedProduct;
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }

      return prevCart;
    });
    return (
      <ShoppingCartContext.Provider
        value={{ cart, addToCart, updateProductQuantity }}
      >
        {children}
      </ShoppingCartContext.Provider>
    );
  };

  const removeFromCart = (item, quantityToRemove) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.name === item.name
      );

      let newCart;
      if (existingItem) {
        existingItem.quantity -= quantityToRemove;
        if (existingItem.quantity <= 0) {
          newCart = prevCart.filter((cartItem) => cartItem.name !== item.name);
        } else {
          newCart = [...prevCart];
        }
      } else {
        newCart = [...prevCart];
      }

      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateProductQuantity }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div
        className=" overflow-y-hidden 
          bg-cover bg-center h-screen w-screen"
        style={{ backgroundImage: `url(${bkgr})` }}
      >
        <ShoppingCartProvider>
          <NavBar />
          <AnimatedRoutes />
        </ShoppingCartProvider>
      </div>
    </BrowserRouter>
  );
}
export default App;
