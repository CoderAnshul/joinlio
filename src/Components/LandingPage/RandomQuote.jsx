import React from 'react';
import block from "../../assets/images/blockimg.png"

const RandomQuote = () => {
  return (
    <div className="px-6 lg:px-20 gap-[10px] py-12 my-5 ">
      <div className='border-gray-700 border-opacity-15 bg-[#EEEEEE]/40 backdrop-blur-xl rounded-2xl p-6 md:p-12'>

      <div className="flex items-center justify-evenly w-full flex-wrap-reverse md:flex-nowrap mx-auto p-4 bg-white rounded-3xl shadow-md border border-gray-200">
        {/* Text Section */}
        <div className="text-left">
          <p className="text-3xl lg:text-4xl lg:max-w-xl  2xl:text-4xl max-w-2xl font-semibold text-gray-900">
            What if every connection you make today shapes your future tomorrow?
          </p>
        </div>

        {/* Image Section */}
        <div className="ml-4">
          <img
            src={block}
            alt="People connecting puzzle pieces"
            className="h-full max-w-56 object-contain"
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default RandomQuote;
