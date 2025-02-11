import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import video from "../assets/video/dashboard.mp4";

gsap.registerPlugin(ScrollTrigger);

const VideoContainer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    ScrollTrigger.create({
      trigger: video,
      start: "top 80%", // Adjust trigger point as needed
      end: "bottom 20%",
      onEnter: () => video.play(),
      onLeave: () => video.pause(),
      onEnterBack: () => video.play(),
      onLeaveBack: () => video.pause(),
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative z-[50] w-full h-fit overflow-hidden rounded-3xl flex items-center justify-center bg-black">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={video}
        muted
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoContainer;
