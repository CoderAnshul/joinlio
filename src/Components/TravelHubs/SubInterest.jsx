import React from "react";
import loop from "../../assets/images/loop.png";

const SubInterest = () => {
  return (
    <div className="px-6 lg:px-20 gap-[10px] py-12 my-5">
      {/* Header Section */}
      <div className="w-full flex justify-between gap-4 mb-6 flex-wrap">
        <div className="w-auto max-w-xl">
          <h3 className="text-3xl relative font-semibold text-customBlue">
            Sub Interests
            <img
              className="absolute -bottom-4 scale-50"
              src={loop}
              alt="loop text"
            />
          </h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full py-12">
        {/* Block 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
          {/* Item 1 */}
          <div className="flex items-center h-[400px] gap-4 p-6 rounded-2xl shadow-md bg-custom-gradient">
            <div>
              <h2 className="text-4xl lg:max-w-[70%] lg:mb-8 font-bold text-black">
                Lorem ipsum dolor sit amet,{" "}
                <span className="text-blue-500">consectetur adipiscing?</span>
              </h2>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
          {/* Item 2 */}
          <div className="flex items-center h-[400px] gap-4 p-6 rounded-2xl shadow-md bg-gray-100"></div>
        </div>

        {/* Block 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto mt-12">
          {/* Item 3 */}
          <div className="flex items-center h-[400px] gap-4 p-6 rounded-2xl shadow-md bg-gray-100 order-2 md:order-1"></div>
          {/* Item 4 */}
          <div className="flex items-center h-[400px] gap-4 p-6 rounded-2xl shadow-md bg-custom-gradient-Two order-1 md:order-2">
            <div>
              <h2 className="text-4xl lg:max-w-[70%] lg:mb-8 font-bold text-black">
                Lorem ipsum dolor sit amet,{" "}
                <span className="text-blue-500">consectetur adipiscing?</span>
              </h2>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
        </div>

        {/* Block 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto mt-12">
          {/* Item 5 */}
          <div className="flex items-center h-[400px] gap-4 p-6 rounded-2xl shadow-md bg-custom-gradient">
            <div>
              <h2 className="text-4xl lg:max-w-[70%] lg:mb-8 font-bold text-black">
                Lorem ipsum dolor sit amet,{" "}
                <span className="text-blue-500">consectetur adipiscing?</span>
              </h2>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
          {/* Item 6 */}
          <div className="flex items-center h-[400px] gap-4 p-6 rounded-2xl shadow-md bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
};

export default SubInterest;
