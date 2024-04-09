import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import logo from "../../src/logo.png";
import { ShoppingCartContext } from "../context/ShoppingCart";
import { useAuth } from "../context/AuthContext";

const NavBar = () => {
  function Razguvane(){
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }
  const { cart } = useContext(ShoppingCartContext);
  const {user, logout} = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const navigate = useNavigate();

  function smqtach(cart) {
    const rezultat = cart.reduce((total, item) => {
      return total + Number(item.quantity);
    }, 0);
    return rezultat;
  }

  return (
    <>
       <div className={`transition-all ${isMenuOpen ? 'filter blur-md brightness-50' : ''}z-[999999] mb-28  sm:h-[120px] flex flex-wrap place-items-top select-none `}>
        <section className="absolute left-0 top-0 mx-auto">
          <nav className=" sm:h-[120px] flex justify-between bg-gray-900 text-white w-[100vw] z-40 ">
            <div className=" px-5 xl:px-12 xl:py-6 flex w-full items-center">
              <a className="text-3xl font-bold font-heading cursor-pointer  sm:px-4" 
              onClick={()=>navigate('/')}
              >
                <img
                  className=" transition-all h-[60px] hover:scale-125  sm:scale-150"
                  src={logo}
                  alt="logo"
                />
              </a>

              <ul className=" md:flex  px-4 mx-auto font-semibold font-heading space-x-12  sm:text-xs sm:scale-150">
                <li>
                  <a
                    className={`cursor-pointer transition-all transform ${
                      location.pathname === "/"
                        ? "  text-[rgba(175,37,75)] text-xl "
                        : "sm:hidden focus:text-[rgba(175,37,75)] focus:text-xl hover:shadow-[5px_5px_0px_0px_rgba(175,37,75)]"
                    } `}
                    onClick={()=>navigate('/')}
                    >
                    Home
                  </a>
                </li>
                <li>
                <a 
          className={`cursor-pointer  transition-all transform ${location.pathname === '/products' ?' text-[rgba(175,37,75)] text-xl' : 'focus:text-[rgba(175,37,75)] focus:text-xl hover:shadow-[5px_5px_0px_0px_rgba(175,37,75)] sm:hidden'} `}
          onClick={()=>navigate('/products')}
          >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    className={`cursor-pointer transition-all transform ${location.pathname==='/premier'?'  text-[rgba(175,37,75)] text-xl': 'sm:hidden hover:text-[rgba(134,188,180)] focus:text-[rgba(175,37,75)] focus:text-xl hover:shadow-[5px_5px_0px_0px_rgba(175,37,75)]'} `}
                    onClick={()=>navigate('/premier')}
                    >
                    Coming soon
                  </a>
                </li>
                <li>
                  <a
              onClick={()=>navigate('/contact')}
              className={`cursor-pointer transition-all transform ${location.pathname==='/contact'?'  text-[rgba(175,37,75)] text-xl ':'sm:hidden hover:text-[rgba(134,188,180)] focus:text-[rgba(175,37,75)] focus:text-xl hover:shadow-[5px_5px_0px_0px_rgba(175,37,75)]'}`}
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    className={`cursor-pointer transition-all transform ${location.pathname === '/sponsorme' ?' animate-pulse text-xl  text-[rgba(175,37,75)] ':'sm:hidden hover:animate-pulse focus:text-xl focus:animate-pulse focus:text-[rgba(175,37,75)] hover:text-[rgba(175,37,75)]'}`}
                    onClick={()=>navigate('/sponsorme')}
                    >
                    Get sponsored
                  </a>
                </li>
              </ul>
              <div className="xl:flex items-center space-x-7 sm:scale-[1.5] sm:mr-9">


                <a className="cursor-pointer flex items-center hover:text-gray-200" 
                //kolichka
              onClick={()=>navigate('/cart')}
              >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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

{!user&& (
                <a
                  className=" cursor-pointer flex items-center hover:text-gray-200"
                  //logincheto
                  onClick={()=>navigate('/login')}
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 hover:text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>)
              }
              {user&&(
                <>
                <h2 className="hidden xl:visible cursor-grab font-montserrat font-semibold">Welcome, {user.fName}!</h2>
                <a onClick={logout} className="hidden xl:visible cursor-pointer hover:font-semibold hover:text-blue-300">Logout</a>
                </>
              )}
              </div>
            </div>



            <a className="navbar-burger self-center mr-12 xl:hidden scale-[1.8]" 
            onClick={Razguvane}
            //trite cherti za malki displei
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </nav>
        </section>
      </div>

        <div className={` rounded-3xl my-[10%] absolute w-[70%] h-[90vh] ml-[100%] bg-red-600 border-8 bottom-0 left-0  bg-opacity-70 z-[100000] transition-all${isMenuOpen?' -translate-x-3/4':''}`}>
          {/* ... content of the additional div ... */}
        </div>

    </>
  );
};
export default NavBar;



