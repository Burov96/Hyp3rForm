import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"
import image1 from "../views/comming/1.webp";
import image2 from "../views/comming/2.webp";
import image3 from "../views/comming/3.webp";
import image4 from "../views/comming/4.png";
import image5 from "../views/comming/5.png";
import image6 from "../views/comming/6.png";
import image7 from "../views/comming/7.png";
import image8 from "../views/comming/8.webp";

export default function Premier() {
  const [position, setPosition] = useState("bg-bottom");
  const [curr, setCurr] = useState(0);
  const buttonRefs = useRef([]);

  useEffect(() => {
    setPosition("bg-top");
    const scrollDownTimeout = setTimeout(() => {
      setPosition("bg-bottom");
    }, 6000);

    const changeImageTimeout = setTimeout(() => {
      setPosition("bg-top");
      setCurr((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    }, 12000);

    return () => {
      clearTimeout(scrollDownTimeout);
      clearTimeout(changeImageTimeout);
    };
  }, [curr]);


  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 100 }}
    className="relative flex xl:items-center justify-center h-[90svh] w-screen ">
      <div
        className={`h-[77svh] w-[90svw]  xl:w-[1024px] xl:h-[420px]  flex justify-center items-end space-x-2 rounded-2xl duration-[6000ms] xl:scale-125 transition-all ${position}`}
        style={{ backgroundImage: `url(${images[curr]})` }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className={`translate-y-12 rounded-md p-3 h-3 w-3 outline-double transition-all 
            ${index === curr ? 'bg-red-500' : 'bg-lime-400'} 
            hover:bg-cyan-500 focus:outline-red-700`}
            onClick={() => setCurr(index)}/>
        ))}
      </div>
    </motion.div>
  );
}
