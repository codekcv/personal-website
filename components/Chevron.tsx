"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function Chevron() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolled && window.scrollY === 0) setIsScrolled(false);
      else if (!isScrolled && window.scrollY !== 0) setIsScrolled(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <motion.div
      className="height-[48px]"
      variants={{
        out: { opacity: 0.15 },
        in: { opacity: 1 },
      }}
      initial="out"
      animate={!isScrolled ? "in" : "out"}
    >
      <motion.div
        className="height-[48px]"
        animate={{
          transform: [
            "translateY(-1rem)",
            "translateY(0rem)",
            "translateY(-1rem)",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
      >
        <FaAngleDoubleDown className="text-2xl md:text-5xl" />
      </motion.div>
    </motion.div>
  );
}
