import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Calendar, User, Eye } from "lucide-react";
import { fetchBlogsBySubHub } from "../store/slices/blog";

const SubHubPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { subHubId } = useParams();
  
  const { blog: blogData, loading, error } = useSelector((state) => state.blog);
  
  // Get subhub data from navigation state or use defaults
  const [subHubData, setSubHubData] = useState(() => {
    if (location.state?.subHubData) {
      return location.state.subHubData;
    }
    return {
      id: subHubId,
      name: "SubHub Name",
      title: "SubHub Title",
      description: "SubHub Description",
      icon: "🚀",
      image: null,
      created_at: new Date().toISOString(),
      member_count: 0
    };
  });

  useEffect(() => {
    if (subHubId) {
      dispatch(fetchBlogsBySubHub(subHubId));
      // If you have a subhub API, fetch subhub details here
      // dispatch(fetchSubHubDetails(subHubId));
    }
  }, [dispatch, subHubId]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  // Updated function to navigate to BlogDetail page
  const handleBlogClick = (blog) => {
    // Transform the blog data to match the structure expected by BlogDetail
    const transformedPost = {
      id: blog.id,
      title: blog.title,
      author: blog.user ? `${blog.user.f_name} ${blog.user.l_name || ''}`.trim() : 'Anonymous',
      date: formatDate(blog.created_at),
      readTime: "5 min read", // You can calculate this based on content length
      likes: blog.likes || 0,
      comments: blog.comments_count || 0,
      mainImage: blog.cover_image || "/api/placeholder/1200/600",
      authorImage: blog.user?.profile_image || "/api/placeholder/80/80",
      category: blog.category || subHubData.name || "General",
      content: blog.content ? parseContentForBlogDetail(blog.content) : [],
      relatedArticles: [],
      commentList: [],
      metaTitle: blog.title,
      metaDescription: blog.content ? truncateText(blog.content.replace(/<[^>]*>/g, ''), 160) : '',
      views: blog.views || 0
    };

    // Navigate to BlogDetail page with the transformed post data
    navigate(`/blog/${blog.slug}`, {
      state: { post: transformedPost }
    });
  };

  // Helper function to parse content for BlogDetail component
  const parseContentForBlogDetail = (content) => {
    if (!content) return [];
    
    // Simple content parsing - you can make this more sophisticated based on your content structure
    const paragraphs = content.split('\n\n').filter(p => p.trim());
    
    return paragraphs.map(paragraph => {
      // Check if it's a heading (starts with # or is wrapped in heading tags)
      if (paragraph.startsWith('#') || paragraph.match(/^<h[1-6]>/)) {
        return {
          type: "heading",
          content: paragraph.replace(/^#+\s*/, '').replace(/<\/?h[1-6]>/g, '')
        };
      }
      // Check if it's a quote (starts with > or is wrapped in blockquote)
      else if (paragraph.startsWith('>') || paragraph.match(/^<blockquote>/)) {
        return {
          type: "quote",
          content: paragraph.replace(/^>\s*/, '').replace(/<\/?blockquote>/g, '')
        };
      }
      // Default to paragraph
      else {
        return {
          type: "paragraph",
          content: paragraph
        };
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </button>
          </div>
        </div>
      </div>

      {/* SubHub Header Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* SubHub Image */}
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              {subHubData.image ? (
                <img
                  src={subHubData.image}
                  alt={subHubData.name || subHubData.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : subHubData.icon ? (
                <span className="text-3xl">{subHubData.icon}</span>
              ) : (
                (subHubData.name || subHubData.title).charAt(0).toUpperCase()
              )}
            </div>

            {/* SubHub Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {subHubData.name || subHubData.title}
              </h1>
              <p className="text-gray-600 text-lg mb-4">
                {subHubData.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Created {formatDate(subHubData.created_at)}
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {subHubData.member_count} members
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Blogs Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Blogs</h2>
          
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <p className="text-red-600">Error loading blogs: {error.message || error}</p>
            </div>
          ) : blogData && blogData.data && blogData.data.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogData.data.map((blog) => (
                <div
                  key={blog.id}
                  onClick={() => handleBlogClick(blog)}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
                >
                  {/* Blog Cover Image */}
                  {blog.cover_image && (
                    <div className="h-48 bg-gray-200 overflow-hidden">
                      <img
                        src={blog.cover_image}
                        alt={blog.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  {/* Blog Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {blog.title}
                    </h3>
                    
                    {blog.content && (
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {truncateText(blog.content.replace(/<[^>]*>/g, ''))}
                      </p>
                    )}
                    
                    {/* Blog Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{blog.user?.f_name || 'Anonymous'}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        {blog.views && (
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {blog.views}
                          </span>
                        )}
                        <span>{formatDate(blog.created_at)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-12 text-center">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No blogs yet</h3>
              <p className="text-gray-600">
                Be the first to share your thoughts and create a blog post in this subhub!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubHubPage;