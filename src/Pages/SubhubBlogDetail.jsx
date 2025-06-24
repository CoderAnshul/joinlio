import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
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
  ThumbsUp,
  Send,
  MoreHorizontal,
  Flag,
  ExternalLink,
} from "lucide-react";

const HubBlogDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { slug } = useParams();

  // Initialize post state with navigation state or null
  const [post, setPost] = useState(location.state?.post || null);
  const [subHubData] = useState(location.state?.subHubData || null);
  const [fromSubHub] = useState(location.state?.fromSubHub || false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // UI State
  const [isLiked, setIsLiked] = useState(post?.isLiked || false);
  const [isBookmarked, setIsBookmarked] = useState(post?.isBookmarked || false);
  const [likeCount, setLikeCount] = useState(post?.likes || 0);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(post?.commentList || []);

  // Optional: Fetch blog post data if state is unavailable
  useEffect(() => {
    if (!post && slug) {
      // If you have an API endpoint, fetch the blog post here
      // Example with fetch:
      /*
      setLoading(true);
      fetch(`/api/blogs/${slug}`)
        .then((response) => response.json())
        .then((blog) => {
          const transformedPost = {
            id: blog.id,
            slug: blog.slug,
            title: blog.title,
            author: blog.user
              ? `${blog.user.f_name} ${blog.user.l_name || ""}`.trim()
              : "Anonymous",
            authorId: blog.user?.id,
            date: new Date(blog.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            }),
            publishedAt: blog.created_at,
            readTime: calculateReadTime(blog.content),
            likes: blog.likes || 0,
            comments: blog.comments_count || 0,
            views: blog.views || 0,
            shares: blog.shares || 0,
            mainImage: blog.cover_image || "/api/placeholder/1200/600",
            authorImage: blog.user?.profile_image || "/api/placeholder/80/80",
            authorBio: blog.user?.bio || "Content creator and writer",
            category: blog.category || subHubData?.name || "General",
            tags: blog.tags || [],
            content: blog.content ? parseContentForBlogDetail(blog.content) : [],
            rawContent: blog.content || "",
            relatedArticles: [], // You may need to fetch related articles separately
            commentList: blog.comments || [],
            metaTitle: blog.title,
            metaDescription: truncateText(blog.content, 160),
            subHub: subHubData || {
              id: blog.subHub?.id || 1,
              name: blog.subHub?.name || "Tech Hub",
              title: blog.subHub?.title || "Technology Hub",
              icon: blog.subHub?.icon || "🚀",
              image: blog.subHub?.image || null,
            },
            isBookmarked: false,
            isLiked: false,
            status: blog.status || "published",
          };
          setPost(transformedPost);
          setComments(blog.comments || []);
          setLikeCount(blog.likes || 0);
          setIsLiked(blog.isLiked || false);
          setIsBookmarked(blog.isBookmarked || false);
          setLoading(false);
        })
        .catch((err) => {
          setError("Failed to load blog post");
          setLoading(false);
        });
      */
      // If no API, set an error
      setError("Blog post data not available. Please navigate from the SubHub page.");
    }
  }, [slug, post, subHubData]);

  // Helper functions
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const truncateText = (text, maxLength = 160) => {
    if (!text) return "";
    const cleanText = text.replace(/<[^>]*>/g, "");
    if (cleanText.length <= maxLength) return cleanText;
    return cleanText.substring(0, maxLength) + "...";
  };

  const calculateReadTime = (content) => {
    if (!content) return "3 min read";
    const wordsPerMinute = 200;
    const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  const parseContentForBlogDetail = (content) => {
    if (!content) return [];
    const sections = [];
    const lines = content.split("\n").filter((line) => line.trim());
    let currentSection = null;

    lines.forEach((line) => {
      const trimmedLine = line.trim();
      if (trimmedLine.match(/^#{1,6}\s/)) {
        const level = trimmedLine.match(/^#+/)[0].length;
        sections.push({
          type: "heading",
          level: level,
          content: trimmedLine.replace(/^#+\s*/, ""),
        });
      } else if (trimmedLine.match(/^<h[1-6]>/)) {
        const level = parseInt(trimmedLine.match(/^<h([1-6])>/)[1]);
        sections.push({
          type: "heading",
          level: level,
          content: trimmedLine.replace(/<\/?h[1-6]>/g, ""),
        });
      } else if (trimmedLine.startsWith(">")) {
        sections.push({
          type: "quote",
          content: trimmedLine.replace(/^>\s*/, ""),
        });
      } else if (trimmedLine.match(/^[-*+]\s/) || trimmedLine.match(/^\d+\.\s/)) {
        if (currentSection?.type !== "list") {
          currentSection = { type: "list", items: [] };
          sections.push(currentSection);
        }
        currentSection.items.push(trimmedLine.replace(/^[-*+\d.]\s*/, ""));
      } else if (trimmedLine.startsWith("```")) {
        sections.push({
          type: "code",
          content: trimmedLine.replace(/```/g, ""),
        });
      } else if (trimmedLine.length > 0) {
        currentSection = null;
        sections.push({
          type: "paragraph",
          content: trimmedLine,
        });
      }
    });

    return sections;
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
    // Optionally: Send like update to server
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // Optionally: Send bookmark update to server
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title,
        text: post?.metaDescription,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        author: "Current User", // Replace with actual user data
        authorImage: "/api/placeholder/40/40",
        content: newComment,
        date: new Date().toLocaleDateString(),
        likes: 0,
        replies: [],
      };
      setComments([comment, ...comments]);
      setNewComment("");
      // Optionally: Send comment to server
    }
  };

  const handleBackClick = () => {
    if (fromSubHub && subHubData) {
      navigate(`/subhub/${subHubData.id}`, {
        state: { subHubData },
      });
    } else {
      navigate(-1);
    }
  };

  const renderContent = () => {
    if (!post?.content || post.content.length === 0) {
      return (
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 leading-relaxed">
            {post?.rawContent || "No content available for this blog post."}
          </p>
        </div>
      );
    }

    return (
      <div className="prose prose-lg max-w-none">
        {post.content.map((section, index) => {
          switch (section.type) {
            case "heading":
              const HeadingTag = `h${section.level}`;
              return (
                <HeadingTag
                  key={index}
                  className={`font-bold text-gray-900 ${
                    section.level === 1
                      ? "text-3xl mb-6"
                      : section.level === 2
                      ? "text-2xl mb-5 mt-8"
                      : section.level === 3
                      ? "text-xl mb-4 mt-6"
                      : "text-lg mb-3 mt-5"
                  }`}
                >
                  {section.content}
                </HeadingTag>
              );
            case "paragraph":
              return (
                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                  {section.content}
                </p>
              );
            case "quote":
              return (
                <blockquote
                  key={index}
                  className="border-l-4 border-blue-500 pl-6 my-8 italic text-gray-600 bg-gray-50 py-4"
                >
                  {section.content}
                </blockquote>
              );
            case "list":
              return (
                <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            case "code":
              return (
                <pre
                  key={index}
                  className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto mb-6"
                >
                  <code>{section.content}</code>
                </pre>
              );
            default:
              return (
                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                  {section.content}
                </p>
              );
          }
        })}
      </div>
    );
  };

  // Handle loading and error states
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
          <div className="text-red-500 mb-4">
            <svg
              className="w-16 h-16 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-red-800 mb-2">
            Error Loading Blog Post
          </h3>
          <p className="text-red-600">
            {error || "Please navigate to this post from the SubHub page."}
          </p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={handleBackClick}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              {fromSubHub ? `Back to ${subHubData?.name}` : "Back"}
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </button>
              <button
                onClick={handleBookmark}
                className={`p-2 rounded-lg transition-colors ${
                  isBookmarked
                    ? "text-yellow-600 bg-yellow-50 hover:bg-yellow-100"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <Bookmark className={`w-5 h-5 ${isBookmarked ? "fill-current" : ""}`} />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* SubHub Reference */}
        {post.subHub && (
          <div className="mb-6">
            <button
              onClick={() =>
                navigate(`/subhub/${post.subHub.id}`, {
                  state: { subHubData: post.subHub },
                })
              }
              className="flex items-center gap-3 text-blue-600 hover:text-blue-800 transition-colors group"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm">
                {post.subHub.icon || post.subHub.name.charAt(0)}
              </div>
              <span className="font-medium group-hover:underline">{post.subHub.name}</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600">
            <div className="flex items-center gap-3">
              <img
                src={post.authorImage}
                alt={post.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-medium text-gray-900">{post.author}</div>
                <div className="text-sm">{post.authorBio}</div>
              </div>
            </div>
            {/* <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {post.views} views
              </span>
            </div> */}
          </div>
        </header>

        {/* Featured Image */}
        {post.mainImage && (
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
            <img
              src={post.mainImage}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">{renderContent()}</div>

        {/* Article Actions */}
        {/* <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={handleLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isLiked
                    ? "bg-red-50 text-red-600 hover:bg-red-100"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                <span className="font-medium">{likeCount}</span>
              </button>
              <button
                onClick={() => setShowComments(!showComments)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">{comments.length}</span>
              </button>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Share2 className="w-5 h-5" />
                <span className="font-medium">{post.shares}</span>
              </button>
            </div>
            <button className="flex items-center gap-2 text-gray-500 hover:text-red-600 transition-colors">
              <Flag className="w-4 h-4" />
              Report
            </button>
          </div>
        </div> */}

        {/* Comments Section */}
        {showComments && (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Comments ({comments.length})
            </h3>
            <div className="mb-8">
              <div className="flex gap-3">
                <img
                  src="/api/placeholder/40/40"
                  alt="Current User"
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows="3"
                  />
                  <div className="flex justify-end mt-3">
                    <button
                      onClick={handleCommentSubmit}
                      disabled={!newComment.trim()}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <Send className="w-4 h-4" />
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="flex gap-3">
                  <img
                    src={comment.authorImage}
                    alt={comment.author}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-gray-900">{comment.author}</span>
                        <span className="text-sm text-gray-500">{comment.date}</span>
                      </div>
                      <p className="text-gray-700">{comment.content}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                      <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        {comment.likes}
                      </button>
                      <button className="hover:text-blue-600 transition-colors">Reply</button>
                    </div>
                    {comment.replies && comment.replies.length > 0 && (
                      <div className="ml-8 mt-4 space-y-4">
                        {comment.replies.map((reply) => (
                          <div key={reply.id} className="flex gap-3">
                            <img
                              src={reply.authorImage}
                              alt={reply.author}
                              className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                            />
                            <div className="flex-1">
                              <div className="bg-gray-50 rounded-lg p-3">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-medium text-gray-900 text-sm">
                                    {reply.author}
                                  </span>
                                  <span className="text-xs text-gray-500">{reply.date}</span>
                                </div>
                                <p className="text-gray-700 text-sm">{reply.content}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Articles */}
        {post.relatedArticles && post.relatedArticles.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {post.relatedArticles.map((article) => (
                <article
                  key={article.id}
                  className="group cursor-pointer"
                  onClick={() =>
                    navigate(`/hub-blog-detail/${article.slug}`, {
                      state: {
                        post: article,
                        subHubData: post.subHub,
                        fromSubHub: fromSubHub,
                      },
                    })
                  }
                >
                  <div className="bg-gray-200 rounded-lg overflow-hidden mb-3 h-32">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <div className="text-sm text-gray-500 flex items-center gap-2">
                    <span>{article.author}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

export default HubBlogDetailPage;