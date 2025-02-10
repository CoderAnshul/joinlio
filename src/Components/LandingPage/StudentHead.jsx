import React, { useState, useEffect } from "react";
import gsap from "gsap";
import illustration from "../../assets/images/confused.png";
import struggle from "../../assets/images/struggle.png";
import worried from "../../assets/images/worried.png";
import relation from "../../assets/images/relation.png";

const contentData = [
  {
    id: 1,
    heading: "Only 8% of students achieve their dreams",
    subtext: "JOINLIO helps you make the most of your time by transforming wasted hours into opportunities for meaningful connections, productive collaborations, and personal growth.",
    changeHeading: "Are you just scrolling aimlessly, ",
    changeHeadingTwo: "wasting time on social media?",
    image: illustration,
  },
  {
    id: 2,
    heading: "Almost 92% of students get distracted",
    subtext: "JOINLIO connects you with like-minded peers worldwide, fostering collaboration and meaningful engagement aligned with your passions and goals.",
    changeHeading: "Struggling to find trusted, like-minded",
    changeHeadingTwo: " collaborators for your projects?",
    image: struggle,
  },
  {
    id: 3,
    heading: "Do you want to be in the top 8%?",
    subtext: "JOINLIO empowers you to gain valuable real-world experience and effectively showcase your skills through a dedicated Peer Account, helping you stand out and grow in your professional journey.",
    changeHeading: "Worried Your Degree",
    changeHeadingTwo: "  Isn’t Enough?",
    image: worried,
  },
  {
    id: 4,
    heading: "Only 8% achieve their dreams. Are you part of it?",
    subtext: "JOINLIO fosters meaningful connections by creating a dynamic platform that enables you to build strong relationships within your university community and extend your network beyond campus, opening doors to new opportunities and collaborations.",
    changeHeading: "Finding It Hard to Build ",
    changeHeadingTwo: "Valuable Relationships?",
    image: relation,
  },
];

const ScrollingOrGrowing = () => {
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
    <section className="flex flex-col md:flex-row items-center justify-between px-6 lg:px-20 gap-[10px] py-12 space-y-8 lg:space-y-0">
      {/* Left Section */}
      <div className="relative max-w-2xl">
        <p className="text-sm font-bold text-black">
          JOINLIO: Where Students and Alumni Thrive.
        </p>

        <div className="flex items-start relative mb-">
          {/* Arrow Icon Div */}
          <div
            className="absolute left-0 -top-16 md:-left-10 md:top-3 -rotate-90 w-6 h-6 cursor-pointer arrow"
            onClick={handleNext}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Changing Heading */}
          <h1 className="text-3xl lg:text-5xl font-bold leading-snug">
            {contentData[currentIndex].changeHeading}
            <span className="text-textColor">{contentData[currentIndex].changeHeadingTwo}</span>
          </h1>
        </div>

        {/* Sliding Content */}
        {/* <div className="flex flex-wrap items-center gap-6 max-w-2xl !mt-12">
          {contentData.slice(currentIndex, currentIndex + 3).map((content, idx) => (
            <div
              key={idx}
              className="content-container flex-1 px-3 pt-10 py-4 text-start min-w-[190px] xl:max-w-[190px] w-full min-h-[150px] max-h-[150px] gradient-border relative overflow-hidden"
            >
              <h3 className="text-customBlue text-[1.5rem] leading-6 font-bold relative z-10">
                {content.heading}
              </h3>
            </div>
          ))}
        </div> */}

        {/* Subtext */}
        <div className="flex gap-8">
          <p className="text-gray-700 text-[16px] leading-[20px] mt-[2vw] max-w-xl">
            {contentData[currentIndex].subtext}
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3">
        <img
          src={contentData[currentIndex].image}
          alt="Confused Student"
          className="w-full object-contain max-w-sm 2xl:max-w-md mx-auto"
        />
      </div>
    </section>
  );
};

export default ScrollingOrGrowing;
