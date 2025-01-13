import React, { useState } from "react";
import Marquee from "react-marquee-slider";

const ScrollableSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const items = Array(10).fill("Item"); // Replace with dynamic content if needed

  return (
    <div className="w-full h-[194px] bg-gray-100 flex items-center justify-center overflow-hidden border-t-2 border-b-2 border-gray-700 border-opacity-55">
      <Marquee
        velocity={20}
        direction="rtl"
        resetAfterTries={200}
        pauseOnHover={isPaused} // Pause the scrolling when hovering
      >
        {items.map((item, index) => (
          <div
          key={index}
          className="group flex items-center justify-center w-44 h-44 mt-[6px] cursor-pointer bg-white border-2 border-gray-700 border-opacity-35 shadow-md shrink-0 px-4 py-4 hover:border-opacity-75 hover:rounded-2xl transition-all"
          onMouseEnter={() => setIsPaused(true)} // Pause on hover
          onMouseLeave={() => setIsPaused(false)} // Resume scrolling on mouse leave
        >
          <div className="w-24 h-24 rounded-full bg-gray-300 border-2 border-blue-300 group-hover:scale-105 transform trasition-all"></div>
        </div>
        
        ))}
      </Marquee>
    </div>
  );
};

export default ScrollableSection;
