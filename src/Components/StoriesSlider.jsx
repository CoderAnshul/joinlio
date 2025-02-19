import React, { useState } from "react";
import Marquee from "react-marquee-slider";
import travelVideo from "../assets/video/travel.mp4";
import mediaVideo from "../assets/video/media.mp4";
import entrepreneurVideo from "../assets/video/business.mp4";
import playIcon from "../assets/images/play.png";
import pauseIcon from "../assets/images/pause.png";

const stories = [
  { id: 1, video: travelVideo, title: "Travel" },
  { id: 2, video: mediaVideo, title: "Media" },
  { id: 3, video: entrepreneurVideo, title: "Business" }
];

const repeatedStories = [...stories, ...stories, ...stories]; // Repeat for smooth scrolling

const ScrollableSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null); // State for full-screen video

  // Function to close video overlay
  const closeVideo = () => setSelectedVideo(null);

  // Close on Esc key
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeVideo();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="w-full h-[194px] relative z-[100] flex items-center justify-center overflow-hidden border-t-2 border-b-2 border-gray-700 border-opacity-55">
      {/* Marquee Carousel */}
      <Marquee velocity={20} direction="rtl" pauseOnHover={isPaused}>
        {repeatedStories.map((story, index) => (
          <div
            key={index}
            className="group flex items-center justify-center w-44 h-44 mt-[6px] cursor-pointer bg-white border-2 border-gray-700 border-opacity-35 shadow-md shrink-0 px-4 py-4 hover:border-opacity-75 hover:rounded-2xl transition-all"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onClick={() => setSelectedVideo(story.video)} // Open video on click
          >
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-blue-300 group-hover:scale-105 transform transition-all">
              <video className="w-full h-full object-cover" muted loop>
                <source src={story.video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50">
                <img src={playIcon} alt="Play" className="w-8 h-8" />
              </div>
            </div>
          </div>
        ))}
      </Marquee>

      {/* Full-Screen Video Overlay */}
      {selectedVideo && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-[200] transition-opacity duration-300"
          onClick={closeVideo}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on video
            />
            <button
              className="absolute top-5 right-5 bg-white text-black p-2 min-w-[44px] rounded-full text-lg font-bold shadow-md hover:bg-gray-300"
              onClick={closeVideo}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollableSection;
