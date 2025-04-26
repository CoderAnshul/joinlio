import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import illustration from "../../assets/images/confused.png";
import struggle from "../../assets/images/struggle.png";
import worried from "../../assets/images/worried.png";
import relation from "../../assets/images/relation.png";
import idea from "../../assets/images/idea.jpg";
import job from "../../assets/images/job.jpg";

const contentData = [
  {
    id: 1,
    heading: "Only 8% of students achieve their dreams",
    subtext: "JOINLIO turns your screen time into meaningful connections, collaborations, and growth.",
    changeHeading: "Tired of endless scrolling, ",
    changeHeadingTwo: "with no purpose?",
    image: illustration,
  },
  {
    id: 2,
    heading: "Almost 92% of students get distracted",
    subtext: "JOINLIO helps you connect with like-minded peers and build real relationships—on and offcampus, globally.",
    changeHeading: "Struggling to find the right ",
    changeHeadingTwo: "people to grow with?",
    image: struggle,
  },
  {
    id: 3,
    heading: "Do you want to be in the top 8%?",
    subtext: "JOINLIO gives you tools, mentors, and support to bring your vision to life",
    changeHeading: "Have ideas but no way",
    changeHeadingTwo: " to build them?",
    image: worried,
  },
  {
    id: 4,
    heading: "Only 8% achieve their dreams. Are you part of it?",
    subtext: "JOINLIO helps you gain hands-on experience and showcase what makes you stand out",
    changeHeadingTwo: "is enough? ",
    image: relation,
  },
  {
    id: 5,
    heading: "Only 8% achieve their dreams. Are you part of it?",
    subtext: "With your Peer Account, JOINLIO helps you present your skills and story to the right people.",
    changeHeading: "Lacking Tools to Bring ",
    changeHeadingTwo: "Ideas to Life?",
    image: idea,
  },
  {
    id: 6,
    heading: "Only 8% achieve their dreams. Are you part of it?",
    subtext: "JOINLIO enables you to present your expertise, accomplishments, and professional journey in a structured and compelling manner through a dedicated Peer Account, allowing you to highlight your skills and achievements to a broader audience.",
    changeHeading: "Finding it hard to land ",
    changeHeadingTwo: "your first job?",
    image: job,
  },
];

const ScrollingOrGrowing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [nextContentReady, setNextContentReady] = useState(false);
  const slideIntervalRef = useRef(null);

  // Function to handle next slide
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // Hide current content
    gsap.to(".slide-content", {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        // Update index immediately
        setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
        setNextContentReady(true);
      }
    });
  };

  // Handle animations when next content is ready
  useEffect(() => {
    if (nextContentReady) {
      // Show new content with original animations
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

      gsap.fromTo(
        ".slide-image",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out", onComplete: () => {
          setIsAnimating(false);
          setNextContentReady(false);
        }}
      );
    }
  }, [nextContentReady]);

  // Setup automatic rotation
  useEffect(() => {
    // Set timeout for first slide
    const initialTimeout = setTimeout(() => {
      handleNext();
    }, 10000);
    
    // Set interval for automatic slide changes
    slideIntervalRef.current = setInterval(() => {
      handleNext();
    }, 10000);
    
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(slideIntervalRef.current);
    };
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-start justify-between px-6 lg:px-20 gap-[10px] py-12 space-y-8 lg:space-y-0">
      <div className="relative max-w-2xl">
        <p className="text-sm font-bold text-black">JOINLIO: Where Students and Alumni Thrive.</p>
        <div className="flex items-start relative mb-8">
          <div
            className="absolute left-0 -top-16 md:-left-10 md:top-3 -rotate-90 w-6 h-6 cursor-pointer arrow"
            onClick={handleNext}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold leading-snug slide-title slide-content">
            {contentData[currentIndex].changeHeading}
            <span className="text-textColor">{contentData[currentIndex].changeHeadingTwo}</span>
          </h2>
        </div>
        <p className="text-gray-700 text-[16px] leading-[20px] mt-[2vw] max-w-xl slide-description slide-content">
          {contentData[currentIndex].subtext}
        </p>
      </div>
      <div className="w-full lg:w-1/3">
        <img
          src={contentData[currentIndex].image}
          alt="Student"
          className="w-full object-contain max-w-xs 2xl:max-w-xs mx-auto slide-image slide-content"
        />
      </div>
    </section>
  );
};

export default ScrollingOrGrowing;