import React, { useEffect, useState } from "react";
import knot from "../../assets/svg/knot.svg";
import VideoContainer from "../VideoContainer";
import RevealText from "./RevealText";

const Banner = () => {
  const words = ["STUDENTS", "ALUMNI", "BUSINESS", "UNIVERSITIES"];
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const typeSpeed = 150;
    const deleteSpeed = 100;
    const pauseTime = 1000;

    const type = () => {
      const fullWord = words[wordIndex];
      if (!isDeleting) {
        setCurrentWord(fullWord.substring(0, currentWord.length + 1));
        if (currentWord.length === fullWord.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setCurrentWord(currentWord.substring(0, currentWord.length - 1));
        if (currentWord.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, wordIndex]);

  return (
    <div className="relative z-[100] pb-[4vw]">
      <div className="flex relative z-[50] flex-col items-center justify-center min-h-[calc(60vh-80px)] md:min-h-[calc(80vh-80px)] text-center px-4">
        <div className="text-sm flex items-end gap-1 font-medium text-black uppercase mb-4">
          FOR{" "}
          <span className="text-xl gradient-text">
            {currentWord}
            <span className="animate-blink">|</span>
          </span>
        </div>

        <h1 className="text-4xl relative z-[50] md:text-45xl lg:text-5xl xl:text-7xl font-archivo font-bold text-customBlue mb-6">
          Step into the <br /> future with{" "}
          <span className="relative z-[50] text-textColor">
            JOINLIO
            <img className="absolute -right-2 top-6 md:-right-2 md:top-6" src={knot} alt="" />
          </span>
        </h1>

        <p className="relative z-[50] font-archivo text-customBlue max-w-md md:max-w-xl font-semibold mb-8">
          Join a vibrant digital ecosystem where students, <br /> alumni & business thrive together.
        </p>

        <button className="px-8 relative z-[50] py-3 text-sm font-medium text-black border border-black rounded-sm hover:bg-[#2CA2FB] hover:text-white transition-all duration-300 shadow-[0_4px_0px_0px_#f7c28a]
">
          CONTACT US TODAY
        </button>

        <div className="gradient-backgroundTwo outerTwo"></div>
        <div className="gradient-backgroundTwo"></div>
      </div>

      <VideoContainer />

      {/* <RevealText text="The game-changing platform where students and alumni unlock global connections, businesses redefine engagement, and universities elevate student development like never before. Discover a world of collaboration, innovation, and boundless opportunities." /> */}
    </div>
  );
};

export default Banner;
