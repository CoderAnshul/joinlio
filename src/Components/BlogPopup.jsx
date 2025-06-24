import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBlog } from '../store/slices/blog'; // Adjust path to your blogSlice
import { fetchSubhubByHub } from '../store/slices/subhub'; // Adjust path to your subhubSlice
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Success Modal Component
const SuccessModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[60]">
            <div className="bg-white p-8 rounded-3xl max-w-md w-full mx-4 text-center shadow-2xl transform transition-all">
                {/* Success Icon */}
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                        className="w-10 h-10 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>
                
                {/* Success Message */}
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Blog Created Successfully! 🎉
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    Your blog post has been submitted and will be published soon as admin approves it. 
                    You'll be notified once it goes live!
                </p>
                
                {/* Action Buttons */}
                <div className="flex gap-3 justify-center">
                    <button
                        onClick={onClose}
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105"
                    >
                        Awesome!
                    </button>
                </div>
            </div>
        </div>
    );
};

const BlogPopup = ({ onClose, hubId }) => {
    const dispatch = useDispatch();
    const { loading: blogLoading, error: blogError, blog } = useSelector((state) => state.blog);
    const { data: subhubs, loading: subhubLoading, error: subhubError } = useSelector((state) => state.subhub);

    const [formData, setFormData] = useState({
        title: '',
        content: '',
        coverImage: null,
        subHubId: '',
    });

    const [showSuccessModal, setShowSuccessModal] = useState(false);

    // Fetch subhubs when component mounts
    useEffect(() => {
        if (hubId) {
            dispatch(fetchSubhubByHub(hubId));
        }
    }, [dispatch, hubId]);

    // Enhanced error handling with better toast messages
    useEffect(() => {
        if (blogError) {
            const errorMessage = blogError?.message || blogError?.data?.message || 'Failed to create blog post';
            toast.error(errorMessage, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                className: "toast-error",
            });
        }
    }, [blogError]);

    useEffect(() => {
        if (subhubError) {
            const errorMessage = subhubError?.message || 'Failed to load sub-hubs';
            toast.error(errorMessage, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    }, [subhubError]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file size (limit to 5MB)
            if (file.size > 5 * 1024 * 1024) {
                toast.warning('Image size should be less than 5MB', {
                    position: "top-right",
                    autoClose: 3000,
                });
                return;
            }
            
            // Validate file type
            if (!file.type.startsWith('image/')) {
                toast.warning('Please select a valid image file', {
                    position: "top-right",
                    autoClose: 3000,
                });
                return;
            }
            
            setFormData((prev) => ({ ...prev, coverImage: file }));
            toast.success('Cover image selected successfully!', {
                position: "top-right",
                autoClose: 2000,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Form validation
        if (!formData.title.trim()) {
            toast.warning('Please enter a blog title', {
                position: "top-right",
                autoClose: 3000,
            });
            return;
        }
        
        if (!formData.content.trim()) {
            toast.warning('Please add some content to your blog', {
                position: "top-right",
                autoClose: 3000,
            });
            return;
        }
        
        if (!formData.subHubId) {
            toast.warning('Please select a sub-hub', {
                position: "top-right",
                autoClose: 3000,
            });
            return;
        }

        try {
            // Show loading toast
            const loadingToast = toast.loading('Creating your blog post...', {
                position: "top-right",
            });

            const blogData = {
                title: formData.title.trim(),
                content: formData.content.trim(),
                cover_image: formData.coverImage,
                hub_id: hubId,
                sub_hub_id: formData.subHubId,
            };
            
            await dispatch(createBlog(blogData)).unwrap();
            
            // Dismiss loading toast
            toast.dismiss(loadingToast);
            
            // Show success toast
            toast.success('Blog submitted for review!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                className: "toast-success",
            });
            
            // Show success modal
            setShowSuccessModal(true);
            
        } catch (error) {
            console.error('Blog creation failed:', error);
            const errorMessage = error?.message || error?.data?.message || 'Failed to create blog post. Please try again.';
            toast.error(errorMessage, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    const handleSuccessModalClose = () => {
        setShowSuccessModal(false);
        onClose(); // Close the main popup
    };

    const handleSaveDraft = () => {
        // You can implement draft saving logic here
        toast.info('Draft saved locally!', {
            position: "top-right",
            autoClose: 2000,
        });
        onClose();
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <ToastContainer 
                    position="top-right" 
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <div
                    className="bg-white p-6 rounded-2xl w-full max-w-2xl h-[80vh] overflow-y-scroll shadow-xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-2xl font-bold gradient-text-three">Create Blog</h3>
                        <button className="text-gray-500 hover:text-gray-800 p-2" onClick={onClose}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                    <div className="mb-6 bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-amber-500 mr-3"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        <p className="text-amber-800 text-sm">
                            All blog posts require admin approval before publishing. You'll be notified once your post goes live!
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition-colors"
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                placeholder="Enter an engaging blog title..."
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Sub Hub</label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 transition-colors"
                                name="subHubId"
                                value={formData.subHubId}
                                onChange={handleInputChange}
                                required
                                disabled={subhubLoading}
                            >
                                <option value="">Select a sub hub</option>
                                {subhubs &&
                                    subhubs.map((subhub) => (
                                        <option key={subhub.id} value={subhub.id}>
                                            {subhub.name}
                                        </option>
                                    ))}
                            </select>
                            {subhubLoading && <p className="text-sm text-blue-500 mt-1">Loading subhubs...</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Cover Image (Optional)</label>
                            <div className="flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-40 mb-2 relative hover:bg-gray-50 transition-colors">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg
                                        className="w-12 h-12 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                        ></path>
                                    </svg>
                                    <span className="ml-2 text-sm text-gray-500">
                                        {formData.coverImage ? formData.coverImage.name : 'Upload Cover Image (Max 5MB)'}
                                    </span>
                                </div>
                                <input
                                    type="file"
                                    className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                                    onChange={handleFileChange}
                                    accept="image/*"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Content</label>
                            <div className="border rounded-lg mb-2">
                                <div className="flex bg-gray-100 border-b p-2 gap-2">
                                    <button type="button" className="p-1 hover:bg-gray-200 rounded">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M4 7V4h16v3"></path>
                                            <path d="M9 20h6"></path>
                                            <path d="M12 4v16"></path>
                                        </svg>
                                    </button>
                                    {/* Add other editor buttons as needed */}
                                </div>
                                <textarea
                                    className="shadow-inner appearance-none border-none rounded-b-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-64 resize-none"
                                    name="content"
                                    value={formData.content}
                                    onChange={handleInputChange}
                                    placeholder="Start writing your amazing blog post... Share your thoughts, experiences, and insights with the community!"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <button
                                type="button"
                                className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 transition-all"
                                onClick={handleSaveDraft}
                            >
                                Save Draft
                            </button>
                            <button
                                type="submit"
                                className="bg-textColor text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={blogLoading || subhubLoading}
                            >
                                {blogLoading ? 'Publishing...' : 'Submit for Review'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Success Modal */}
            <SuccessModal 
                isOpen={showSuccessModal} 
                onClose={handleSuccessModalClose} 
            />
        </>
    );
};

export default BlogPopup;