import React, { useState } from 'react';
import { Search, MoreHorizontal, ChevronRight, Bell, BookOpen, Users, Mail, Heart, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();
  
  const categories = ['All', 'Media', 'Entrepreneurship', 'Travel'];
  
  const blogPosts = [
    {
      id: 1,
      title: "Transform Your Creative Ideas into Reality with JOINLIO!",
      excerpt: "Are you a student who wants to share your vision to the world through films, photos, musical compositions, or digital products? JOINLIO's Media Hub offers the perfect platform.",
      category: "Media",
      author: "JOINLIO Team",
      date: "Feb 15, 2025",
      readTime: "10 min read",
      likes: 423,
      comments: 56,
      imageSrc: "/api/placeholder/600/400",
      content: "Transform Your Creative Ideas into Reality with JOINLIO!\n\nAre you a student who wants to share your vision to the world through films, photos, musical compositions, or digital products? Are you eager to transform creative concepts into socially relevant projects?...",
      fullContent: "paste.txt" // Reference to full content
    },
    {
      id: 2,
      title: "Why Student Entrepreneurship is the Key to Future Success",
      excerpt: "Campus life is not only limited to classroom experience and good performance; it is also one of the best chances to make your dream come true.",
      category: "Entrepreneurship",
      author: "JOINLIO Team",
      date: "Feb 12, 2025",
      readTime: "8 min read",
      likes: 287,
      comments: 42,
      imageSrc: "/api/placeholder/600/400",
      content: "Where Ideas Ignite and Future Begin!\n\nCampus life is not only limited to classroom experience and good performance; it is also one of the best chances to make your dream come true...",
      fullContent: "paste-2.txt"
    },
    {
      id: 3,
      title: "Wanderlust for Growth: How Travel Transforms Your Life",
      excerpt: "Travel has the unique ability to transform us in ways we never imagined. It's not just about getting away, but finding who we are.",
      category: "Travel",
      author: "JOINLIO Team",
      date: "Feb 10, 2025",
      readTime: "12 min read",
      likes: 356,
      comments: 28,
      imageSrc: "/api/placeholder/600/400",
      content: "Travel has the unique ability to transform us in ways we never imagined. Well noted by the American author Mark Twain this goes to say, \"Travel is fatal to prejudice, bigotry, and narrow-mindedness.\"...",
      fullContent: "paste-3.txt"
    }
  ];
  
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const handleReadMore = (post) => {
    navigate(`/blog-detail/${post.id}`, { state: { post } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#fbd4e0] to-[#fff5e1] p-6 md:p-10">
      {/* Decorative circles for background effect */}
      <div className="fixed top-20 left-20 w-72 h-72 bg-[#e0b3c1] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="fixed top-40 right-40 w-80 h-80 bg-[#e6d5b3] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="fixed bottom-20 left-1/3 w-96 h-96 bg-[#e0b3c1] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Hero section with search */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            JOINLIO Blog
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Discover how JOINLIO helps students transform their ideas into reality through Media, Entrepreneurship, and Travel.
          </p>
          
          {/* Search bar with glassmorphism */}
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={20} className="text-gray-500" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-4 py-4 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full shadow-lg border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-[#e0b3c1] focus:border-transparent text-gray-700 placeholder-gray-500"
              placeholder="Search for articles, topics, or authors..."
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#e0b3c1] to-[#e6d5b3] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all">
              Search
            </button>
          </div>
        </div>
        
        {/* Category filters with glassmorphism */}
        <div className="mb-12 overflow-x-auto pb-2">
          <div className="flex space-x-2 md:space-x-4 md:justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full ${
                  activeCategory === category 
                    ? 'bg-gradient-to-r from-[#e0b3c1] to-[#e6d5b3] text-white' 
                    : 'bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm text-gray-700 hover:bg-opacity-50'
                } transition-all whitespace-nowrap font-medium`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Blog posts grid with glassmorphism cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPosts.map(post => (
            <article
              key={post.id}
              className="group bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1 border border-white border-opacity-30"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.imageSrc} 
                  alt={post.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-md text-white text-sm font-medium border border-white border-opacity-30">
                  {post.category}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-[#e0b3c1] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#e0b3c1] to-[#e6d5b3] flex items-center justify-center text-white text-xs font-medium">
                      JT
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{post.author}</p>
                      <p className="text-xs text-gray-500">{post.date} · {post.readTime}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-gray-500">
                    <span className="flex items-center space-x-1">
                      <Heart size={16} className="text-[#e0b3c1]" />
                      <span className="text-xs">{post.likes}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MessageSquare size={16} className="text-[#e6d5b3]" />
                      <span className="text-xs">{post.comments}</span>
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="px-6 pb-6 pt-0">
                <button 
                  onClick={() => handleReadMore(post)}
                  className="flex items-center space-x-1 text-[#e0b3c1] hover:text-[#d49dab] transition-colors group-hover:translate-x-1 transform transition-transform"
                >
                  <span className="text-sm font-medium">Read more</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
        
        {/* View more button with glassmorphism */}
        <div className="flex justify-center">
          <button className="group px-8 py-4 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full border border-white border-opacity-30 hover:bg-opacity-30 transition-all shadow-lg">
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-800 group-hover:text-[#e0b3c1] transition-colors">View more articles</span>
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#e0b3c1] to-[#e6d5b3] flex items-center justify-center text-white transform group-hover:rotate-90 transition-transform">
                <MoreHorizontal size={16} />
              </div>
            </div>
          </button>
        </div>
        
      </div>
    </div>
  );
};

// Define CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes blob {
    0% {
      transform: scale(1) translate(0px, 0px);
    }
    33% {
      transform: scale(1.1) translate(30px, -50px);
    }
    66% {
      transform: scale(0.9) translate(-20px, 20px);
    }
    100% {
      transform: scale(1) translate(0px, 0px);
    }
  }
  
  .animate-blob {
    animation: blob 7s infinite;
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .animation-delay-4000 {
    animation-delay: 4s;
  }
  
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
document.head.appendChild(style);

export default Blogs;