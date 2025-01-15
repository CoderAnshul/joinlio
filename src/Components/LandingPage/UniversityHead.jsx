import React, { useState, useEffect } from "react";
import gsap from "gsap";
import illustration from "../../assets/images/confused.png"; 
import arrowIcon from "../../assets/images/downarr.png";

// Sample array of objects with content for each slide
const slides = [
  {
    title: "Be more than a university",
    subTitle: "Be a catalyst for aspirations.",
    description:
      "JOINLIO is a cutting-edge platform designed to transform student development within universities, colleges, and institutes.",
    image: illustration,
  },
  {
    title: "Empower your students",
    subTitle: "With tools for growth and success.",
    description:
      "By subscribing to JOINLIO, your institution gives students free access to advanced tools that foster personal growth, global collaboration, and professional success.",
    image: illustration,
  },
  {
    title: "Strengthen connections",
    subTitle: "Equip students for a changing world.",
    description:
      "JOINLIO promotes innovation, strengthens connections, and equips students to lead in an ever-changing world.",
    image: illustration,
  },
];

const UniversityHead = () => {
  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length); // Loop back to the first slide after the last
  };

  // GSAP animation effect when the slide changes
  useEffect(() => {
    // Animate the title and subtitle of the current slide
    gsap.fromTo(
      ".slide-title",
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".slide-description",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    // Animate the image with a fade-in effect
    gsap.fromTo(
      ".slide-image",
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
    );
  }, [currentSlide]); // Trigger the animation whenever the slide index changes

  return (
    <section className="flex flex-col md:flex-row items-start justify-between px-6 lg:px-20 gap-[10px] py-12 space-y-8 lg:space-y-0">
      {/* Left Section */}
      <div className="relative max-w-2xl">
        {/* Heading and Arrow Icon */}
        <div className="flex items-start relative mb-8">
          <img
            src={arrowIcon}
            alt="Arrow"
            className="absolute -left-10 top-3 -rotate-90 w-6 h-6 cursor-pointer"
            onClick={goToNextSlide} // Slide to the next content
          />
          <h1 className="text-3xl lg:text-5xl font-bold leading-snug slide-title">
            {slides[currentSlide].title} <br />
            <span className="text-textColor">{slides[currentSlide].subTitle}</span>
          </h1>
        </div>

        {/* Subtext */}
        <p className="text-gray-700 text-[16px] leading-[20px] mt-[2vw] max-w-xl slide-description">
          {slides[currentSlide].description}
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/3">
        <img
          src={slides[currentSlide].image}
          alt="Confused Student"
          className="w-full object-contain max-w-xs 2xl:max-w-xs mx-auto slide-image"
        />
      </div>
    </section>
  );
};

export default UniversityHead;
