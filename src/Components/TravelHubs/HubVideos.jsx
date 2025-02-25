import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import videos for each category
import travelVideo from "../../assets/video/travel.mp4";
import mediaVideo from "../../assets/video/media.mp4";
import entrepreneurVideo from "../../assets/video/business.mp4";
import playIcon from "../../assets/images/play.png";
import pauseIcon from "../../assets/images/pause.png";

gsap.registerPlugin(ScrollTrigger);

const HubVideo = ({ category }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [showControls, setShowControls] = useState(true);

  // Map category to video source
  const getVideoSource = () => {
    switch (category) {
      case "travel":
        return travelVideo;
      case "media":
        return mediaVideo;
      case "entrepreneur":
        return entrepreneurVideo;
      default:
        return null;
    }
  };

  const videoSrc = getVideoSource();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoSrc) return;

    // Reset states when video source changes
    setIsPlaying(false);
    setIsLoaded(false);
    setError(null);
    setShowControls(true);

    const handleCanPlay = () => setIsLoaded(true);
    const handleError = (e) => {
      console.error("Video loading error:", e);
      setError("Failed to load video");
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);
    video.load();

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
    };
  }, [videoSrc]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
    setShowControls(false); // Hide button after playing
  };

  return (
    <div className="w-full space-y-4">
      <div className="w-auto max-w-xl">
        <h3 className="text-3xl relative font-semibold text-customBlue mb-8">
          User's Journey
        </h3>
      </div>

      <div 
        className="relative z-[50] w-full h-[80vh] overflow-hidden rounded-3xl flex items-center justify-center bg-black"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => isPlaying && setShowControls(false)}
      >
        {error ? (
          <div className="p-4 text-red-500">{error}</div>
        ) : (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={videoSrc}
            playsInline
            preload="auto"
            controls={true}
          />
        )}

        {showControls && (
          <button
            className="absolute top-1/2 left-1/2 -translate-x-1/2 bg-white  -translate-y-1/2 p-5 rounded-full shadow-md flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-110"
            onClick={togglePlayPause}
          >
            <img
              src={isPlaying ? pauseIcon : playIcon}
              alt={isPlaying ? "Pause" : "Play"}
              className="w-14 h-14 ml-1 transition-opacity duration-300 ease-in-out"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default HubVideo;