import React from "react";
import { motion } from "framer-motion";

const RevealText = ({ text, className = "" }) => {
  if (!text) {
    console.warn("RevealText component requires a valid 'text' prop.");
    return null;
  }

  const words = text.split(" ");

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { opacity: { duration: 1 }, y: { duration: 0.75, ease: "easeOut" } }
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20, color: "#808080" }, // Initial gray color
    visible: {
      opacity: 1,
      y: 0,
      color: "#000000", // Final black color when fully in view
      transition: {
        opacity: { duration: 0.5 },
        y: { duration: 0.5, ease: "easeOut" },
        color: { duration: 0.5 }, // Smooth color transition
      },
    },
    scroll: {
      opacity: 1,
      color: "#000000",
      transition: {
        duration: 0.5, // Smooth color transition
        ease: "easeOut"
      },
    }
  };

  return (
    <div
      className={`reveal-text mt-20 text-4xl font-bold leading-relaxed ${className}`}
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          className="word inline-block mr-2"
          variants={wordVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              className="letter inline-block"
              variants={letterVariants}
              initial="hidden"
              whileInView="scroll"
              viewport={{ once: false, amount: 0.2 }} // Trigger the animation continuously as you scroll
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </div>
  );
};

export default RevealText;
