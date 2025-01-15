import React from 'react';
import rings from "../../assets/images/rings.png";

const CircleDetails = ({ boxTexts, centerHeading, centerDescription, centerSubHeading }) => {
  return (
    <div className="px-2 lg:px-20 gap-[10px] py-12 my-5">
      {/* Large screens */}
      <div className="relative w-full min-h-[500px] h-screen max-h-[700px] hidden md:scale-90 lg:scale-100 md:flex justify-center items-center">
        <img className="absolute z-10 h-full w-full object-contain" src={rings} alt="bgring" />
        <div className="gradient-circle-background"></div>
        <div className="gradient-circle-background outer"></div>
        <div className="h-[650px] flex justify-center items-center w-[650px] relative z-20 rounded-full bg-transparent">
          {/* Circular container */}
          {boxTexts.map((text, index) => {
            const angle = (360 / boxTexts.length) * index; // Calculate angle for each box
            return (
              <div
                key={index}
                className="absolute top-[40%] left-[35%] translate-x-[45%] translate-y-[-50%] h-[120px] overflow-hidden p-3 w-[180px] border border-gray-700 border-opacity-55 bg-[#EEEEEE]/40 backdrop-blur-xl rounded-2xl text-white flex items-center justify-center"
                style={{
                  transform: `rotate(${angle}deg) translate(325px) rotate(-${angle}deg)`, // Ensure precise radius (half of 650px)
                  transformOrigin: "center",
                }}
              >
                <div className="h-full w-full bg-white text-sm rounded-lg flex items-center justify-center text-gray-800 font-semibold text-center">
                  {text}
                </div>
              </div>
            );
          })}

          {/* Center text */}
          <div className="absolute flex items-start flex-col justify-center text-center text-lg font-bold">
            <h1 className="text-3xl lg:text-4xl mx-auto max-w-[400px] text-customBlue mb-4 font-bold leading-snug">
              {centerHeading}
              <span className="text-white">{centerSubHeading}</span>
            </h1>
            <p className="py-3 px-2 rounded-2xl border border-gray-700 border-opacity-55 bg-[#EEEEEE]/20 backdrop-blur-sm max-w-[410px] text-customBlue text-opacity-80 text-sm mb-4">
              {centerDescription}
            </p>
            <button className="button-shadow bg-white uppercase mx-auto md:mt-0 h-12 px-6 py-3 text-xs font-medium border border-black rounded-sm active:scale-95 transform hover:bg-[#2CA2FB] hover:text-white transition-all duration-300">
              How it Works
            </button>
          </div>
        </div>
      </div>

      {/* Small screens - Stacked layout */}
      <div className="block md:hidden">
        <div className="relative flex flex-col  items-center w-full">
          <img className="w-full h-[300px] object-contain" src={rings} alt="bgring" />
          <div className="gradient-circle-background"></div>
          <div className="h-full min-w-[150px] w-full p-2 flex-wrap relative z-20 gap-6 rounded-full bg-transparent flex justify-center items-center">
            {/* Circular container */}
            {boxTexts.map((text, index) => {
              return (
                
                    <div key={index} className="h-[200px] flex-1  min-w-[170px] max-w-[400px] w-full mb-2 overflow-hidden p-3 border border-gray-700 border-opacity-55 bg-[#EEEEEE]/40 backdrop-blur-xl rounded-2xl text-black flex items-center justify-center text-sm font-semibold text-center">
                        <div className='w-full h-full bg-white rounded-lg text-lg flex items-center justify-center'>
                            {text}
                        </div>
                    </div>
                
              );
            })}
          </div>

          {/* Center text */}
          <div className="absolute flex items-start flex-col justify-center text-center text-lg font-bold  py-3">
            <h1 className="text-3xl lg:text-4xl mx-auto max-w-[400px] text-customBlue mb-4 font-bold leading-snug">
              {centerHeading}
              <span className="text-blue-500">{centerSubHeading}</span>
            </h1>
            <p className="text-sm text-customBlue max-w-lg text-opacity-80 mb-4">
              {centerDescription}
            </p>
            <button className="bg-white uppercase mx-auto h-10 px-6 py-2 text-xs font-medium border border-black rounded-sm active:scale-95 transform hover:bg-[#2CA2FB] hover:text-white transition-all duration-300">
              How it Works
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleDetails;
