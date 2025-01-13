import React from "react";
import illustration from "../../assets/images/confused.png"; 
import arrowIcon from "../../assets/images/downArr.png";

const UniversityHead = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between px-6 lg:px-20 gap-[10px] py-12 space-y-8 lg:space-y-0">
      {/* Left Section */}
      <div className="relative max-w-2xl ">
        

        {/* Intro Text */}
        {/* <p className="text-sm font-bold text-black">
          JOINLIO: Where Students and Alumni Thrive.
        </p> */}

        <div className="flex items-start relative mb-8">
        {/* <div className="flex items-start relative mb-14"> */}
            <img
            src={arrowIcon}
            alt="Arrow"
            className="absolute -left-10 top-3 -rotate-90 w-6 h-6"
            />
            <h1 className="text-3xl lg:text-5xl font-bold leading-snug">
            Be more than a university -  <br />
            <span className="text-textColor">be a catalyst for aspirations."</span>
            </h1>
        </div>

        {/* Statistics Boxes */}
        {/* <div className="flex flex-wrap items-center gap-6 max-w-2xl !mt-12">
          <div className="flex-1  px-3 pt-10 py-4 text-start min-w-[190px] xl:max-w-[190px] w-full min-h-[150px] max-h-[150px] gradient-border relative overflow-hidden ">
            <h3 className="text-customBlue text-[1.5rem] leading-6 font-bold relative z-10">
              Only <span className="text-blue-500 font-bold">8%</span> of
              students achieve their dreams
            </h3>
          </div>
          <div className="flex-1 px-3 pt-10 py-4 min-w-[190px] min-h-[150px] xl:max-w-[190px] w-full max-h-[150px] text-start gradient-border relative overflow-hidden  ">
            <h3 className="text-customBlue text-[1.5rem] leading-6 font-bold relative z-10">
              Almost <span className="text-blue-500 font-bold">92%</span> of
              Students get distracted
            </h3>
          </div>
          <div className="flex-1 px-3 lg:pt-10  text-start min-w-[190px] xl:max-w-[190px] relative min-h-[80px] max-h-[150px]  ">
            <h3 className="text-customBlue relative font-bold leading-8 md:leading-6  text-[1.4rem] z-10">
              Do you want to be in the top{" "}
              <span className="text-blue-500  text-[2.2rem] font-bold">8%</span>?
            </h3>
          </div>
        </div> */}

        {/* Subtext */}
        <p className="text-gray-700 text-[16px] leading-[20px] mt-[2vw] max-w-xl">
        {/* <p className="text-gray-700 text-[16px] leading-[20px] mt-[2vw] max-w-xl"> */}
        JOINLIO is a cutting-edge platform designed to transform student development within universities, colleges, and institutes. By subscribing to JOINLIO, your institution gives students free access to advanced tools that foster personal growth, global collaboration, and professional success. Empower your students with a verified, future-ready ecosystem that promotes innovation, strengthens connections, and equips them to lead in an ever-changing world.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3">
        <img
          src={illustration}
          alt="Confused Student"
          className="w-full object-contain max-w-xs 2xl:max-w-xs mx-auto"
        />
      </div>
    </section>
  );
};

export default UniversityHead;
