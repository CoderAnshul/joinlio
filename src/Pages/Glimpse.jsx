import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Play, X, Maximize2, Loader2, AlertCircle } from 'lucide-react';
import { fetchGlimpses } from '../store/slices/glimpse'; // Adjust path as needed

const VideoGallery = () => {
  const dispatch = useDispatch();
  const { data: glimpsesData, loading, error } = useSelector(state => state.glimpse);
  console.log("Glimpsesdcv Data:", glimpsesData);
  
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showVideoInfo, setShowVideoInfo] = useState(true);
  const videoRefs = useRef([]);
  const hideTimeoutRef = useRef(null);

  const hubData = {
    name: "Videos",
    heading: "Explore Amazing Moments",
    subDescription: "Dive into our collection of stunning videos from around the world"
  };

  // Fetch videos on component mount
  useEffect(() => {
    dispatch(fetchGlimpses());
  }, [dispatch]);

  // Transform API data to match component structure
  const videos = React.useMemo(() => {
    console.log("Glimpses Data:", glimpsesData);
    if (!glimpsesData) return [];
    
    return glimpsesData?.map((video, index) => ({
      id: video._id || video.id || index,
      src: video.url || video.videoUrl || video.src || video?.video_file,
      thumbnail: video.thumbnail || video.thumbnailUrl || `https://via.placeholder.com/400x600/1a1a1a/ffffff?text=Video+${index + 1}`,
      title: video.title || video.name || `Video ${index + 1}`,
      duration: video.duration || "0:00",
      createdAt: video.createdAt,
      ...video // Include any additional fields from API
    }));
  }, [glimpsesData]);

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
  }, [videos]);

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
    
    // Set new timeout to hide after 1 second
    hideTimeoutRef.current = setTimeout(() => {
      setShowVideoInfo(false);
    }, 1000);
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

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-[#00abff] animate-spin mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading videos...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Videos</h2>
          <p className="text-gray-600 mb-4">
            {typeof error === 'string' ? error : error.message || 'Failed to load videos'}
          </p>
          <button 
            onClick={() => dispatch(fetchGlimpses())}
            className="bg-[#00abff] hover:bg-[#0088cc] text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

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
          
          {/* Video count */}
          {videos.length > 0 && (
            <div className="mb-8">
              <span className="bg-[#00abff]/10 text-[#00abff] px-4 py-2 rounded-full text-sm font-medium">
                {videos.length} video{videos.length !== 1 ? 's' : ''} available
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Video Grid */}
      <div className="container mx-auto px-4 pb-16">
        {videos.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🎬</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Videos Found</h3>
            <p className="text-gray-500">Upload some videos to get started!</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-6">
            {videos.map((video, index) => (
              <VideoCard key={video.id} video={video} index={index} />
            ))}
          </div>
        )}
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
            onMouseLeave={() => {}}
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
              <div className="flex items-center gap-4 text-white/90 drop-shadow-md">
                <span>Duration: {selectedVideo.duration}</span>
                {selectedVideo.createdAt && (
                  <span>•</span>
                )}
                {selectedVideo.createdAt && (
                  <span>Uploaded: {new Date(selectedVideo.createdAt).toLocaleDateString()}</span>
                )}
              </div>
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