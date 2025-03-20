import React, { useState } from 'react';
import { 
  Search, 
  TrendingUp, 
  Bookmark, 
  Star, 
  Hash, 
  User,
  ArrowUp,
  BookOpen,
  FileText,
  Users,
  Calendar,
  Briefcase,
  ChevronRight,
  Filter
} from 'lucide-react';

const ExploreTopicsPage = () => {
  const [activeCategory, setActiveCategory] = useState('trending');
  
  const categories = [
    { id: 'trending', name: 'Trending', icon: <TrendingUp size={16} /> },
    { id: 'recommended', name: 'Recommended', icon: <Star size={16} /> },
    { id: 'saved', name: 'Saved', icon: <Bookmark size={16} /> },
    { id: 'recent', name: 'Recently Viewed', icon: <Clock size={16} /> },
  ];
  
  const topicHubs = [
    {
      id: 1,
      name: 'Data Science',
      icon: <FileText size={24} />,
      color: 'indigo',
      members: 8425,
      posts: 342,
      trending: true,
      categories: ['Technology', 'Research', 'Analytics']
    },
    {
      id: 2,
      name: 'AI Ethics',
      icon: <BookOpen size={24} />,
      color: 'purple',
      members: 6210,
      posts: 287,
      trending: true,
      categories: ['Ethics', 'Technology', 'Philosophy']
    },
    {
      id: 3,
      name: 'Sustainable Energy',
      icon: <TrendingUp size={24} />,
      color: 'green',
      members: 5789,
      posts: 312,
      trending: false,
      categories: ['Environment', 'Engineering', 'Policy']
    },
    {
      id: 4,
      name: 'Digital Marketing',
      icon: <Briefcase size={24} />,
      color: 'blue',
      members: 7350,
      posts: 408,
      trending: true,
      categories: ['Business', 'Technology', 'Communications']
    },
    {
      id: 5,
      name: 'Research Methods',
      icon: <BookOpen size={24} />,
      color: 'amber',
      members: 4980,
      posts: 275,
      trending: false,
      categories: ['Academic', 'Research', 'Education']
    },
    {
      id: 6,
      name: 'UX Design',
      icon: <Users size={24} />,
      color: 'pink',
      members: 6840,
      posts: 362,
      trending: true,
      categories: ['Design', 'Technology', 'Psychology']
    },
    {
      id: 7,
      name: 'Quantum Computing',
      icon: <FileText size={24} />,
      color: 'indigo',
      members: 3250,
      posts: 185,
      trending: true,
      categories: ['Physics', 'Technology', 'Research']
    },
    {
      id: 8,
      name: 'Entrepreneurship',
      icon: <Briefcase size={24} />,
      color: 'orange',
      members: 8120,
      posts: 425,
      trending: false,
      categories: ['Business', 'Innovation', 'Leadership']
    }
  ];
  
  const featuredTopics = [
    {
      id: 1,
      name: 'Machine Learning',
      activity: 'High',
      recentEvent: 'Workshop this weekend',
      image: null
    },
    {
      id: 2,
      name: 'Blockchain Tech',
      activity: 'Medium',
      recentEvent: 'Research call tomorrow',
      image: null
    },
    {
      id: 3,
      name: 'Climate Science',
      activity: 'High',
      recentEvent: 'New study published',
      image: null
    }
  ];
  
  const suggestedTopics = [
    'Cybersecurity', 
    'Biotechnology', 
    'EdTech Innovation', 
    'Neuroscience', 
    'Financial Technology', 
    'Healthcare Policy', 
    'Urban Design'
  ];

  const getColorClass = (color) => {
    switch(color) {
      case 'indigo': return 'bg-indigo-100 text-indigo-700';
      case 'purple': return 'bg-purple-100 text-purple-700';
      case 'green': return 'bg-green-100 text-green-700';
      case 'blue': return 'bg-blue-100 text-blue-700';
      case 'amber': return 'bg-amber-100 text-amber-700';
      case 'pink': return 'bg-pink-100 text-pink-700';
      case 'orange': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="w-full bg-gray-50 p-4">
      <div className="max-w-8xl mx-auto">
        {/* Top Navigation */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-4 sticky top-0 z-10">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-indigo-700">Explore Topics</h1>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Your Peer Score: 78</span>
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                <User size={16} className="text-indigo-700" />
              </div>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input 
              type="text" 
              placeholder="Search topics, interests, or fields of study..." 
              className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          
          {/* Category Tabs */}
          <div className="flex overflow-x-auto space-x-2 pb-2">
            {categories.map((category) => (
              <button 
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex items-center ${activeCategory === category.id ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700'}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="mr-1">{category.icon}</span> {category.name}
              </button>
            ))}
            <button className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex items-center bg-gray-100 text-gray-700">
              <Filter size={16} className="mr-1" /> Filters
            </button>
          </div>
        </div>

        {/* Featured Topics */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <h2 className="text-lg font-semibold mb-3">Featured Topics</h2>
          <div className="flex overflow-x-auto space-x-4 pb-2">
            {featuredTopics.map((topic) => (
              <div 
                key={topic.id} 
                className="min-w-[200px] rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white"
              >
                <h3 className="font-semibold">{topic.name}</h3>
                <div className="text-xs mt-2">Activity: {topic.activity}</div>
                <div className="text-xs mt-1">{topic.recentEvent}</div>
                <button className="mt-2 px-3 py-1 bg-white bg-opacity-20 rounded-full text-xs">
                  Join Hub
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Topic Hubs */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Topic Hubs</h2>
            <button className="text-sm text-indigo-600 font-medium flex items-center">
              View All <ChevronRight size={16} />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {topicHubs.map((hub) => (
              <div key={hub.id} className="border rounded-lg p-3 hover:border-indigo-300 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-10 h-10 rounded-full ${getColorClass(hub.color)} flex items-center justify-center`}>
                    {hub.icon}
                  </div>
                  {hub.trending && (
                    <div className="flex items-center text-green-600 text-xs">
                      <ArrowUp size={12} />
                      <span>Trending</span>
                    </div>
                  )}
                </div>
                <h3 className="font-semibold">{hub.name}</h3>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <Users size={12} className="mr-1" />
                  <span>{hub.members.toLocaleString()} members</span>
                  <span className="mx-1">•</span>
                  <FileText size={12} className="mr-1" />
                  <span>{hub.posts} posts</span>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {hub.categories.map((category, idx) => (
                    <span key={idx} className="text-xs px-2 py-0.5 bg-gray-100 rounded-full">
                      {category}
                    </span>
                  ))}
                </div>
                <button className="w-full mt-2 p-1 text-xs font-medium text-indigo-600 border border-indigo-200 rounded hover:bg-indigo-50">
                  Join Hub
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested Topics */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-3">Topics You Might Like</h2>
          <div className="flex flex-wrap gap-2">
            {suggestedTopics.map((topic, index) => (
              <button 
                key={index} 
                className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium flex items-center hover:bg-indigo-100"
              >
                <Hash size={14} className="mr-1" />
                {topic}
              </button>
            ))}
          </div>
          
          <div className="mt-4 border-t pt-4">
            <h3 className="text-sm font-medium mb-2">Recommended Based On Your Profile</h3>
            <div className="flex flex-col space-y-2">
              <button className="flex items-center justify-between p-2 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                    <BookOpen size={16} className="text-green-700" />
                  </div>
                  <span>Environmental Economics</span>
                </div>
                <span className="text-xs text-gray-500">3.2k members</span>
              </button>
              <button className="flex items-center justify-between p-2 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                    <FileText size={16} className="text-blue-700" />
                  </div>
                  <span>Cloud Computing</span>
                </div>
                <span className="text-xs text-gray-500">5.7k members</span>
              </button>
              <button className="flex items-center justify-between p-2 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                    <Users size={16} className="text-purple-700" />
                  </div>
                  <span>Cultural Studies</span>
                </div>
                <span className="text-xs text-gray-500">2.9k members</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add this component for the category icons
const Clock = ({ size = 24, className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
};

export default ExploreTopicsPage;