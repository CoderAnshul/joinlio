import React, { useState, useEffect } from "react";
import gsap from "gsap";
import forward from "../../assets/images/forward.jpg"; 
import personal from "../../assets/images/personal.jpg"; 
import way from "../../assets/images/way.jpg"; 
import community from "../../assets/images/student-community.jpg"; 
import collab from "../../assets/images/collab.jpg"; 

// Sample array of objects with content for each slide
const slides = [
  {
    title: "Do you want to stand out as ",
    subTitle: "a forward-thinking institution?",
    description:
      "JOINLIO positions your university as a leader in student innovation and personal development,preparing graduates for real-world success.",
    image: forward,
  },
  {
    title: "Do your students lack tools",
    subTitle: " for personal development?",
    description:
      "JOINLIO offers advanced tools for goal tracking, skill building, and real-world project opportunities to enhance student success.",
    image: personal,
  },
  {
    title: " Do your students need a way",
    subTitle: " to showcase their achievements?",
    description:
      "JOINLIO’s Peer Account lets students create digital portfolios to showcase skills, projects, and accomplishments to the world.",
    image: way,
  },
  {
    title: "Is student engagement and",
    subTitle: "community-building a challenge?",
    description:
      "JOINLIO helps create a strong, connected community across departments and universities,fostering teamwork and inclusivity.",
    image: community,
  },
  {
    title: "Are your students struggling",
    subTitle: " to connect and collaborate?",
    description:
      "JOINLIO builds a verified community where students can connect within and beyond their university, fostering collaboration and global networks.",
    image: collab,
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
          {/* <img
            src={arrowIcon}
            alt="Arrow"
            className="absolute -left-10 top-3 -rotate-90 w-6 h-6 cursor-pointer"
            onClick={goToNextSlide} // Slide to the next content
          /> */}

          <div
            className="absolute left-0 -top-16 md:-left-10 md:top-3 -rotate-90 w-6 h-6 cursor-pointer arrow"
            onClick={goToNextSlide}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold leading-snug slide-title">
            {slides[currentSlide].title} <br />
            <span className="text-textColor">{slides[currentSlide].subTitle}</span>
          </h2>
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
