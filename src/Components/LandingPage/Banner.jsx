import React, { useEffect, useState } from "react";
import VideoContainer from "../VideoContainer";
import RevealText from "./RevealText";
import { Link } from "react-router-dom";

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
    <div className="relative z-[100]">
      <div className="flex relative z-[50] flex-col items-center pt-[54px] justify-center min-h-[calc(60vh-80px)] md:min-h-[calc(80vh-80px)] text-center px-4">
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
          </span>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 font-archivo font-bold text-2xl md:text-3xl mb-8">
          <div className="group relative overflow-hidden">
            <span className="relative z-10 bg-gradient-to-r from-[#2CA2FB] to-[#00D4FF] bg-clip-text text-transparent transform transition-transform duration-500 group-hover:scale-110 inline-block">
              Connect
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#2CA2FB]/20 to-[#00D4FF]/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          <div className="hidden md:block w-2 h-2 rounded-full bg-gradient-to-r from-[#2CA2FB] to-[#00D4FF] animate-pulse"></div>

          <div className="group relative overflow-hidden">
            <span className="relative z-10 bg-gradient-to-r from-[#2CA2FB] via-[#00D4FF] to-[#2CA2FB] bg-clip-text text-transparent bg-size-200 animate-gradient-x transform transition-transform duration-500 group-hover:scale-110 inline-block">
              Collaborate
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#2CA2FB]/20 to-[#00D4FF]/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          <div className="hidden md:block w-2 h-2 rounded-full bg-gradient-to-r from-[#2CA2FB] to-[#00D4FF] animate-pulse"></div>

          <div className="group relative overflow-hidden">
            <span className="relative z-10 bg-gradient-to-r from-[#00D4FF] to-[#2CA2FB] bg-clip-text text-transparent transform transition-transform duration-500 group-hover:scale-110 inline-block">
              Grow
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#2CA2FB]/20 to-[#00D4FF]/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        </div>

        <p className="relative z-[50] font-archivo text-customBlue max-w-md md:max-w-xl font-semibold mb-8">
          Join a vibrant digital ecosystem where students, <br /> alumni & business thrive together.
        </p>

        <Link to="/send-message">
          <button className="px-8 relative z-[50] py-3 text-sm font-medium text-black border border-black rounded-sm hover:bg-[#2CA2FB] hover:text-white transition-all duration-300 shadow-[0_4px_0px_0px_#00abff]">
            CONTACT US TODAY
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;