import React, { useState, useEffect } from "react";
import gsap from "gsap";
import student from "../../assets/images/student.jpg";
import customer from "../../assets/images/customer.jpg";
import trust from "../../assets/images/trust.jpg";

const contentData = [
  {
    id: 1,
    subtext: "JOINLIO connects your business with verified students, helping you grow sales and build loyalty—all with zero upfront costs until you succeed.",
    changeHeading: "Looking to expand your",
    changeHeadingTwo: " student customer base?",
    img: student,
  },
  {
    id: 2,
    subtext: "Sign up for a free JOINLIO business account, list your student-focused offers, track sales, and engage directly with customers. Pay only when you make sales!",
    changeHeading: "How can you reach more",
    changeHeadingTwo: " student customers?",
    img: customer,
  },
  {
    id: 3,
    subtext: "Every JOINLIO student is verified, and your data is encrypted and GDPR-compliant. No hidden fees—you only pay when you earn.",
    changeHeading: "Worried about trust",
    changeHeadingTwo: " and security?",
    img: trust,
  },
];

const BussinessHead = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    gsap.to(".content-wrapper", {
      opacity: 0,
      x: -50,
      duration: 0.3,
      onComplete: () => {
        const nextIndex = currentIndex === contentData.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);

        gsap.fromTo(
          ".content-wrapper",
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 0.2, ease: "power2.out" }
        );

        setIsAnimating(false);
      },
    });
  };

  return (
    <section className="flex flex-col md:flex-row items-start justify-between px-6 lg:px-20 gap-[10px] py-12 space-y-8 lg:space-y-0">
      {/* Left Section */}
      <div className="relative max-w-2xl">
        {/* Arrow Button for Next */}
        <div
          className="absolute left-0 -top-16 md:-left-10 md:top-3 -rotate-90 w-6 h-6 cursor-pointer arrow"
          onClick={handleNext}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Content Wrapper (Only this slides) */}
        <div className="content-wrapper">
          <h1 className="text-3xl lg:text-5xl font-bold leading-snug">
            {contentData[currentIndex].changeHeading}
            <span className="text-textColor">{contentData[currentIndex].changeHeadingTwo}</span>
          </h1>

          {/* Subtext */}
          <div className="flex gap-8 mt-8">
            <p className="text-gray-700 text-[16px] leading-[20px] mt-[2vw] max-w-xl">
              {contentData[currentIndex].subtext}
            </p>
          </div>
        </div>
      </div>

      {/* Right Section (Image also slides) */}
      <div className="w-full lg:w-1/3">
        <div className="content-wrapper">
          <img
            src={contentData[currentIndex].img}
            alt="Confused Student"
            className="w-full object-contain max-w-sm 2xl:max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default BussinessHead;
