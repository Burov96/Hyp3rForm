import React, { useRef, useState, useEffect, useContext} from "react";
import { motion } from "framer-motion";

import kutiqImage from './kutiq.png';
import kutiqEAA from './KutiqEAA.png';
import wired from './wired.png';
import cherryBomb from './cherry-bomb.png';
import nootropic from './nootropic.png';
import limitedpre from './limitedpre.png';
import essential from './essential.png';
import { ShoppingCartContext } from "../context/ShoppingCart";
import { toast } from "react-toastify";


export default function Products() {

  const [isBought, setIsBought] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  // const [hoveredProduct, setHoveredProduct] = useState(null);
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);
  const [showListItems, setShowListItems] = useState(false);
  // const [buyAppear, setBuyAppear] = useState(false);
  const {  addToCart, removeFromCart } = useContext(ShoppingCartContext);
  const [quantity, setQuantity] = useState(1);

  const divRef = useRef(null);

  const handleQuantityPicker =(event)=>{
    setQuantity(event.target.value)
  }

  const handleAddToCart = (item,quantity) => {
    addToCart(item,quantity);
  };


function scrollerche(){
  if (!activeProduct) {
    setSavedScrollPosition(divRef.current.scrollTop);
    setShowListItems(false)
  } else {
    setTimeout(() => {
      divRef.current.scrollTo({
        top: savedScrollPosition,
        behavior: "smooth",
      });
      setSavedScrollPosition(null);
    }, 200);
  }

}

  const handleProductClick = (productKey) => {
    setActiveProduct((prevProduct) =>
      prevProduct === productKey ? null : productKey
    );
    scrollerche();
  };


  useEffect(() => {
    if (activeProduct) {
      const timeout = setTimeout(() => {
        setShowListItems(true);
      }, 250);
  
      return () => clearTimeout(timeout);
    }
  }, [activeProduct]);




  const products = {
    pwo: {
      name: "Pre workout",
      desc: "This is our premier product. The prime blend of supreme grade compounds, gathered by hand, by Themiscyrian Amazonkas.",
      price: "42",
      imgSrc: kutiqImage,
      alt: "Pre-workout box",
      listItemData: [
        {
          text: "This is our premier product. The prime blend of supreme grade compounds, gathered by hand, by Themiscyrian Amazonkas. The formula consists of :",
          styles: "opacity-100 duration-1000 z-10",
        },
        {
          text: "7,000mg of L-Citruline (pure 7g's, not the bs 2:1 Malic acid) 🦾",
          styles: "opacity-100 duration-[500ms] z-10 top-[32rem]",
        },
        {
          text: "1,500mg DMAA (the hard stuff) 🔥",
          styles: "opacity-100 duration-[1000ms] z-10 top-[37rem]",
        },
        {
          text: "1,500mg Agmatine Sulfate 🎯",
          styles: "opacity-100 duration-[2000ms] z-10 top-[41rem]",
        },
      ],
    },

    eaa: {
      name: "Essential Amino Acids",
      desc: "Unlock the true power of your muscle synthesis with our top-tier EAA blend. Sourced from the finest materials, it's the key to unlocking your true workout potential.",
      price: "39",
      imgSrc: kutiqEAA,
      alt: "EAA bottle",
      listItemData: [
        {
          text: "Maximize your muscle growth with the building blocks of proteins. Our EAA blend ensures every workout is backed by science and nature.",
          showCondition: activeProduct,
          styles: "opacity-100 duration-1000 z-10",
        },
        {
          text: "5,000mg of L-Leucine - The mTOR pathway activator 💪",
          styles: "opacity-100 duration-[500ms] z-10 top-[32rem]",
        },
        {
          text: "3,000mg of L-Isoleucine - Fuel for muscle recovery and growth 🔥",
          styles: "opacity-100 duration-[1000ms] z-10 top-[37rem]",
        },
        {
          text: "2,500mg of L-Valine – Enhance endurance and tissue repair 🚀",
          styles: "opacity-100 duration-[2000ms] z-10 top-[41rem]",
        },
        {
          text: "And a perfect blend of the other essential amino acids ensuring optimal muscle function 🌱",
          styles: "opacity-100 duration-[2500ms] z-10 top-[45rem]",
        },
      ],
    },
    wired:{
      name: "Wired Nootropic",
      desc: "Craving an edge in your game or need to overclock your brain? Dive into the matrix with Wired. Formulated by Eldritch Technomancers for maximum cognition.",
      price: "55",
      imgSrc: wired,
      alt: "Wired Nootropic box",
      listItemData: [
        {
          text: "Concocted by the legendary Eldritch Technomancers, the Wired formula consists of:",
          styles: "opacity-100 duration-1000 z-10",
        },
        {
          text: "2,000mg Alpha GPC (for the ultimate brain boost) 🧠",
          styles: "opacity-100 duration-[500ms] z-10 top-[32rem]",
        },
        {
          text: "500mg Lion's Mane Mushroom (nature's neuro enhancer) 🦁",
          styles: "opacity-100 duration-[1000ms] z-10 top-[37rem]",
        },
        {
          text: "200mg Caffeine (for that instant pick-me-up!) ⚡",
          styles: "opacity-100 duration-[2000ms] z-10 top-[41rem]",
        },
      ]
    }
    
    ,
    cherryBomb: {
      name: "Cherry Bomb Pre-workout",
      desc: "Ignite your workouts with the explosive power of Cherry Bomb! Sourced from the celestial orchards of Elysium, this blend will ensure you're the blast of the gym.",
      price: "50",
      imgSrc: cherryBomb,
      alt: "Cherry Bomb Pre-workout box",
      listItemData: [
        {
          text: "From the sacred celestial orchards of Elysium, we bring you the Cherry Bomb formula that includes:",
          styles: "opacity-100 duration-1000 z-10",
        },
        {
          text: "8,000mg of L-Citruline (That's 1g more than your regular) 💥",
          styles: "opacity-100 duration-[500ms] z-10 top-[32rem]",
        },
        {
          text: "1,200mg Beta-Alanine (to really feel that cherry-tingle!) 🍒",
          styles: "opacity-100 duration-[1000ms] z-10 top-[37rem]",
        },
        {
          text: "1,000mg Red Beet Extract (for that natural cherry blast!) 🚀",
          styles: "opacity-100 duration-[2000ms] z-10 top-[41rem]",
        },
      ]
    }  ,
    brainiacBoost:{
      name: "Brainiac Boost",
      desc: "The elixir of the scholars from Atlantis. It's not magic, it's just extremely clever science.",
      price: "58",
      imgSrc: nootropic,
      alt: "Nootropic box",
      listItemData: [
        {
          text: "Discover the secrets of Atlantis' smartest with Brainiac Boost. This formula consists of:",
          styles: "opacity-100 duration-1000 z-10",
        },
        {
          text: "2,500mg Alpha-GPC - Elevate cognition! 🧠",
          styles: "opacity-100 duration-[500ms] z-10 top-[32rem]",
        },
        {
          text: "200mg Caffeine - For that alert feeling without the jitters ☕",
          styles: "opacity-100 duration-[1000ms] z-10 top-[37rem]",
        },
        {
          text: "10mg Noopept - Unleash synaptic prowess! ⚡",
          styles: "opacity-100 duration-[2000ms] z-10 top-[41rem]",
        },
      ]
    },
    limitedpre:{
      name: "Lift-Off Launch",
      desc: "Crafted by Martian mixologists. Experience a cosmic blast off at the gym!",
      price: "69",
      imgSrc: limitedpre,
      alt: "Pre-workout launch box",
      listItemData: [
        {
          text: "Buckle up and blast off with Lift-Off Launch. This galactic formula consists of:",
          styles: "opacity-100 duration-1000 z-10",
        },
        {
          text: "3,500mg Beta-Alanine - Galactic endurance! 🚀",
          styles: "opacity-100 duration-[500ms] z-10 top-[32rem]",
        },
        {
          text: "200mg Rhodiola Rosea - Adapt and conquer alien territories! 🪐",
          styles: "opacity-100 duration-[1000ms] z-10 top-[37rem]",
        },
        {
          text: "2g Creatine Nitrate - For interstellar strength! 💥",
          styles: "opacity-100 duration-[2000ms] z-10 top-[41rem]",
        },
      ]
    },
    essentials: {
      name: "Nature's Nirvana",
      desc: "Summoned from the heart of Mother Earth. Feed your body, soul, and some mystical forest creatures.",
      price: "50",
      imgSrc: essential,
      alt: "Essential supplement box",
      listItemData: [
        {
          text: "Mother Earth's chosen blend. Nature's Nirvana consists of:",
          styles: "opacity-100 duration-1000 z-10",
        },
        {
          text: "Vitamin A - See the magic! 🌌",
          styles: "opacity-100 duration-[500ms] z-10 top-[32rem]",
        },
        {
          text: "Lion's Mane - Roar with cognitive clarity! 🦁",
          styles: "opacity-100 duration-[1000ms] z-10 top-[37rem]",
        },
        {
          text: "Magnesium - Dance with the spirits, cramp-free! 💃",
          styles: "opacity-100 duration-[2000ms] z-10 top-[41rem]",
        },
      ]
    }
    
    
      
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
    >
      <div
        ref={divRef}
        className={` h-[90svh] mt-2 scrollbar-hide ${
          activeProduct
            ? " overflow-hidden scale-150 xl:scale-95 xl:-translate-x-12 transition-transform duration-700 "
            : "overflow-scroll -mt-1 "
        }`}
      >
        {Object.keys(products).map((key) => {
          const product = products[key];
          const isActiveProduct = activeProduct === key;

          if (isActiveProduct || activeProduct === null) {
            return (
              <div key={key}>
                <img
                  onClick={() => handleProductClick(key)}
                  src={product.imgSrc}
                  alt={product.alt}
                  className={`z-10 transition-all duration-1000 xl:mt-5 scale-75 xl:scale-[.5] cursor-pointer ${
                    isBought && isActiveProduct
                      ? " transition-all duration-500 scale-[.2] translate-x-[102rem] -translate-y-[62rem]"
                      : isActiveProduct === true
                      ? " transition-all duration-300  xl:absolute xl:-translate-y-[24rem] translate-y-[2rem]"
                      : " hover:z-10 hover:transition-all  hover:scale-[0.52]"
                  }`}
                />
              </div>
            );
          }

          return null;
        })}
      </div>

      {activeProduct && (
        <div className="overflow-y-scroll  scrollbar-hide p-2 mx-3 fixed w-[95svw] bottom-2 transform  h-auto max-h-[41svh] xl:max-h-[85svh] bg-cyan-950 bg-opacity-40 rounded-3xl xl:scale-75 xl:absolute xl:w-auto xl:h-auto xl:bottom-auto xl:top-[20%] xl:left-[60%]  xl:right-auto xl:p-5 transition-all">
          <ul
            className={`select-text xl:text-left font-montserrat ${
              isBought
                ? "scale-[2] font-extrabold opacity-0 duration-500"
                : showListItems
                ? "xl:mb-6 xl:text-2xl font-bold  transition-transform duration-700 text-white"
                : "w-[28rem] transition-transform duration-700 text-white translate-x-[0] translate-y-[0]"
            }`}
          >
            {products[activeProduct].listItemData.map((detail, key) => (
              <li key={key} className="p-3 xl:p-5 ">
                {detail.text}
              </li>
            ))}
          </ul>

          <h2
            className={`xl:text-7xl text-5xl text-white py-4 xl:py-10 content-center text-center transition-all ${
              showListItems ? "" : "translate-x-[110rem] -translate-y-[144rem]"
            }`}
          >
            {products[activeProduct].price} BGN
          </h2>

          <select
            value={quantity}
            className={`scale-150  delay-200 mx-7 w-9 scrollbar-hide scrollbar-width-none ${
              showListItems ? " " : "translate-x-[110rem] -translate-y-[144rem]"
            }`}
            onChange={handleQuantityPicker}
          >
            {Array.from({ length: 10 }, (_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>

          <button
            className={`inline-flex items-center justify-center p-0.5 mb-2 mr-2  text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  text-center  transition-transform duration-700${
              showListItems ? " " : "translate-x-[110rem] -translate-y-[144rem]"
            }`}
            onClick={() => {
              toast(products[activeProduct].name +' added to cart!',{
                autoClose: 1200,

              })
              handleAddToCart(products[activeProduct], quantity);
              setQuantity(1);
              setIsBought(true);
              setTimeout(() => {
                setActiveProduct(null),
                setIsBought(false), 
                scrollerche();
              }, 250);
            }}
          >
            <span className=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Add to cart
            </span>
          </button>
        </div>
        // /|\
        //  |
      )}
    </motion.div>
  );
}
