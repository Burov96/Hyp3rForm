import React, { useState, createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './views/NavBar.jsx';
import AnimatedRoutes from './views/AnimatedRoutes.jsx'
import bkgr from "/src/views/bckgr.jpg"


// Create the context
export const ShoppingCartContext = createContext();

let initialCart;
try {
    initialCart = JSON.parse(localStorage.getItem('cart')) || [];
} catch (error) {
    console.error("Error parsing cart data from localStorage:", error);
    initialCart = [];
}

function ShoppingCartProvider({ children }) {
  const [cart, setCart] = useState(initialCart);

  const addToCart = (item, dobaveni) => {
      setCart((prevCart) => {
          // Check if the item already exists in the cart
          const existingItem = prevCart.find(cartItem => cartItem.name === item.name);

          let newCart;
          if (existingItem) {
              // Update the quantity of the existing item
              existingItem.quantity = Number(existingItem.quantity) + Number(dobaveni);
              newCart = [...prevCart];
          } else {
              // Add the new item with the specified quantity
              newCart = [...prevCart, { ...item, quantity: dobaveni }];
          }

          // Update the local storage
          localStorage.setItem('cart', JSON.stringify(newCart));
          return newCart;
      });
  };

  const updateProductQuantity = (product, quantity) => {
      setCart((prevCart) => {
          // Find the product in the cart
          const productIndex = prevCart.findIndex(cartItem => cartItem.name === product.name);
          
          if (productIndex !== -1) {
              // Update the quantity
              const updatedProduct = { ...prevCart[productIndex], quantity: quantity };
              // Update the cart
              const updatedCart = [...prevCart];
              updatedCart[productIndex] = updatedProduct;
              
              // Update the local storage
              localStorage.setItem('cart', JSON.stringify(updatedCart));
              return updatedCart;
          }
          
          return prevCart; // Return previous cart if product was not found
      });
  ;

  return (
      <ShoppingCartContext.Provider value={{ cart, addToCart, updateProductQuantity }}>
          {children}
      </ShoppingCartContext.Provider>
  );
}


  const removeFromCart = (item, quantityToRemove) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.name === item.name);
      
      let newCart;
      if (existingItem) {
        existingItem.quantity -= quantityToRemove;
        if (existingItem.quantity <= 0) {
          newCart = prevCart.filter(cartItem => cartItem.name !== item.name);
        } else {
          newCart = [...prevCart];
        }
      } else {
        newCart = [...prevCart];
      }
  
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };
  
  return (
    <ShoppingCartContext.Provider value={{ cart, addToCart, removeFromCart, updateProductQuantity }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}


function App() {
  document.addEventListener('DOMContentLoaded', function () {
    const root = document.getElementById('root');
    root.style.padding = 0;
    root.style.margin = 0;
    root.style.maxWidth = 'none';
  });

  return (
    <BrowserRouter>
      <div
        className=' overflow-y-hidden 
          bg-cover bg-center h-screen w-screen'
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