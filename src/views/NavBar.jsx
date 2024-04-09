import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router";
import logo from "../../src/logo.png";
import { ShoppingCartContext } from "../context/ShoppingCart";
import { useAuth } from "../context/AuthContext";
import { useOutsideClick } from "../utils/outsideClickFunctionRuner";
import { toast } from "react-toastify";
import { DotLottiePlayer } from "@dotlottie/react-player";

const NavBar = () => {
  const lottieRef = useRef();
  const [open, setOpen] = useState(false);
  const { cart } = useContext(ShoppingCartContext);
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function Razguvane() {
    handleClick();
    setIsMenuOpen(whateverItWas=>(!whateverItWas));
  }

  const handleClick = () => {
    setOpen((prev) => !prev);
    lottieRef.current.setSpeed(1.8);
    if (!open) {
      lottieRef.current.playSegments([0, 80], true);
    } else {
      lottieRef.current.playSegments([80, 160], true);
    }
  };

  const navigate = useNavigate();

  const loginche = useRef(null);
  const exception=useRef(null);

  function smqtach(cart) {
    const rezultat = cart.reduce((total, item) => {
      return total + Number(item.quantity);
    }, 0);
    return rezultat;
  }
  const sideMenu = useRef(null);

  useOutsideClick(sideMenu, (f) => setIsMenuOpen(f),exception);
  useOutsideClick(sideMenu, (f) => setOpen(f),exception);

  return (
    <>
      <div className=" z-50 h-28 mb-2  xl:h-auto xl:flex xl:flex-wrap xl:place-items-top">
        <section className="mx-auto">
          <nav className=" h-28 xl:h-auto flex justify-between bg-gray-900 text-white w-[100vw] z-40 ">
            <div className=" px-3 xl:px-12 xl:py-4 flex w-full items-center align-middle justify-center">
              <div
                className="z-50 navbar-burger self-center pl-3 xl:hidden"
                onClick={Razguvane}
                ref={exception}
                //hamburgera
              >
    <div className=" -ml-4 md:hidden z-50 relative ">
      <DotLottiePlayer
        src="/hamburger.lottie"
        autoplay={false}
        loop={false}
        ref={lottieRef}
        style={{
          width: "100%",
          maxWidth: "100px",
          height: "auto",
          marginRight: "10px",
          fill: open ? "#5CCCD6" : "#FB8B49",
          stroke: open ? "#5CCCD6" : "#FB8B49",
        }}
      />
  </div>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 hover:text-gray-200"
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
                </svg> */}
              </div>

              <div
                className={`xl:hidden fixed top-28 z-40 h-[64%] rounded-3xl w-screen bg-gray-950 transition-all duration-1000 opacity-90 ${
                  isMenuOpen ? "right-1/4" : "right-full"
                }`}
                ref={sideMenu}
              >
                <ul
                  className="
          flex flex-col py-2 pl-28
          "
                >
                  {[
                    { path: "/", label: "Home" },
                    { path: "/products", label: "Products" },
                    { path: "/premier", label: "Coming soon" },
                    { path: "/contact", label: "Contact Us" },
                    { path: "/sponsorme", label: "Get sponsored" },
                  ].map((item, index) => (
                    <li key={index} className=" py-9 text-xl font-semibold ">
                      <a
                        className={`transition-all transform ${
                          location.pathname === item.path
                            ? "text-[rgba(175,37,75)] py-2 text-2xl shadow-[5px_5px_0px_0px_rgba(175,37,75)]"
                            : "text-white"
                        }`}
                        onClick={() => {
                          navigate(item.path);
                          setIsMenuOpen(false);
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
                {user && (
                  <div className="text-end px-10  -translate-y-10">
                    <h2 className="text-base cursor-grab font-montserrat font-semibold">
                      Welcome, {user.fName}!<br />
                    </h2>
                    <a
                      onClick={() => {
                        logout();
                        toast.success("You have successfully logged out!", {
                          position: "top-right",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                        });
                        setIsMenuOpen(false);
                      }}
                      className="font-semibold pr-6 cursor-pointer hover:font-bold shadow-[5px_5px_0px_0px_rgba(215,97,15)] font-montserrat "
                    >
                      Logout
                    </a>
                  </div>
                )}
              </div>
              <a
                className=" absolute xl:static left-1/2 -translate-x-1/2 xl:translate-x-0 text-3xl font-bold font-heading cursor-pointer px-4"
                onClick={() => navigate("/")}
              >
                <img
                  className="  transition-all h-[60px] hover:scale-150  scale-150 xl:scale-125 "
                  src={logo}
                  alt="logo"
                />
              </a>

              <ul className=" hidden xl:flex  px-4 mx-auto font-semibold font-heading space-x-12  text-xs scale-150 xl:scale-100 xl:text-lg">
                <li>
                  <a
                    className={`  cursor-pointer transition-all transform ${
                      location.pathname === "/"
                        ? "  text-[rgba(175,37,75)] text-xl "
                        : " focus:text-[rgba(175,37,75)] focus:text-xl hover:shadow-[5px_5px_0px_0px_rgba(175,37,75)]"
                    } `}
                    onClick={() => navigate("/")}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className={`  cursor-pointer  transition-all transform ${
                      location.pathname === "/products"
                        ? " text-[rgba(175,37,75)] text-xl"
                        : "focus:text-[rgba(175,37,75)] focus:text-xl hover:shadow-[5px_5px_0px_0px_rgba(175,37,75)] "
                    } `}
                    onClick={() => navigate("/products")}
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    className={`  cursor-pointer transition-all transform ${
                      location.pathname === "/premier"
                        ? "  text-[rgba(175,37,75)] text-xl"
                        : " hover:text-[rgba(134,188,180)] focus:text-[rgba(175,37,75)] focus:text-xl hover:shadow-[5px_5px_0px_0px_rgba(175,37,75)]"
                    } `}
                    onClick={() => navigate("/premier")}
                  >
                    Coming soon
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => navigate("/contact")}
                    className={`  cursor-pointer transition-all transform ${
                      location.pathname === "/contact"
                        ? "  text-[rgba(175,37,75)] text-xl "
                        : " hover:text-[rgba(134,188,180)] focus:text-[rgba(175,37,75)] focus:text-xl hover:shadow-[5px_5px_0px_0px_rgba(175,37,75)]"
                    }`}
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    className={`  cursor-pointer transition-all transform ${
                      location.pathname === "/sponsorme"
                        ? " animate-pulse text-xl  text-[rgba(175,37,75)] "
                        : " hover:animate-pulse focus:text-xl focus:animate-pulse focus:text-[rgba(175,37,75)] hover:text-[rgba(175,37,75)]"
                    }`}
                    onClick={() => navigate("/sponsorme")}
                  >
                    Get sponsored
                  </a>
                </li>
              </ul>

              <div className="flex mx-auto xl:mx-0 xl:items-center xl:space-x-7 space-x-4 scale-[1.5] xl:scale-100 mr-9">
                {!user && (
                  <a
                    className=" cursor-pointer flex items-center hover:text-gray-200"
                    //logincheto
                    onClick={() => navigate("/login")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-8 w-8 hover:text-gray-200${
                        location.pathname === "/login" ||
                        location.pathname === "/register"
                          ? " text-[rgba(175,37,75)] text-xl"
                          : "null"
                      }`}
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
                  </a>
                )}
                {user && (
                  <div className="items-center justify-center align-middle hidden xl:block">
                    <div ref={loginche}>
                      <h2 className="text-xs cursor-grab font-montserrat font-semibold">
                        Welcome, {user.fName}!<br />
                      </h2>
                      <a
                        onClick={() => {
                          logout();
                          toast.success("You have successfully logged out!", {
                            position: "top-right",
                            autoClose: 1200,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                          });
                        }}
                        className="font-semibold pr-6 xl:visible cursor-pointer hover:font-bold hover:text-blue-300 font-montserrat "
                      >
                        Logout
                      </a>
                    </div>
                  </div>
                )}
                <a
                  className={`cursor-pointer flex items-center hover:text-gray-200 scale-90
                  ${
                    location.pathname === "/cart"
                      ? " text-yellow-300 scale-110"
                      : "null"
                  }`}
                  //kolichka
                  onClick={() => navigate("/cart")}
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
                  {smqtach(cart) > 0 && smqtach(cart) < 10 && (
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
              </div>
            </div>
          </nav>
        </section>
      </div>
      <div
        className={`xl:hidden fixed top-0 h-screen w-screen   z-[39] transition-opacity duration-1000 bg-blend-darken bg-black ${
          isMenuOpen ? "opacity-80 right" : "right-[100%] opacity-0 "
        }
           `}
      ></div>
    </>
  );
};
export default NavBar;
