
import React, { useState, useRef, useEffect } from 'react';
import blog from "../../assets/images/blog.png";
import community from "../../assets/images/community.png";
import trip from "../../assets/images/trip.png";
import group from "../../assets/images/group.png";

import { X, Upload, Play, Pause, VolumeX, Volume2, Hash, Users, Eye, Clock, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const buttonConfig = {
  travel: [
    { label: "Create Blog", image: blog },
    { label: "Create Groups", image: group },
    { label: "Create your trips", image: trip },
    { label: "Glimpse", image: trip }
  ],
  media: [
    { label: "Create Blog", image: blog },
    { label: "Create Project", image: community },
    { label: "Create Groups", image: group },
    { label: "Glimpse", image: trip }
  ],
  entrepreneur: [
    { label: "Create Blog", image: blog },
    { label: "Create Groups", image: group },
    { label: "Create Project", image: community },
    { label: "Glimpse", image: trip }
  ]
};


// Blog Popup with Rich Text Editor
const BlogPopup = ({ onClose }) => {
useEffect(() => {
  const originalBodyStyle = window.getComputedStyle(document.body).overflow;
  const originalHtmlStyle = window.getComputedStyle(document.documentElement).overflow;
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
  const preventTouchScroll = (e) => {
    if (e.target.closest('.modal-content')) return;
    e.preventDefault();
  };
  document.addEventListener('touchmove', preventTouchScroll, { passive: false });
  return () => {
    document.body.style.overflow = originalBodyStyle;
    document.documentElement.style.overflow = originalHtmlStyle;
    document.removeEventListener('touchmove', preventTouchScroll);
  };
}, []);
  return (
    <>
      <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100000]' onClick={onClose}>
      <div className="bg-white p-6 rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-xl m-4" onClick={(e) => e.stopPropagation()}>
      <div className="flex justify-between items-center mb-4">
        
        <h3 className="text-2xl font-bold gradient-text-three">Create Blog</h3>
        <button className="text-gray-500 hover:text-gray-800 p-2" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div className="mb-6 bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500 mr-3">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <p className="text-amber-800 text-sm">
          Blog creation is currently unavailable. This feature will be enabled after Joinlio officially launches.
        </p>
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
        <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          type="text" 
          placeholder="Enter blog title"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Cover Image
        </label>
        <div className="flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-40 mb-2 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            <span className="ml-2 text-sm text-gray-500">Upload Cover Image</span>
          </div>
          <input type="file" className="opacity-0 absolute inset-0 w-full h-full cursor-pointer" />
        </div>
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Content
        </label>
        <div className="border rounded-lg mb-2">
          <div className="flex bg-gray-100 border-b p-2 gap-2">
            <button className="p-1 hover:bg-gray-200 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 7V4h16v3"></path><path d="M9 20h6"></path><path d="M12 4v16"></path>
              </svg>
            </button>
            <button className="p-1 hover:bg-gray-200 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 11h16"></path>
              </svg>
            </button>
            <button className="p-1 hover:bg-gray-200 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </button>
            <button className="p-1 hover:bg-gray-200 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path>
              </svg>
            </button>
            <button className="p-1 hover:bg-gray-200 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </button>
          </div>
          <textarea 
            className="shadow-inner appearance-none border-none rounded-b-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-64" 
            placeholder="Start writing your blog post..."
          />
        </div>
      </div>
      
      <div className="flex justify-between">
        <button 
          className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 transition-all"
          onClick={onClose}
        >
          Save Draft
        </button>
        <button 
          className="bg-textColor text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-all"
          onClick={onClose}
        >
          Publish
        </button>
      </div>
    </div>
    </div>
    </>
  );
};

// Group Popup with Member Management
const GroupPopup = ({ onClose }) => {
  useEffect(() => {
  // Prevent background scroll when modal opens
  document.body.style.overflow = 'hidden';
  
  // Restore scroll when modal closes
  return () => {
    document.body.style.overflow = 'unset';
  };
}, []);
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50' onClick={onClose}>
<div className="bg-white p-6 rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-xl m-4" onClick={(e) => e.stopPropagation()}>     
          <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold gradient-text-three">Create Group</h3>
        <button className="text-gray-500 hover:text-gray-800 p-2" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div className="mb-6 bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500 mr-3">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <p className="text-amber-800 text-sm">
          Group creation is currently unavailable. This feature will be enabled after Joinlio officially launches.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Group Name
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="text" 
            placeholder="Enter group name"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Privacy
          </label>
          <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option>Public</option>
            <option>Private</option>
            <option>Invite Only</option>
          </select>
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Group Cover Image
        </label>
        <div className="flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-40 mb-2 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            <span className="ml-2 text-sm text-gray-500">Upload Group Image</span>
          </div>
          <input type="file" className="opacity-0 absolute inset-0 w-full h-full cursor-pointer" />
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Description
        </label>
        <textarea 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24" 
          placeholder="Describe your group"
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Add Members
        </label>
        <div className="flex items-center mb-2">
          <input 
            className="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="text" 
            placeholder="Enter email address"
          />
          <button className="bg-blue-500 text-white py-2 px-4 rounded-r hover:bg-blue-600">
            Add
          </button>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg max-h-32 overflow-y-auto">
          <div className="flex items-center justify-between p-2 bg-white rounded mb-2 shadow-sm">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-2">J</div>
              <span>john.doe@example.com</span>
            </div>
            <button className="text-red-500 hover:text-red-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-between p-2 bg-white rounded shadow-sm">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-2">S</div>
              <span>sarah.smith@example.com</span>
            </div>
            <button className="text-red-500 hover:text-red-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <button 
          className="bg-textColor text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-all"
          onClick={onClose}
        >
          Create Group
        </button>
      </div>
    </div>
    </div>
  );
};

const GlimpseUploadModal = ({ onClose }) => {
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [videoDuration, setVideoDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [uploadType, setUploadType] = useState('glimpse'); // 'glimpse' or 'youtube'
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    hashtags: '',
    collaborators: '',
    category: 'Travel',
    privacy: 'Public'
  });
  const [youtubeData, setYoutubeData] = useState({
    title: '',
    description: '',
    tags: '',
    category: 'Entertainment',
    privacy: 'Public',
    thumbnail: null
  });
  const [dragActive, setDragActive] = useState(false);
  
  const videoRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    // Prevent background scroll
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
      // Cleanup video URL
      if (videoPreview) {
        URL.revokeObjectURL(videoPreview);
      }
    };
  }, [videoPreview]);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleVideoUpload(e.dataTransfer.files[0]);
    }
  };

  const handleVideoUpload = (file) => {
    if (file && file.type.startsWith('video/')) {
      setUploadedVideo(file);
      const url = URL.createObjectURL(file);
      setVideoPreview(url);
      
      // Create a temporary video element to get duration
      const tempVideo = document.createElement('video');
      tempVideo.src = url;
      tempVideo.onloadedmetadata = () => {
        const duration = tempVideo.duration;
        setVideoDuration(duration);
        
        // Determine upload type based on duration
        if (duration > 60) {
          setUploadType('youtube');
        } else {
          setUploadType('glimpse');
        }
      };
    } else {
      alert('Please upload a valid video file');
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleVideoUpload(e.target.files[0]);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleYoutubeInputChange = (e) => {
    const { name, value } = e.target;
    setYoutubeData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!uploadedVideo) {
      alert('Please upload a video first');
      return;
    }
    
    if (uploadType === 'glimpse') {
      console.log('Glimpse Data:', formData);
      console.log('Video File:', uploadedVideo);
      alert('Glimpse uploaded successfully!');
    } else {
      console.log('YouTube Data:', youtubeData);
      console.log('Video File:', uploadedVideo);
      alert('Video uploaded to YouTube successfully!');
    }
    
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[100000] p-4">
      <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200" style={{ background: '#00abff' }}>
          <div className="text-white">
            <h2 className="text-2xl font-bold">
              {uploadType === 'glimpse' ? 'Create Glimpse' : 'Upload to YouTube'}
            </h2>
            <p className="text-blue-100 text-sm">
              {uploadType === 'glimpse' 
                ? 'Share your moment with the world' 
                : 'Your video is longer than 60 seconds - uploading to YouTube'
              }
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors text-white"
          >
            <X size={24} />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="p-6">
            {/* Video Upload Section - Always at the top */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center" style={{ color: '#00abff' }}>
                <Upload className="mr-2" size={20} />
                Upload Video
              </h3>
              
              {!videoPreview ? (
                <div
                  className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                    dragActive 
                      ? 'bg-blue-50' 
                      : 'border-gray-300 hover:border-blue-400'
                  }`}
                  style={{ borderColor: dragActive ? '#00abff' : undefined }}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <div className="space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center text-white" style={{ background: '#00abff' }}>
                      <Upload size={32} />
                    </div>
                    
                    <div>
                      <p className="text-lg font-medium text-gray-700">
                        Drag & drop your video here
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        or click to browse files
                      </p>
                    </div>
                    
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="px-6 py-3 text-white rounded-lg hover:opacity-90 transition-all font-medium"
                      style={{ background: '#00abff' }}
                    >
                      Choose Video File
                    </button>
                    
                    <p className="text-xs text-gray-400">
                      Supports MP4, WebM, AVI (Max 100MB)
                    </p>
                  </div>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="video/*"
                    onChange={handleFileInput}
                    className="hidden"
                  />
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="relative bg-black rounded-xl overflow-hidden">
                    <video
                      ref={videoRef}
                      src={videoPreview}
                      className="w-full h-64 object-cover"
                      muted={isMuted}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                    />
                    
                    {/* Video Controls */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <div className="flex gap-4">
                        <button
                          onClick={togglePlayPause}
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        >
                          {isPlaying ? <Pause size={24} className="text-white" /> : <Play size={24} className="text-white" />}
                        </button>
                        
                        <button
                          onClick={toggleMute}
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        >
                          {isMuted ? <VolumeX size={24} className="text-white" /> : <Volume2 size={24} className="text-white" />}
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <p className="text-sm text-gray-600">
                        {uploadedVideo?.name}
                      </p>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock size={16} style={{ color: '#00abff' }} />
                        <span style={{ color: videoDuration > 60 ? '#f59e0b' : '#00abff' }}>
                          {formatDuration(videoDuration)}
                          {videoDuration > 60 && ' (YouTube Upload)'}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setUploadedVideo(null);
                        setVideoPreview(null);
                        setIsPlaying(false);
                        setVideoDuration(0);
                        setUploadType('glimpse');
                      }}
                      className="text-red-500 hover:text-red-700 text-sm font-medium"
                    >
                      Remove Video
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Form Section */}
            {videoPreview && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {uploadType === 'glimpse' ? (
                  // Glimpse Form
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full" style={{ background: '#00abff' }}></div>
                      <h3 className="text-lg font-semibold" style={{ color: '#00abff' }}>Glimpse Details</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Title *
                          </label>
                          <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                            style={{ '--tw-ring-color': '#00abff' }}
                            placeholder="Give your glimpse a catchy title..."
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Description
                          </label>
                          <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent resize-none"
                            style={{ '--tw-ring-color': '#00abff' }}
                            placeholder="Tell viewers what this glimpse is about..."
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                            <Hash size={16} className="mr-1" />
                            Hashtags
                          </label>
                          <input
                            type="text"
                            name="hashtags"
                            value={formData.hashtags}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                            style={{ '--tw-ring-color': '#00abff' }}
                            placeholder="#travel #adventure"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                            <Users size={16} className="mr-1" />
                            Collaborators
                          </label>
                          <input
                            type="text"
                            name="collaborators"
                            value={formData.collaborators}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                            style={{ '--tw-ring-color': '#00abff' }}
                            placeholder="@username1, @username2"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Category
                        </label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                          style={{ '--tw-ring-color': '#00abff' }}
                        >
                          <option value="Travel">Travel</option>
                          <option value="Food">Food</option>
                          <option value="Entertainment">Entertainment</option>
                          <option value="Education">Education</option>
                          <option value="Sports">Sports</option>
                          <option value="Art">Art</option>
                          <option value="Music">Music</option>
                          <option value="Technology">Technology</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                          <Eye size={16} className="mr-1" />
                          Privacy
                        </label>
                        <select
                          name="privacy"
                          value={formData.privacy}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                          style={{ '--tw-ring-color': '#00abff' }}
                        >
                          <option value="Public">Public</option>
                          <option value="Private">Private</option>
                          <option value="Friends">Friends Only</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ) : (
                  // YouTube Form
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Youtube size={20} className="text-red-600" />
                      <h3 className="text-lg font-semibold text-red-600">YouTube Upload Details</h3>
                    </div>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-yellow-600" />
                        <p className="text-sm text-yellow-800">
                          Your video is <strong>{formatDuration(videoDuration)}</strong> long. Videos longer than 60 seconds will be uploaded to YouTube.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Video Title *
                          </label>
                          <input
                            type="text"
                            name="title"
                            value={youtubeData.title}
                            onChange={handleYoutubeInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            placeholder="Enter video title..."
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Description *
                          </label>
                          <textarea
                            name="description"
                            value={youtubeData.description}
                            onChange={handleYoutubeInputChange}
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                            placeholder="Describe your video content..."
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Tags
                          </label>
                          <input
                            type="text"
                            name="tags"
                            value={youtubeData.tags}
                            onChange={handleYoutubeInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            placeholder="tag1, tag2, tag3"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Category *
                          </label>
                          <select
                            name="category"
                            value={youtubeData.category}
                            onChange={handleYoutubeInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            required
                          >
                            <option value="Entertainment">Entertainment</option>
                            <option value="Education">Education</option>
                            <option value="Music">Music</option>
                            <option value="Sports">Sports</option>
                            <option value="Travel">Travel & Events</option>
                            <option value="Gaming">Gaming</option>
                            <option value="Technology">Science & Technology</option>
                            <option value="News">News & Politics</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Privacy *
                          </label>
                          <select
                            name="privacy"
                            value={youtubeData.privacy}
                            onChange={handleYoutubeInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            required
                          >
                            <option value="Public">Public</option>
                            <option value="Unlisted">Unlisted</option>
                            <option value="Private">Private</option>
                          </select>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <h4 className="font-medium text-blue-900 mb-2">YouTube Requirements:</h4>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Title must be descriptive (required)</li>
                            <li>• Description helps with discoverability (required)</li>
                            <li>• Choose appropriate category</li>
                            <li>• Tags improve searchability</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Submit Buttons */}
                <div className="lg:col-span-2 flex gap-4 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <Link className='flex-1' to="/glimpse"><button
                    type="button"
                    // onClick={handleSubmit}
                    className="flex-1 px-6 py-3 text-white rounded-lg hover:opacity-90 transition-all font-medium"
                    style={{ 
                      background: uploadType === 'glimpse' ? '#00abff' : '#dc2626' 
                    }}
                  >
                    {uploadType === 'glimpse' ? 'Upload Glimpse' : 'Upload to YouTube'}
                  </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Trip Popup with Itinerary Planning
const TripPopup = ({ onClose }) => {
  useEffect(() => {
  // Prevent background scroll when modal opens
  document.body.style.overflow = 'hidden';
  
  // Restore scroll when modal closes
  return () => {
    document.body.style.overflow = 'unset';
  };
}, []);
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50' onClick={onClose}>
<div className="bg-white p-6 rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-xl m-4" onClick={(e) => e.stopPropagation()}>     
          <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold gradient-text-three">Create Trip</h3>
        <button className="text-gray-500 hover:text-gray-800 p-2" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div className="mb-6 bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500 mr-3">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <p className="text-amber-800 text-sm">
          Trip creation is currently unavailable. This feature will be enabled after Joinlio officially launches.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Trip Name
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="text" 
            placeholder="Enter trip name"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Destination
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="text" 
            placeholder="Where are you going?"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Start Date
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="date"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            End Date
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="date"
          />
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Trip Cover Image
        </label>
        <div className="flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-40 mb-2 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            <span className="ml-2 text-sm text-gray-500">Upload Trip Image</span>
          </div>
          <input type="file" className="opacity-0 absolute inset-0 w-full h-full cursor-pointer" />
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2 flex justify-between">
          <span>Itinerary</span>
          <button className="text-blue-500 text-xs flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Add Day
          </button>
        </label>
        <div className="border rounded-lg overflow-hidden">
          <div className="bg-gray-50 p-3 border-b">
            <div className="font-bold">Day 1</div>
          </div>
          <div className="p-3">
            <div className="mb-2">
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2" 
                type="text" 
                placeholder="Activity name"
              />
              <div className="flex gap-2">
                <div className="w-1/2">
                  <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    type="time" 
                  />
                </div>
                <div className="w-1/2">
                  <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    type="text" 
                    placeholder="Location" 
                  />
                </div>
              </div>
            </div>
            <button className="text-blue-500 text-xs flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              Add Activity
            </button>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Travel Partners
        </label>
        <div className="flex items-center mb-2">
          <input 
            className="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type="text" 
            placeholder="Enter email address"
          />
          <button className="bg-blue-500 text-white py-2 px-4 rounded-r hover:bg-blue-600">
            Invite
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
            alex@example.com
            <button className="ml-2 text-blue-500 hover:text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
            maria@example.com
            <button className="ml-2 text-blue-500 hover:text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <button 
          className="bg-textColor text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-all"
          onClick={onClose}
        >
          Create Trip
        </button>
      </div>
    </div>
    </div>
  );
};

// Project Popup with Tasks and Milestones
const ProjectPopup = ({ onClose }) => {
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    partner: '',
    deadline: '',
    collaborators: '',
    image: null
  });

  useEffect(() => {
  // Prevent background scroll when modal opens
  document.body.style.overflow = 'hidden';
  
  // Restore scroll when modal closes
  return () => {
    document.body.style.overflow = 'unset';
  };
}, []);

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50' onClick={onClose}>
<div className="bg-white p-6 rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-xl m-4" onClick={(e) => e.stopPropagation()}>   
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-screen overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Create New Project</h2>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <div className="mb-6 bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500 mr-3">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <p className="text-amber-800 text-sm">
          Project creation is currently unavailable. This feature will be enabled after Joinlio officially launches.
        </p>
      </div>
      
      <form >
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Project Title</label>
          <input 
            type="text" 
            name="title"
            value={newProject.title}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Partner/Organization</label>
          <input 
            type="text" 
            name="partner"
            value={newProject.partner}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Project Deadline</label>
          <input 
            type="date" 
            name="deadline"
            value={newProject.deadline}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Collaborators (comma separated)</label>
          <input 
            type="text" 
            name="collaborators"
            value={newProject.collaborators}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe, Jane Smith"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Description</label>
          <textarea 
            name="description"
            value={newProject.description}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Project Image</label>
          <div className="flex items-center">
            <input 
              type="file" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept="image/*"
            />
            {newProject.image && (
              <div className="ml-4">
                <img 
                  src={URL.createObjectURL(newProject.image)} 
                  alt="Project preview" 
                  className="h-16 w-16 object-cover rounded" 
                />
              </div>
            )}
          </div>
        </div>
        
        <div className="flex justify-end">
          <button 
            type="button" 
            onClick={() => setShowModal(false)}
            className="px-4 py-2 mr-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button 
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Create Project
          </button>
        </div>
      </form>
    </div>
  </div>
    </div>
  );
}


const CreateSection = ({ category }) => {
  const buttons = buttonConfig[category] || [];
  const [activePopup, setActivePopup] = useState(null);
   const [newProject, setNewProject] = useState({
      title: '',
      description: '',
      partner: '',
      deadline: '',
      collaborators: '',
      image: null
    });

  const handleButtonClick = (label) => {
    // Set the active popup based on the button label
    setActivePopup(label);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  return (
    <div className="w-full relative z-[100]">
      <div className="py-12 pt-2 my-5 mx-auto flex flex-col md:flex-row justify-between gap-5">
        <div className="flex max-sm:flex-col flex-wrap gap-6 p-4 border-2 w-full max-w-[1200px] border-gray-700 border-opacity-15 bg-[#EEEEEE]/40 backdrop-blur-xl rounded-2xl mx-auto">
          {buttons.map((btn, index) => (
            <div
              key={index}
              className="flex h-32 w-full flex-1 relative justify-between overflow-hidden items-center bg-white group hover:bg-textColor hover:scale-[0.95] cursor-pointer active:scale-90 transition-all rounded-2xl shadow-md p-4"
              onClick={() => handleButtonClick(btn.label)}
            >
              <h2 className="text-2xl sm:text-3xl md:text-xl lg:text-2xl leading-6 text-start gradient-text-three uppercase font-bold">
                {btn.label}
              </h2>
              <img className="h-20 mb-3" src={btn.image} alt={btn.label} />
            </div>
          ))}
        </div>
      </div>

      {/* Render the appropriate popup based on activePopup state */}
      {activePopup === "Create Blog" && <BlogPopup onClose={closePopup} />}
      {activePopup === "Create Groups" && <GroupPopup onClose={closePopup} />}
      {activePopup === "Create your trips" && <TripPopup onClose={closePopup} />}
      {activePopup === "Create Project" && <ProjectPopup onClose={closePopup} />}
      {activePopup === "Glimpse" && <GlimpseUploadModal onClose={closePopup} />}
    </div>
  );
};

export default CreateSection;
