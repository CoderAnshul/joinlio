import React from "react";

const VideoContainer = () => {
  return (
    <div className="relative z-[50] w-full h-[400px] rounded-3xl flex items-center justify-center bg-black">
      <video
        className="w-full h-full object-cover"
        src="your-video-file.mp4"
        // controls
        autoPlay
        loop
        muted
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoContainer;
