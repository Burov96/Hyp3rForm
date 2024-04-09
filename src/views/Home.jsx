import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } },
};

const titleVariants = {
  hidden: { y: "-100svh", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } },
};

const subTitleVariants = {
  hidden: { y: "100svh", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } },
};



const HomePage = () => {
    const navigate = useNavigate();
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="overflow-y-hidden flex flex-col items-center justify-center h-[100svh] bg-black bg-opacity-50 absolute inset-0"
    >
      <motion.h1
        variants={titleVariants}
        className="text-4xl font-bold text-white mb-4 tracking-wide"
      >
        HyperForm
      </motion.h1>
      <motion.h2
        variants={subTitleVariants}
        className="text-2xl text-gray-300 mb-6 tracking-wide"
      >
        Unleash Your Potential
      </motion.h2>
      <motion.button
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px #fff" }}
        whileTap={{ scale: 0.9 }}
        className="px-6 py-2 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition duration-200"
        onClick={() => navigate('/products')}>
        Explore Products
      </motion.button>
    </motion.div>
  );
};

export default HomePage;
