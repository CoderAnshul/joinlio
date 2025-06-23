import React, { useState, useRef, useEffect } from 'react';
import { Play, X, Maximize2 } from 'lucide-react';

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showVideoInfo, setShowVideoInfo] = useState(true);
  const videoRefs = useRef([]);
  const hideTimeoutRef = useRef(null);
  
  // Sample video data - replace with your actual video uploads
  const videos = [
    {
      id: 1,
      src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      thumbnail: "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=Video+1",
      title: "Adventure in Mountains",
      duration: "2:30"
    },
    {
      id: 2,
      src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4", 
      thumbnail: "https://via.placeholder.com/400x600/2a2a2a/ffffff?text=Video+2",
      title: "Beach Sunset",
      duration: "1:45"
    },
    {
      id: 3,
      src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4",
      thumbnail: "https://via.placeholder.com/400x600/3a3a3a/ffffff?text=Video+3", 
      title: "City Lights",
      duration: "3:20"
    },
    {
      id: 4,
      src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      thumbnail: "https://via.placeholder.com/400x600/4a4a4a/ffffff?text=Video+4",
      title: "Forest Walk",
      duration: "2:15"
    },
    {
      id: 5,
      src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
      thumbnail: "https://via.placeholder.com/400x600/5a5a5a/ffffff?text=Video+5",
      title: "Ocean Waves",
      duration: "4:10"
    },
    {
      id: 6,
      src: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4",
      thumbnail: "https://via.placeholder.com/400x600/6a6a6a/ffffff?text=Video+6",
      title: "Desert Landscape",
      duration: "1:55"
    }
  ];

  const hubData = {
    name: "Videos",
    heading: "Explore Amazing Moments",
    subDescription: "Dive into our collection of stunning videos from around the world"
  };

  useEffect(() => {
    // Auto-play videos when they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Handle autoplay restrictions
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  const openFullscreen = (video) => {
    setSelectedVideo(video);
    setIsFullscreen(true);
    setShowVideoInfo(true);
    document.body.style.overflow = 'hidden';
    
    // Hide video info after 3 seconds
    hideTimeoutRef.current = setTimeout(() => {
      setShowVideoInfo(false);
    }, 3000);
  };

  const closeFullscreen = () => {
    setSelectedVideo(null);
    setIsFullscreen(false);
    setShowVideoInfo(true);
    document.body.style.overflow = 'unset';
    
    // Clear timeout if it exists
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  };

  const handleVideoHover = () => {
    setShowVideoInfo(true);
    
    // Clear existing timeout
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    
    // Set new timeout to hide after 3 seconds
    hideTimeoutRef.current = setTimeout(() => {
      setShowVideoInfo(false);
    }, 1000);
  };

  const handleVideoLeave = () => {
    // Keep the timeout running when mouse leaves
  };

  const VideoCard = ({ video, index }) => (
    <div className="relative group cursor-pointer overflow-hidden rounded-xl bg-white border-2 border-gray-100 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-[#00abff]">
      {/* Video Preview */}
      <div className="relative aspect-[9/16] overflow-hidden">
        <video
          ref={(el) => (videoRefs.current[index] = el)}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          preload="metadata"
          onError={(e) => {
            // Fallback to a working sample video
            e.target.src = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
          }}
        >
          <source src={video.src} type="video/mp4" />
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#00abff]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
              <Maximize2 className="w-8 h-8 text-[#00abff]" />
            </div>
          </div>
        </div>

        {/* Video Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-bold text-lg mb-1 truncate drop-shadow-lg">{video.title}</h3>
          <p className="text-sm text-gray-100 drop-shadow-md">{video.duration}</p>
        </div>

        {/* Duration Badge */}
        <div className="absolute top-3 right-3 bg-[#00abff] rounded-lg px-2 py-1">
          <span className="text-white text-xs font-medium">{video.duration}</span>
        </div>
      </div>

      {/* Click handler */}
      <div 
        className="absolute inset-0 z-10"
        onClick={() => openFullscreen(video)}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative z-[100]">
        <div className="flex relative z-[50] flex-col items-center justify-start pt-16 min-h-[calc(60vh-80px)] md:min-h-[calc(20vh-80px)] text-center px-4">
          <h1 className="text-6xl relative z-[50] max-sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl font-bold uppercase text-[#00abff]">
            {hubData?.name || "Videos"}
          </h1>
          <p className="pb-2 h-fit text-sm lg:text-lg max-w-5xl mb-10 text-gray-600">
            <h3 className="mt-4 mb-2 text-xl italic text-[#00abff]">{hubData.heading}</h3>
            {hubData.subDescription}
          </p>
        </div>
      </div>

      {/* Video Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-6">
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && selectedVideo && (
        <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeFullscreen}
            className="absolute top-6 right-6 z-[10000] bg-[#00abff] hover:bg-[#0088cc] rounded-full p-3 text-white transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Video Container */}
          <div 
            className="relative w-full h-full max-w-5xl max-h-[85vh] bg-black rounded-lg overflow-hidden shadow-2xl"
            onMouseEnter={handleVideoHover}
            onMouseLeave={handleVideoLeave}
          >
            <video
              className="w-full h-full object-contain bg-black"
              controls
              autoPlay
              playsInline
              controlsList="nodownload"
              style={{ 
                minHeight: '300px',
                maxHeight: '85vh'
              }}
            >
              <source src={selectedVideo.src} type="video/mp4" />
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Info Overlay */}
            <div className={`absolute top-0 left-0 right-0 bg-gradient-to-b from-[#000000]/95 via-[#000000]/60 to-transparent p-6 transition-all duration-500 ${
              showVideoInfo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-0'
            }`}>
              <h2 className="text-white text-2xl font-bold mb-2 drop-shadow-lg">{selectedVideo.title}</h2>
              <p className="text-white/90 drop-shadow-md">Duration: {selectedVideo.duration}</p>
            </div>
          </div>

          {/* Background Click to Close */}
          <div 
            className="absolute inset-0 -z-10"
            onClick={closeFullscreen}
          />
        </div>
      )}
    </div>
  );
};

export default VideoGallery;