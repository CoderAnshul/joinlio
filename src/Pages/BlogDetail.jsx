import React, { useState } from 'react';
import { ArrowLeft, Heart, MessageSquare, Share2, Bookmark } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const BlogDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const locationPost = location.state?.post || {};

  const {
    id = 1,
    title = "Wanderlust for Growth: How Travel Transforms Your Life",
    author = "Michelle Santos",
    date = "Feb 16, 2025",
    readTime = "12 min read",
    likes = 487,
    comments = 63,
    mainImage = "/api/placeholder/1200/600",
    authorImage = "/api/placeholder/80/80",
    category = "Lifestyle",
    content = [],
    relatedArticles = []
  } = locationPost;

  const [newComment, setNewComment] = useState('');
  const [commentList, setCommentList] = useState(locationPost.commentList || []);

  const handleBackClick = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentData = {
        id: Date.now(), // Simple ID generation
        username: "Current User", // Replace with actual user data
        userImage: "/api/placeholder/100/100",
        timeAgo: "Just now",
        text: newComment,
        likes: 0
      };
      setCommentList([...commentList, newCommentData]);
      setNewComment('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#fbd4e0] to-[#fff5e1] p-6 md:p-10">
      <div className="max-w-7xl mx-auto relative z-10">
        <a href="#" onClick={handleBackClick} className="inline-flex items-center space-x-2 text-gray-700 hover:text-[#e0b3c1] mb-8 transition-colors">
          <ArrowLeft size={20} />
          <span>Back to all articles</span>
        </a>

        <header className="mb-12">
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl border border-white border-opacity-30">
            <div className="relative h-96 md:h-[500px]">
              <img src={mainImage} alt={title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                <span className="px-3 py-1 rounded-full bg-[#e0b3c1] text-white text-sm font-medium">{category}</span>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">{title}</h1>
                <div className="flex flex-wrap items-center text-sm md:text-base text-gray-200 space-x-6">
                  <div className="flex items-center space-x-2">
                    <img src={authorImage} alt={author} className="w-8 h-8 rounded-full" />
                    <span>{author}</span>
                  </div>
                  <span>{date}</span>
                  <span>{readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-2xl p-6 md:p-10 shadow-xl border border-white border-opacity-30 mb-12">
          <div className="prose prose-lg max-w-none">
            {content.map((section, index) => {
              switch (section.type) {
                case 'paragraph':
                  return <p key={index} className="text-gray-700 leading-relaxed mb-6">{section.content}</p>;
                case 'heading':
                  return <h2 key={index} className="text-2xl font-bold text-gray-800 mb-4 mt-10">{section.content}</h2>;
                case 'subheading':
                  return <h3 key={index} className="text-xl font-semibold text-gray-800 mb-3 mt-6">{section.content}</h3>;
                case 'image':
                  return (
                    <div key={index} className="my-10 rounded-xl overflow-hidden shadow-lg">
                      <img src={section.url} alt={section.alt} className="w-full h-auto" />
                      {section.caption && <p className="italic text-sm text-gray-600 bg-white bg-opacity-70 backdrop-filter backdrop-blur-sm p-3">{section.caption}</p>}
                    </div>
                  );
                case 'quote':
                  return <blockquote key={index} className="border-l-4 border-[#e0b3c1] pl-4 italic my-8 text-gray-700">{section.content}</blockquote>;
                default:
                  return null;
              }
            })}
          </div>

          <div className="border-t border-gray-200 mt-10 pt-8">
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-[#e0b3c1] transition-colors">
                  <Heart size={20} />
                  <span>{likes} likes</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-700 hover:text-[#e0b3c1] transition-colors">
                  <MessageSquare size={20} />
                  <span>{comments} comments</span>
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-[#e0b3c1] transition-colors">
                  <Share2 size={20} />
                  <span>Share</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-700 hover:text-[#e0b3c1] transition-colors">
                  <Bookmark size={20} />
                  <span>Save</span>
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Comments section */}
        <section className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-2xl p-6 md:p-10 shadow-xl border border-white border-opacity-30 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Comments ({commentList.length})</h2>
          <div className="mb-10">
            <form onSubmit={handleCommentSubmit}>
              <div className="flex space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e0b3c1] to-[#e6d5b3] flex-shrink-0"></div>
                <div className="flex-grow">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Share your thoughts..."
                    className="w-full px-4 py-3 bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-xl border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-[#e0b3c1] focus:border-transparent placeholder-gray-500 text-gray-700 h-32 resize-none"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end">
                <button type="submit" className="px-6 py-2 bg-gradient-to-r from-[#e0b3c1] to-[#e6d5b3] text-white rounded-full font-medium hover:shadow-lg transition-all">
                  Post Comment
                </button>
              </div>
            </form>
          </div>

          {commentList.map((comment) => (
            <div key={comment.id} className="mb-8 pb-8 border-b border-gray-200 last:border-0 last:mb-0 last:pb-0">
              <div className="flex space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e0b3c1] to-[#e6d5b3] flex-shrink-0 overflow-hidden">
                  <img src={comment.userImage} alt={comment.username} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap justify-between mb-2">
                    <h4 className="font-medium text-gray-800">{comment.username}</h4>
                    <span className="text-sm text-gray-500">{comment.timeAgo}</span>
                  </div>
                  <p className="text-gray-700 mb-3">{comment.text}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <button className="text-gray-600 hover:text-[#e0b3c1] transition-colors">Reply</button>
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-[#e0b3c1] transition-colors">
                      <Heart size={14} />
                      <span>{comment.likes}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default BlogDetail;