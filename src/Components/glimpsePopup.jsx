import React, { useState, useRef, useEffect } from 'react';
import { X, Upload, Play, Pause, VolumeX, Volume2, Hash, Users, Eye, Clock, Youtube } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadGlimpse, resetUploadState, resetGlimpseState } from '../store/slices/glimpse';
import { fetchSubhubByHub } from '../store/slices/subhub';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const GlimpseUploadModal = ({ onClose, hubId }) => {
  const [uploadedVideo, setUploadedVideo] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [videoDuration, setVideoDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [uploadType, setUploadType] = useState('glimpse');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    hashtags: '',
    collaborators: '',
    subHubId: '',
    status: 'Public'
  });
  const [youtubeData, setYoutubeData] = useState({
    title: '',
    description: '',
    tags: '',
    category: 'Entertainment',
    status: 'Public',
    thumbnail: null
  });
  const [dragActive, setDragActive] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const dispatch = useDispatch();
  
  // Updated selectors to use new state structure
  const { 
    uploadLoading, 
    uploadError, 
    uploadData, 
    uploadSuccess 
  } = useSelector((state) => state.glimpse);
  
  const { 
    data: subhubs, 
    loading: subhubLoading, 
    error: subhubError 
  } = useSelector((state) => state.subhub);

  const videoRef = useRef(null);
  const fileInputRef = useRef(null);

  // Reset upload state when component mounts
  useEffect(() => {
    dispatch(resetUploadState());
  }, [dispatch]);

  // Fetch subhubs when component mounts
  useEffect(() => {
    if (hubId) {
      dispatch(fetchSubhubByHub(hubId));
    }
  }, [dispatch, hubId]);

  // Cleanup on unmount
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
      if (videoPreview) {
        URL.revokeObjectURL(videoPreview);
      }
      // Clean up upload state when component unmounts
      dispatch(resetUploadState());
    };
  }, [videoPreview, dispatch]);

  // Handle success/error states
  useEffect(() => {
    if (uploadError) {
      toast.error(uploadError.message || 'Failed to upload video');
    }
    if (subhubError) {
      toast.error(subhubError.message || 'Failed to load subhubs');
    }
    
    // Show success popup when upload is successful
    if (uploadSuccess && uploadData && !showSuccessPopup) {
      toast.success(`${uploadType === 'glimpse' ? 'Glimpse' : 'YouTube video'} uploaded successfully!`);
      setShowSuccessPopup(true);
    }
  }, [uploadError, subhubError, uploadSuccess, uploadData, uploadType, showSuccessPopup]);

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

      const tempVideo = document.createElement('video');
      tempVideo.src = url;
      tempVideo.onloadedmetadata = () => {
        const duration = tempVideo.duration;
        setVideoDuration(duration);
        setUploadType(duration > 60 ? 'youtube' : 'glimpse');
      };
    } else {
      toast.error('Please upload a valid video file');
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleVideoUpload(e.target.files[0]);
    }
  };

  const togglePlayPause = (e) => {
    e.preventDefault();
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleYoutubeInputChange = (e) => {
    const { name, value } = e.target;
    setYoutubeData((prev) => ({ ...prev, [name]: value }));
  };

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!uploadedVideo) {
      toast.error('Please upload a video first');
      return;
    }

    if (uploadType === 'glimpse' && (!formData.title || !formData.subHubId)) {
      toast.error('Title and Sub Hub are required for Glimpse upload');
      return;
    }

    if (uploadType === 'youtube' && (!youtubeData.title || !youtubeData.description)) {
      toast.error('Title and description are required for YouTube upload');
      return;
    }

    const data = new FormData();
    data.append('video_file', uploadedVideo);
    data.append('subhub_id', formData.subHubId);
    data.append('is_youtube_upload', uploadType === 'youtube' ? 1 : 0);

    if (uploadType === 'glimpse') {
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });
    } else {
      Object.entries(youtubeData).forEach(([key, value]) => {
        if (key !== 'thumbnail' || (key === 'thumbnail' && value)) {
          data.append(key, value);
        }
      });
    }

    try {
      await dispatch(uploadGlimpse(data)).unwrap();
    } catch (err) {
      // Error handling is managed by useEffect
    }
  };

  const resetFormData = () => {
    setUploadedVideo(null);
    setVideoPreview(null);
    setVideoDuration(0);
    setUploadType('glimpse');
    setIsPlaying(false);
    setIsMuted(false);
    setFormData({
      title: '',
      description: '',
      hashtags: '',
      collaborators: '',
      subHubId: '',
      status: 'Public'
    });
    setYoutubeData({
      title: '',
      description: '',
      tags: '',
      category: 'Entertainment',
      status: 'Public',
      thumbnail: null
    });
  };

  const handleCloseSuccessPopup = () => {
    setShowSuccessPopup(false);
    dispatch(resetUploadState()); // Reset upload state
    resetFormData(); // Reset form data
    onClose(); // Close modal
  };

  const handleModalClose = () => {
    dispatch(resetUploadState()); // Reset upload state
    resetFormData(); // Reset form data
    onClose(); // Close modal
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[100000] p-4">
      {showSuccessPopup ? (
        <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-green-600 mb-4">
              {uploadType === 'glimpse' ? 'Glimpse' : 'YouTube Video'} Uploaded!
              {uploadType === 'youtube' && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                  <p className="text-yellow-800 text-sm">
                    This video will be uploaded to YouTube. <br />
                    <span className="font-semibold">Note:</span> An admin will add your YouTube account for publishing if not already connected.
                  </p>
                </div>
              )}
            </h3>
            <p className="text-gray-600 mb-6">
              Your {uploadType === 'glimpse' ? 'Glimpse' : 'video'} has been successfully uploaded.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/glimpse">
                <button
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all font-medium"
                  onClick={handleCloseSuccessPopup}
                >
                  Explore Glimpse
                </button>
              </Link>
              <button
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-medium"
                onClick={handleCloseSuccessPopup}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl">
          <div className="flex justify-between items-center p-6 border-b border-gray-200" style={{ background: '#00abff' }}>
            <div className="text-white">
              <h2 className="text-2xl font-bold">
                {uploadType === 'glimpse' ? 'Create Glimpse' : 'Upload to YouTube'}
              </h2>
              <p className="text-blue-100 text-sm">
                {uploadType === 'glimpse'
                  ? 'Share your moment with the world'
                  : 'Your video is longer than 60 seconds - uploading to YouTube'}
              </p>
            </div>
            <button
              onClick={handleModalClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors text-white"
              disabled={uploadLoading}
            >
              <X size={24} />
            </button>
          </div>

          <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
            <div className="p-6">
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center" style={{ color: '#00abff' }}>
                  <Upload className="mr-2" size={20} />
                  Upload Video
                </h3>
                {!videoPreview ? (
                  <div
                    className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                      dragActive ? 'bg-blue-50' : 'border-gray-300 hover:border-blue-400'
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
                          {uploadLoading ? 'Uploading...' : 'Drag & drop your video here'}
                        </p>
                        {!uploadLoading && (
                          <p className="text-sm text-gray-500 mt-1">or click to browse files</p>
                        )}
                      </div>
                      {!uploadLoading && (
                        <>
                          <button
                            onClick={() => fileInputRef.current?.click()}
                            className="px-6 py-3 text-white rounded-lg hover:opacity-90 transition-all font-medium"
                            style={{ background: '#00abff' }}
                          >
                            Choose Video File
                          </button>
                          <p className="text-xs text-gray-400">Supports MP4, WebM, AVI (Max 100MB)</p>
                        </>
                      )}
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="video/*"
                      onChange={handleFileInput}
                      className="hidden"
                      disabled={uploadLoading}
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
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <div className="flex gap-4">
                          <button
                            onClick={togglePlayPause}
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                            disabled={uploadLoading}
                          >
                            {isPlaying ? <Pause size={24} className="text-white" /> : <Play size={24} className="text-white" />}
                          </button>
                          <button
                            onClick={toggleMute}
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                            disabled={uploadLoading}
                          >
                            {isMuted ? <VolumeX size={24} className="text-white" /> : <Volume2 size={24} className="text-white" />}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <p className="text-sm text-gray-600">{uploadedVideo?.name}</p>
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
                          if (videoPreview) {
                            URL.revokeObjectURL(videoPreview);
                          }
                          setUploadedVideo(null);
                          setVideoPreview(null);
                          setIsPlaying(false);
                          setVideoDuration(0);
                          setUploadType('glimpse');
                        }}
                        className="text-red-500 hover:text-red-700 text-sm font-medium"
                        disabled={uploadLoading}
                      >
                        Remove Video
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {videoPreview && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {uploadType === 'glimpse' ? (
                    <div className="lg:col-span-2 space-y-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full" style={{ background: '#00abff' }}></div>
                        <h3 className="text-lg font-semibold" style={{ color: '#00abff' }}>Glimpse Details</h3>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                            <input
                              type="text"
                              name="title"
                              value={formData.title}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                              style={{ '--tw-ring-color': '#00abff' }}
                              placeholder="Give your glimpse a catchy title..."
                              required
                              disabled={uploadLoading}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                            <textarea
                              name="description"
                              value={formData.description}
                              onChange={handleInputChange}
                              rows={3}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent resize-none"
                              style={{ '--tw-ring-color': '#00abff' }}
                              placeholder="Tell viewers what this glimpse is about..."
                              disabled={uploadLoading}
                            />
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Sub Hub *</label>
                            <select
                              name="subHubId"
                              value={formData.subHubId}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                              style={{ '--tw-ring-color': '#00abff' }}
                              required
                              disabled={uploadLoading || subhubLoading}
                            >
                              <option value="">Select a sub hub</option>
                              {subhubs?.map((subhub) => (
                                <option key={subhub.id} value={subhub.id}>
                                  {subhub.name}
                                </option>
                              ))}
                            </select>
                            {subhubLoading && <p className="text-sm text-gray-500 mt-1">Loading subhubs...</p>}
                          </div>
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
                              disabled={uploadLoading}
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
                              disabled={uploadLoading}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                            <Eye size={16} className="mr-1" />
                            Privacy
                          </label>
                          <select
                            name="status"
                            value={formData.status}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                            style={{ '--tw-ring-color': '#00abff' }}
                            disabled={uploadLoading}
                          >
                            <option value="Public">Public</option>
                            <option value="Private">Private</option>
                            <option value="Friends">Friends Only</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  ) : (
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
                            <label className="block text-sm font-medium text-gray-700 mb-2">Video Title *</label>
                            <input
                              type="text"
                              name="title"
                              value={youtubeData.title}
                              onChange={handleYoutubeInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                              placeholder="Enter video title..."
                              required
                              disabled={uploadLoading}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                            <textarea
                              name="description"
                              value={youtubeData.description}
                              onChange={handleYoutubeInputChange}
                              rows={4}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                              placeholder="Describe your video content..."
                              required
                              disabled={uploadLoading}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                            <input
                              type="text"
                              name="tags"
                              value={youtubeData.tags}
                              onChange={handleYoutubeInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                              placeholder="tag1, tag2, tag3"
                              disabled={uploadLoading}
                            />
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                            <select
                              name="category"
                              value={youtubeData.category}
                              onChange={handleYoutubeInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                              required
                              disabled={uploadLoading}
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
                            <label className="block text-sm font-medium text-gray-700 mb-2">Privacy *</label>
                            <select
                              name="status"
                              value={youtubeData.status}
                              onChange={handleYoutubeInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus  
                              focus:border-transparent"
                              required
                              disabled={uploadLoading}
                            >
                              <option value="Public">Public</option>
                              <option value="Unlisted">Unlisted</option>
                              <option value="Private">Private</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Thumbnail (optional)</label>
                            <input
                              type="file"
                              name="thumbnail"
                              accept="image/*"
                              onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                  setYoutubeData((prev) => ({
                                    ...prev,
                                    thumbnail: e.target.files[0]
                                  }));
                                }
                              }}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                              disabled={uploadLoading}
                            />
                            {youtubeData.thumbnail && (
                              <p className="text-sm text-gray-500 mt-2">
                                Selected thumbnail: {youtubeData.thumbnail.name}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        <p>
                          Note: YouTube uploads may take longer to process. Please be patient after submitting.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
              <div className="mt-8">
                <button
                  onClick={handleSubmit}
                  className={`w-full px-6 py-3 text-white rounded-lg transition-all font-medium ${
                    uploadLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
                  }`}
                  disabled={uploadLoading || !uploadedVideo}
                >
                  {uploadLoading ? 'Uploading...' : `Upload to ${uploadType === 'glimpse' ? 'Glimpse' : 'YouTube'}`}
                </button>
                <button
                  onClick={handleModalClose}
                  className="w-full mt-4 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-medium"
                  disabled={uploadLoading}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
          <div className="p-6 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              By uploading, you agree to our <Link to="/terms" className="text-blue-500 hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-blue-500 hover:underline">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GlimpseUploadModal;