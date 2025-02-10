import React, { useState, useEffect } from "react";
import gsap from "gsap";
import illustration from "../../assets/images/confused.png";
import arrowIcon from "../../assets/images/downarr.png";

const contentData = [
  {
    id: 1,
    subtext: "JOINLIO connects your business with verified students, helping you grow sales and build loyalty—all with zero upfront costs until you succeed.",
    changeHeading: "Looking to expand your",
    changeHeadingTwo: " student customer base?",
  },
  {
    id: 2,
    subtext: "Sign up for a free JOINLIO business account, list your student-focused offers, track sales, and engage directly with customers. Pay only when you make sales!",
    changeHeading: "How can you reach more",
    changeHeadingTwo: "student customers?",
  },
  {
    id: 3,
    subtext: "Every JOINLIO student is verified, and your data is encrypted and GDPR-compliant. No hidden fees—you only pay when you earn.",
    changeHeading: "Worried about trust",
    changeHeadingTwo: "and security?",
  },
];

const BussinessHead = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const nextIndex = currentIndex === contentData.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    gsap.fromTo(
      ".content-container",
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
    );
    setIsAnimating(false);
  }, [currentIndex]);

  return (
    <section className="flex flex-col md:flex-row items-start justify-between px-6 lg:px-20 gap-[10px] py-12 space-y-8 lg:space-y-0">
      {/* Left Section */}
      <div className="relative max-w-2xl">
        {/* Intro Text */}
        <div className="flex items-start relative mb-4">
          {/* <img
            src={arrowIcon}
            alt="Arrow"
            className="absolute -left-10 top-3 -rotate-90 w-6 h-6 cursor-pointer"
            onClick={handleNext}
          /> */}

          <div
            className="absolute left-0 -top-16 md:-left-10 md:top-3 -rotate-90 w-6 h-6 cursor-pointer arrow"
            onClick={handleNext}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold leading-snug">
            {contentData[currentIndex].changeHeading}
            <span className="text-textColor">{contentData[currentIndex].changeHeadingTwo}</span>
          </h1>
        </div>

        {/* Sliding Content */}
        {/* <div className="flex flex-wrap items-center gap-6 max-w-2xl !mt-12">
          <div className="content-container flex-1 px-3 pt-10 py-4 text-start min-w-[190px] xl:max-w-[190px] w-full min-h-[150px] max-h-[150px] gradient-border relative overflow-hidden">
            <h3 className="text-customBlue text-[1.5rem] leading-6 font-bold relative z-10">
              {contentData[currentIndex].heading}
            </h3>
          </div>
          <div className="content-container flex-1 px-3 pt-10 py-4 min-w-[190px] min-h-[150px] xl:max-w-[190px] w-full max-h-[150px] text-start gradient-border relative overflow-hidden">
            <h3 className="text-customBlue text-[1.5rem] leading-6 font-bold relative z-10">
              {contentData[(currentIndex + 1) % contentData.length].heading}
            </h3>
          </div>
          <div className="content-container flex-1 px-3 lg:pt-10 text-start min-w-[190px] xl:max-w-[190px] relative min-h-[80px] max-h-[150px]">
            <h3 className="text-customBlue text-[1.5rem] leading-6 font-bold relative z-10">
              {contentData[(currentIndex + 2) % contentData.length].heading}
            </h3>
          </div>
        </div> */}

        {/* Subtext */}
        <div className="flex gap-8 mt-8">
          <p className="text-gray-700 text-[16px] leading-[20px] mt-[2vw] max-w-xl">
            {contentData[currentIndex].subtext}
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3">
        <img
          src={illustration}
          alt="Confused Student"
          className="w-full object-contain max-w-sm 2xl:max-w-md mx-auto"
        />
      </div>
    </section>
  );
};

export default BussinessHead;
