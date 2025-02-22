import React, { useState } from "react";
import Marquee from "react-marquee-slider";
import playIcon from "../assets/images/play.png";

// Top slider videos
import travelVideo from "../assets/video/travel.mp4";
import mediaVideo from "../assets/video/media.mp4";
import entrepreneurVideo from "../assets/video/business.mp4";

// Bottom story videos
import travelstory from "../assets/video/travelstory.mp4";
import mediastory from "../assets/video/mediastory.mp4";
import entrepreneurstory from "../assets/video/entreprenershipstory.mp4";

const StoriesSlider = ({ isSecondInstance = false }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Define different sets of videos based on instance
  const firstSetVideos = [
    { id: 1, video: travelVideo, title: "Travel" },
    { id: 2, video: mediaVideo, title: "Media" },
    { id: 3, video: entrepreneurVideo, title: "Business" }
  ];

  const secondSetVideos = [
    { id: 4, video: travelstory, title: "Travel Story" },
    { id: 5, video: mediastory, title: "Media Story" },
    { id: 6, video: entrepreneurstory, title: "Entrepreneurship Story" }
  ];

  // Choose which set of videos to use
  const videos = isSecondInstance ? secondSetVideos : firstSetVideos;
  const repeatedVideos = [...videos, ...videos, ...videos];

  const closeVideo = () => setSelectedVideo(null);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeVideo();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="w-full h-[194px] relative z-[100] flex items-center justify-center overflow-hidden border-t-2 border-b-2 border-gray-700 border-opacity-55">
      <Marquee velocity={20} direction="rtl" pauseOnHover={isPaused}>
        {repeatedVideos.map((story, index) => (
          <div
            key={`${story.id}-${index}`}
            className="group flex items-center justify-center w-44 h-44 mt-[6px] cursor-pointer bg-white border-2 border-gray-700 border-opacity-35 shadow-md shrink-0 px-4 py-4 hover:border-opacity-75 hover:rounded-2xl transition-all"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onClick={() => setSelectedVideo(story.video)}
          >
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-blue-300 group-hover:scale-105 transform transition-all">
              <video className="w-full h-full object-cover" muted loop>
                <source src={story.video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50">
                <img src={playIcon} alt="Play" className="w-8 h-8" />
              </div>
            </div>
            <p className="absolute bottom-2 text-sm font-medium text-gray-700">
              {story.title}
            </p>
          </div>
        ))}
      </Marquee>

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
              onClick={(e) => e.stopPropagation()}
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

export default StoriesSlider;