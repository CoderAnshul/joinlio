import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBlog } from '../store/slices/blog'; // Adjust path to your blogSlice
import { fetchSubhubByHub } from '../store/slices/subhub'; // Adjust path to your subhubSlice
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    // Fetch subhubs when component mounts
    useEffect(() => {
        if (hubId) {
            dispatch(fetchSubhubByHub(hubId));
        }
    }, [dispatch, hubId]);

    useEffect(() => {
        if (blogError) {
            toast.error(blogError.message || 'An error occurred while creating the blog');
        }
    }, [blogError]);

    useEffect(() => {
        if (subhubError) {
            toast.error(subhubError.message || 'Failed to load subhubs');
        }
    }, [subhubError]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({ ...prev, coverImage: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const blogData = {
                title: formData.title,
                content: formData.content,
                cover_image: formData.coverImage,
                hub_id: hubId,
                sub_hub_id: formData.subHubId,
            };
            await dispatch(createBlog(blogData)).unwrap();
            toast.success('Blog created successfully!');
            onClose(); // Close popup on success
        } catch (error) {
            toast.error('Blog creation failed');
            console.error('Blog creation failed:', error);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <ToastContainer position="top-right" autoClose={3000} />
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
                        Blog creation is currently unavailable. This feature will be enabled after Joinlio officially launches.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder="Enter blog title"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Sub Hub</label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                        {subhubLoading && <p className="text-sm text-gray-500 mt-1">Loading subhubs...</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Cover Image</label>
                        <div className="flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-40 mb-2 relative">
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
                                <span className="ml-2 text-sm text-gray-500">Upload Cover Image</span>
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
                                className="shadow-inner appearance-none border-none rounded-b-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-64"
                                name="content"
                                value={formData.content}
                                onChange={handleInputChange}
                                placeholder="Start writing your blog post..."
                                required
                            />
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <button
                            type="button"
                            className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 transition-all"
                            onClick={onClose}
                        >
                            Save Draft
                        </button>
                        <button
                            type="submit"
                            className="bg-textColor text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-all"
                            disabled={blogLoading}
                        >
                            {blogLoading ? 'Publishing...' : 'Publish'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BlogPopup;