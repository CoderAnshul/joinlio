import React from "react";
import arr from "../assets/images/downArr.png";

const DevideSectionText = ({ title1, title2, description, highlight , className }) => {
  return (
    <section className="relative my-[50px] lg:mt-[150px] flex items-center justify-between h-auto">
      {/* Left Side: Title and Description */}
      <div className="max-w-2xl sm:max-w-lg md:max-w-2xl">
        <h1 className="text-5xl lg:text-8xl md:!leading-[50px]  lg:!leading-[80px] -ml-2 md:-ml-3 gradient-text-two whitespace-nowrap md:text-6xl font-bold text-blue-300">
          {title1} <br /> {title2}
        </h1>
        <p className="mt-6 text-sm font-archivo  md:text-lg text-gray-700 lg:!leading-6 mb-10">
          {description}{" "}
          <span className="font-semibold italic">{highlight}</span>
        </p>
      </div>

      {/* Right Side: Circle with Arrow */}
      <div className={`${className} absolute right-2 -bottom-24 sm:bottom-auto sm:top-0 md:right-16 lg:right-16 flex items-center justify-center`}>
        <div className="relative w-32 h-32 rounded-full flex items-center justify-center">
          <svg
            className="absolute w-full h-full rotate-animation"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Circular Path */}
            <path
              id="circlePath"
              d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
              fill="transparent"
            />
            {/* Text Along the Path */}
            <text className="text-[10px] font-medium tracking-widest text-black">
              <textPath
                href="#circlePath"
                startOffset="0"
                method="align"
                spacing="auto"
              >
                explore the portal | the possibilities explore the portal | the possibilities
              </textPath>
            </text>
          </svg>
          {/* Center Arrow Image */}
          <img
            src={arr}
            alt="Arrow"
            className="w-6 h-6 absolute bounce-animation"
          />
        </div>
      </div>
    </section>
  );
};

export default DevideSectionText;
