"use-client";
import { FC } from "react";
import { motion } from "framer-motion";


const Button: FC = () => {
  return (
    <motion.button
      className="bg-[#f5c2e7] text-[#1e1e2e] px-6 py-3 rounded-md hover:bg-[#cba6f7] transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Explore Articles
    </motion.button>
  );
};

export default Button;