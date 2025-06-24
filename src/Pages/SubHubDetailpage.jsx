import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Eye, 
  Heart, 
  MessageCircle, 
  Clock, 
  BookOpen,
  Share2,
  Bookmark,
  TrendingUp,
  Users,
  Search,
  Filter,
  Grid,
  List
} from "lucide-react";
import { fetchBlogsBySubHub } from "../store/slices/blog";

const SubHubPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { subHubId } = useParams();
  
  const { blog: blogData, loading, error } = useSelector((state) => state.blog);
  
  // UI State
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState("grid");
  const [filterCategory, setFilterCategory] = useState("all");
  
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
      member_count: 0,
      blog_count: 0,
      category: "Technology"
    };
  });

  useEffect(() => {
    if (subHubId) {
      dispatch(fetchBlogsBySubHub(subHubId));
    }
  }, [dispatch, subHubId]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatRelativeTime = (dateString) => {
    const now = new Date();
    const blogDate = new Date(dateString);
    const diffInHours = Math.floor((now - blogDate) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`;
    return formatDate(dateString);
  };

  const truncateText = (text, maxLength = 150) => {
    if (!text) return "";
    const cleanText = text.replace(/<[^>]*>/g, '');
    if (cleanText.length <= maxLength) return cleanText;
    return cleanText.substring(0, maxLength) + '...';
  };

  const calculateReadTime = (content) => {
    if (!content) return "3 min read";
    const wordsPerMinute = 200;
    const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  // Enhanced function to navigate to BlogDetail page

  const handleBlogClick = (blog) => {
  const transformedPost = {
    id: blog.id,
    slug: blog.slug,
    title: blog.title,
    author: blog.user ? `${blog.user.f_name} ${blog.user.l_name || ''}`.trim() : 'Anonymous',
    authorId: blog.user?.id,
    date: formatDate(blog.created_at),
    publishedAt: blog.created_at,
    readTime: calculateReadTime(blog.content),
    likes: blog.likes || 0,
    comments: blog.comments_count || 0,
    views: blog.views || 0,
    shares: blog.shares || 0,
    mainImage: blog.cover_image || "/api/placeholder/1200/600",
    authorImage: blog.user?.profile_image || "/api/placeholder/80/80",
    authorBio: blog.user?.bio || "Content creator and writer",
    category: blog.category || subHubData.name || "General",
    tags: blog.tags || [],
    content: blog.content ? parseContentForBlogDetail(blog.content) : [],
    rawContent: blog.content || "",
    relatedArticles: getRelatedArticles(blog),
    commentList: [], // You might want to fetch comments separately
    metaTitle: blog.title,
    metaDescription: truncateText(blog.content, 160),
    subHub: {
      id: subHubData.id,
      name: subHubData.name,
      title: subHubData.title,
      icon: subHubData.icon,
      image: subHubData.image,
    },
    isBookmarked: false,
    isLiked: false,
    status: blog.status || "published",
  };

  navigate(`/hub-blog-detail/${blog.slug}`, {
    state: {
      post: transformedPost,
      subHubData: subHubData,
      fromSubHub: true,
    },
  });
};

  // Get related articles from the same subhub
  const getRelatedArticles = (currentBlog) => {
    if (!blogData?.data) return [];
    
    return blogData.data
      .filter(blog => blog.id !== currentBlog.id)
      .slice(0, 3)
      .map(blog => ({
        id: blog.id,
        title: blog.title,
        slug: blog.slug,
        image: blog.cover_image || "/api/placeholder/400/250",
        author: blog.user ? `${blog.user.f_name} ${blog.user.l_name || ''}`.trim() : 'Anonymous',
        date: formatDate(blog.created_at),
        readTime: calculateReadTime(blog.content),
        category: blog.category || subHubData.name
      }));
  };

  // Enhanced content parsing for BlogDetail component
  const parseContentForBlogDetail = (content) => {
    if (!content) return [];
    
    // More sophisticated content parsing
    const sections = [];
    const lines = content.split('\n').filter(line => line.trim());
    
    let currentSection = null;
    
    lines.forEach(line => {
      const trimmedLine = line.trim();
      
      // Headers
      if (trimmedLine.match(/^#{1,6}\s/)) {
        const level = trimmedLine.match(/^#+/)[0].length;
        sections.push({
          type: "heading",
          level: level,
          content: trimmedLine.replace(/^#+\s*/, '')
        });
      }
      // HTML headers
      else if (trimmedLine.match(/^<h[1-6]>/)) {
        const level = parseInt(trimmedLine.match(/^<h([1-6])>/)[1]);
        sections.push({
          type: "heading",
          level: level,
          content: trimmedLine.replace(/<\/?h[1-6]>/g, '')
        });
      }
      // Blockquotes
      else if (trimmedLine.startsWith('>')) {
        sections.push({
          type: "quote",
          content: trimmedLine.replace(/^>\s*/, '')
        });
      }
      // Lists
      else if (trimmedLine.match(/^[-*+]\s/) || trimmedLine.match(/^\d+\.\s/)) {
        if (currentSection?.type !== "list") {
          currentSection = {
            type: "list",
            items: []
          };
          sections.push(currentSection);
        }
        currentSection.items.push(trimmedLine.replace(/^[-*+\d.]\s*/, ''));
      }
      // Code blocks
      else if (trimmedLine.startsWith('```')) {
        // Handle code blocks
        sections.push({
          type: "code",
          content: trimmedLine.replace(/```/g, '')
        });
      }
      // Regular paragraphs
      else if (trimmedLine.length > 0) {
        currentSection = null;
        sections.push({
          type: "paragraph",
          content: trimmedLine
        });
      }
    });
    
    return sections;
  };

  // Filter and sort blogs
  const getFilteredAndSortedBlogs = () => {
    if (!blogData?.data) return [];
    
    let filtered = blogData.data.filter(blog => {
      const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           blog.content?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === "all" || blog.category === filterCategory;
      return matchesSearch && matchesCategory;
    });
    
    // Sort blogs
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.created_at) - new Date(a.created_at);
        case "oldest":
          return new Date(a.created_at) - new Date(b.created_at);
        case "popular":
          return (b.likes || 0) + (b.views || 0) - ((a.likes || 0) + (a.views || 0));
        case "trending":
          return (b.comments_count || 0) - (a.comments_count || 0);
        default:
          return 0;
      }
    });
    
    return filtered;
  };

  const filteredBlogs = getFilteredAndSortedBlogs();
  const categories = [...new Set(blogData?.data?.map(blog => blog.category).filter(Boolean))] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Enhanced Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back
            </button>
            
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Bookmark className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced SubHub Header Section */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* SubHub Image with enhanced styling */}
            <div className="relative group">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                {subHubData.image ? (
                  <img
                    src={subHubData.image}
                    alt={subHubData.name || subHubData.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : subHubData.icon ? (
                  <span className="text-4xl drop-shadow-lg">{}</span>
                ) : (
                  <span className="drop-shadow-lg">
                    {(subHubData.name || subHubData.title).charAt(0).toUpperCase()}
                  </span>
                )}
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-2 shadow-lg">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>

            {/* Enhanced SubHub Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h1 className="text-4xl font-bold text-gray-900">
                  {subHubData.name || subHubData.title}
                </h1>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {subHubData.category}
                </span>
              </div>
              
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {subHubData.description}
              </p>
              
              {/* Enhanced Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{blogData?.data?.length || 0}</div>
                  <div className="text-sm text-gray-500 flex items-center justify-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    Posts
                  </div>
                </div>
                {/* <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{subHubData.member_count}</div>
                  <div className="text-sm text-gray-500 flex items-center justify-center gap-1">
                    <Users className="w-4 h-4" />
                    Members
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {blogData?.data?.reduce((acc, blog) => acc + (blog.views || 0), 0) || 0}
                  </div>
                  <div className="text-sm text-gray-500 flex items-center justify-center gap-1">
                    <Eye className="w-4 h-4" />
                    Views
                  </div>
                </div> */}
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{formatDate(subHubData.created_at).split(' ')[2]}</div>
                  {/* <div className="text-sm text-gray-500 flex items-center justify-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Created
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8 bg-white p-6 rounded-xl shadow-sm">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          {/* Filters */}
          <div className="flex gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="popular">Most Popular</option>
              <option value="trending">Trending</option>
            </select>
            
            {categories.length > 0 && (
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            )}
            
            {/* View Mode Toggle */}
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 ${viewMode === "grid" ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-50"}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 ${viewMode === "list" ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-50"}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Blogs Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900">
              {searchTerm ? `Search Results (${filteredBlogs.length})` : "Latest Posts"}
            </h2>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
              <div className="text-red-500 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">Error Loading Posts</h3>
              <p className="text-red-600">{error.message || error}</p>
            </div>
          ) : filteredBlogs.length > 0 ? (
            <div className={viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
              : "space-y-6"
            }>
              {filteredBlogs.map((blog) => (
                <article
                  key={blog.id}
                  onClick={() => handleBlogClick(blog)}
                  className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group ${
                    viewMode === "list" ? "flex gap-6 p-6" : ""
                  }`}
                >
                  {/* Blog Cover Image */}
                  {blog.cover_image && (
                    <div className={`bg-gray-200 overflow-hidden ${
                      viewMode === "list" ? "w-64 h-40 flex-shrink-0 rounded-lg" : "h-56"
                    }`}>
                      <img
                        src={blog.cover_image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}
                  
                  {/* Blog Content */}
                  <div className={viewMode === "list" ? "flex-1" : "p-6"}>
                    {viewMode === "grid" && (
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                          {blog.category || subHubData.name}
                        </span>
                        <span className="text-gray-500 text-sm">{formatRelativeTime(blog.created_at)}</span>
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    
                    {blog.content && (
                      <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                        {truncateText(blog.content)}
                      </p>
                    )}
                    
                    {/* Enhanced Blog Meta */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <img
                            src={blog.user?.profile_image || "/api/placeholder/32/32"}
                            alt={blog.user?.f_name || 'Anonymous'}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <span className="font-medium text-gray-900">
                            {blog.user?.f_name || 'Anonymous'}
                          </span>
                        </div>
                        {viewMode === "list" && (
                          <span className="text-gray-500">{formatRelativeTime(blog.created_at)}</span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-4 text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {calculateReadTime(blog.content)}
                        </span>
                        {blog.views && (
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {blog.views}
                          </span>
                        )}
                        {blog.likes && (
                          <span className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {blog.likes}
                          </span>
                        )}
                        {blog.comments_count && (
                          <span className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            {blog.comments_count}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-16 text-center">
              <div className="text-gray-400 mb-6">
                <BookOpen className="w-20 h-20 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {searchTerm ? "No posts found" : "No posts yet"}
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                {searchTerm 
                  ? "Try adjusting your search terms or filters" 
                  : "Be the first to share your thoughts and create a blog post in this subhub!"
                }
              </p>
              {!searchTerm && (
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Create First Post
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubHubPage;