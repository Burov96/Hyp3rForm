import React, { useContext } from "react";
import { ShoppingCartContext as ShoppingCartProvider } from "../App";
import { useNavigate } from "react-router";

//image imports
import logo from "../../src/logo.png";

const NavBar = () => {
  const { cart } = useContext(ShoppingCartProvider);


  const navigate = useNavigate();

  function smqtach(cart) {
    const rezultat = cart.reduce((total, item) => {
      return total + Number(item.quantity);
    }, 0);
    return rezultat;
  }

  return (
    <>
      <div class=" z-[999999] mb-28 flex flex-wrap place-items-top">
        <section class="absolute left-0 top-0 mx-auto">
          <nav class="flex justify-between bg-gray-900 text-white w-[100vw] z-40">
            <div class=" px-5 xl:px-12 py-6 flex w-full items-center">
              <a class="text-3xl font-bold font-heading cursor-pointer" 
              onClick={()=>navigate('/')}
              >
                <img
                  class="top-[7%] transition-all transform h-[60px] hover:scale-125"
                  src={logo}
                  alt="logo"
                />
              </a>

              <ul class=" md:flex  px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <a
                    className={`cursor-pointer transition-all transform ${
                      location.pathname === "/"
                        ? "  text-[rgba(175,37,75)] text-xl "
                        : "focus:text-[rgba(175,37,75)] focus:text-xl hover:shadow-[5px_5px_0px_0px_rgba(175,37,75)]"
                    } `}
                    onClick={()=>navigate('/')}
                    >
                    Home
                  </a>
                </li>
                <li>
                <a 
          className={`cursor-pointer  transition-all transform ${location.pathname === '/products' ?' text-[rgba(175,37,75)] text-xl ' : 'focus:text-[rgba(175,37,75)] focus:text-xl hover:shadow-[5px_5px_0px_0px_rgba(175,37,75)]'} `}
          onClick={()=>navigate('/products')}
          >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    class={`cursor-pointer transition-all transform ${location.pathname==='/premier'?'  text-[rgba(175,37,75)] text-xl': 'hover:text-[rgba(134,188,180)] focus:text-[rgba(175,37,75)] focus:text-xl hover:shadow-[5px_5px_0px_0px_rgba(175,37,75)]'} `}
                    onClick={()=>navigate('/premier')}
                    >
                    Coming soon
                  </a>
                </li>
                <li>
                  <a
              onClick={()=>navigate('/contact')}
              class={`cursor-pointer transition-all transform ${location.pathname==='/contact'?'  text-[rgba(175,37,75)] text-xl ':'hover:text-[rgba(134,188,180)] focus:text-[rgba(175,37,75)] focus:text-xl hover:shadow-[5px_5px_0px_0px_rgba(175,37,75)]'}`}
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    class={`cursor-pointer transition-all transform ${location.pathname === '/sponsorme' ?' animate-pulse text-xl  text-[rgba(175,37,75)] ':'hover:animate-pulse focus:text-xl focus:animate-pulse focus:text-[rgba(175,37,75)] hover:text-[rgba(175,37,75)]'}`}
                    onClick={()=>navigate('/sponsorme')}
                    >
                    Get sponsored
                  </a>
                </li>
              </ul>
              <div class="hidden xl:flex items-center space-x-7 ">
                <a class="cursor-pointer flex items-center hover:text-gray-200" 
              onClick={()=>navigate('/cart')}
              >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {smqtach(cart) > 9 && (
                    <span className="flex absolute -mt-11 ml-8">
                      <span className="animate-ping absolute ml-1 mt-1  inline-flex h-5 w-5 rounded-full bg-pink-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-7 w-7 bg-pink-500">
                        <h2 className="translate-x-[0.2rem] translate-y-[0.14rem] font-bold">
                          {smqtach(cart)}
                        </h2>
                      </span>
                    </span>
                  )}
                  {smqtach(cart) > 0 && smqtach(cart)<10 && (
                    <span className="flex absolute -mt-9 ml-7">
                      <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-pink-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-5 w-5 bg-pink-500">
                        <h2 className="translate-x-[0.3rem] -translate-y-[0.14rem] font-bold">
                          {smqtach(cart)}
                        </h2>
                      </span>
                    </span>
                  )}
                </a>
                <a
                  class="cursor-not-allowed flex items-center hover:text-gray-200"
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 hover:text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <a class="navbar-burger self-center mr-12 xl:hidden" 
            href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </nav>
        </section>
      </div>
    </>
  );
};
export default NavBar;
