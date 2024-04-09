import React, {  createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./views/NavBar.jsx";
import AnimatedRoutes from "./views/AnimatedRoutes.jsx";
import bkgr from "/src/views/bckgr.jpg";
import {  ShoppingCartProvider } from "./context/ShoppingCart.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import Overlay from "./views/Overlay.jsx";
import { ToastContainer } from 'react-toastify';




function App() {
  return (
    <BrowserRouter>
      <div
        className="overflow-hidden 
          bg-cover bg-center h-[100svh] w-[100svw] select-none -z-50 "
        style={{ backgroundImage: `url(${bkgr})` }}
      >
        <ShoppingCartProvider>
          <AuthProvider>
          <NavBar />
          <ToastContainer />
          <AnimatedRoutes />
          </AuthProvider >
        </ShoppingCartProvider>
      </div>
    </BrowserRouter>
  );
}
export default App;
