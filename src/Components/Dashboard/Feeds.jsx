import React, { useState } from 'react';
import { 
  BookOpen, 
  Users, 
  Award, 
  Calendar, 
  MessageSquare, 
  ThumbsUp, 
  Share2, 
  Bookmark, 
  MoreHorizontal, 
  User,
  FileText,
  Briefcase,
  Mail,
  Bell,
  Search,
  UserPlus,
  UserCheck,
  X,
  ChevronDown,
  SendHorizontal,
  Paperclip,
  Link,
  Smile
} from 'lucide-react';

const PeerPlatformFeed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      type: 'project',
      user: {
        name: 'Sarah Johnson',
        avatar: null,
        username: 'sarahj',
        institution: 'Tech University',
        peerScore: 87
      },
      title: 'Machine Learning Research Project',
      description: 'Looking for team members for my upcoming ML research project. Need expertise in Python and data visualization.',
      tags: ['MachineLearning', 'DataScience', 'Collaboration'],
      engagement: 42,
      comments: 7,
      timestamp: '2 hours ago',
      engaged: false,
      saved: false
    },
    {
      id: 2,
      type: 'event',
      user: {
        name: 'Tech University',
        avatar: null,
        username: 'techuniversity',
        isPartner: true
      },
      title: 'Annual Hackathon',
      description: 'Our annual hackathon starts next week! Sign up now to participate and win amazing prizes.',
      location: 'Main Campus - Innovation Center',
      date: 'March 27-29, 2025',
      tags: ['Hackathon', 'Coding', 'Innovation'],
      engagement: 89,
      comments: 15,
      timestamp: '5 hours ago',
      engaged: true,
      saved: false
    },
    {
      id: 3,
      type: 'collaboration',
      user: {
        name: 'Computer Science Club',
        avatar: null,
        username: 'cs_club',
        institution: 'Tech University',
        members: 156
      },
      title: 'AI Workshop',
      description: 'AI Workshop happening this weekend! Learn about machine learning basics and get hands-on experience. Open to all students!',
      tags: ['AI', 'Workshop', 'Learning'],
      engagement: 56,
      comments: 10,
      timestamp: '1 day ago',
      engaged: false,
      saved: true
    },
    {
      id: 4,
      type: 'resource',
      user: {
        name: 'Academic Resources Hub',
        avatar: null,
        username: 'academicresources',
        isVerified: true
      },
      title: 'Free Access to Research Papers',
      description: 'Our university has partnered with ScienceDaily to provide free access to premium research papers for all students.',
      tags: ['Research', 'Resources', 'Academic'],
      engagement: 128,

      comments: 23,
      timestamp: '2 days ago',
      engaged: false,
      saved: false
    }
  ]); 
  
  const [filters, setFilters] = useState({ active: 'all' });
  const [showMessenger, setShowMessenger] = useState(false);
  const [showNetworkSuggestions, setShowNetworkSuggestions] = useState(false);
  const [activeChat, setActiveChat] = useState(null);
  const [messageText, setMessageText] = useState('');
  
  // Sample data for connections and messages
  const [connections, setConnections] = useState([
    {
      id: 1,
      name: 'Alex Wong',
      avatar: null,
      title: 'Data Science Student',
      institution: 'Tech University',
      connected: true,
      unreadMessages: 2
    },
    {
      id: 2,
      name: 'Jamie Rivera',
      avatar: null,
      title: 'Computer Science Professor',
      institution: 'Tech University',
      connected: true,
      unreadMessages: 0
    },
    {
      id: 3,
      name: 'Taylor Kim',
      avatar: null,
      title: 'Research Assistant',
      institution: 'Science Academy',
      connected: true,
      unreadMessages: 0
    }
  ]);
  
  const [networkSuggestions] = useState([
    {
      id: 101,
      name: 'Morgan Chen',
      avatar: null,
      title: 'ML Engineer',
      institution: 'Tech University',
      mutualConnections: 12,
      connected: false
    },
    {
      id: 102,
      name: 'Dr. Samantha Lee',
      avatar: null,
      title: 'AI Professor',
      institution: 'Tech University',
      mutualConnections: 8,
      connected: false
    },
    {
      id: 103,
      name: 'Jordan Smith',
      avatar: null,
      title: 'PhD Candidate',
      institution: 'Research Institute',
      mutualConnections: 5,
      connected: false
    },
    {
      id: 104,
      name: 'Avery Johnson',
      avatar: null,
      title: 'Programming Club Lead',
      institution: 'Tech University',
      mutualConnections: 15,
      connected: false
    },
    {
      id: 105,
      name: 'Casey Wilson',
      avatar: null,
      title: 'Data Visualization Researcher',
      institution: 'Innovation Labs',
      mutualConnections: 3,
      connected: false
    }
  ]);
  
  const [chats] = useState([
    {
      id: 1,
      with: 1, // Alex Wong's id
      messages: [
        { id: 1, sender: 1, text: "Hi there! I saw your ML project post. Would love to collaborate!", time: "Yesterday" },
        { id: 2, sender: 'me', text: "Thanks for reaching out! What aspects are you interested in?", time: "Yesterday" },
        { id: 3, sender: 1, text: "I have experience with data visualization. Would that be helpful?", time: "10:30 AM" },
        { id: 4, sender: 1, text: "Also, I've worked on similar projects before.", time: "10:31 AM" }
      ]
    },
    {
      id: 2,
      with: 2, // Jamie Rivera's id
      messages: [
        { id: 1, sender: 'me', text: "Hello Professor Rivera, do you have office hours this week?", time: "Monday" },
        { id: 2, sender: 2, text: "Yes, I'm available Wednesday from 2-4pm or Thursday morning.", time: "Monday" },
        { id: 3, sender: 'me', text: "I'll stop by on Wednesday, thanks!", time: "Monday" }
      ]
    },
    {
      id: 3,
      with: 3, // Taylor Kim's id
      messages: [
        { id: 1, sender: 3, text: "Looking forward to the hackathon next week!", time: "Tuesday" },
        { id: 2, sender: 'me', text: "Me too! Have you formed a team yet?", time: "Tuesday" },
        { id: 3, sender: 3, text: "Not yet. Would you like to team up?", time: "Tuesday" }
      ]
    }
  ]);

  const toggleConnection = (id) => {
    setNetworkSuggestions(prev => 
      prev.map(person => 
        person.id === id ? {...person, connected: !person.connected} : person
      )
    );
  };

  const openChat = (connectionId) => {
    const chat = chats.find(c => c.with === connectionId);
    setActiveChat(chat);
    setShowMessenger(true);
    
    // Mark messages as read
    setConnections(prev => 
      prev.map(conn => 
        conn.id === connectionId ? {...conn, unreadMessages: 0} : conn
      )
    );
  };

  const sendMessage = () => {
    if (!messageText.trim() || !activeChat) return;
    
    const newMessage = {
      id: activeChat.messages.length + 1,
      sender: 'me',
      text: messageText,
      time: 'Just now'
    };
    
    const updatedChats = chats.map(chat => 
      chat.id === activeChat.id 
        ? {...chat, messages: [...chat.messages, newMessage]} 
        : chat
    );
    
    // Update the chats state would go here in a real application
    // For this demo, we'll just update the active chat
    setActiveChat({...activeChat, messages: [...activeChat.messages, newMessage]});
    setMessageText('');
  };

  const toggleEngagement = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          engaged: !post.engaged,
          engagement: post.engaged ? post.engagement - 1 : post.engagement + 1
        };
      }
      return post;
    }));
  };

  const toggleSave = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          saved: !post.saved
        };
      }
      return post;
    }));
  };

  const getIconForPostType = (type) => {
    switch(type) {
      case 'project': return <FileText size={16} className="text-indigo-600" />;
      case 'event': return <Calendar size={16} className="text-green-600" />;
      case 'collaboration': return <Users size={16} className="text-blue-600" />;
      case 'resource': return <BookOpen size={16} className="text-amber-600" />;
      default: return <MessageSquare size={16} className="text-gray-600" />;
    }
  };

  // Calculate total unread messages
  const totalUnread = connections.reduce((sum, conn) => sum + conn.unreadMessages, 0);

  return (
    <div className="w-full bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Top Navigation */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-4 sticky top-0 z-10">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-indigo-700">Peer Platform</h1>
            <div className="flex items-center space-x-4">
              {/* Network Button */}
              <div className="relative">
                <button 
                  className="text-gray-600 hover:text-indigo-600" 
                  onClick={() => setShowNetworkSuggestions(!showNetworkSuggestions)}
                >
                  <Users size={20} />
                </button>
                
                {/* Network Suggestions Dropdown */}
                {showNetworkSuggestions && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-20">
                    <div className="p-3 border-b">
                      <h3 className="font-medium">People you may know</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {networkSuggestions.map(person => (
                        <div key={person.id} className="p-3 border-b hover:bg-gray-50 flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                              <User size={16} className="text-indigo-700" />
                            </div>
                            <div>
                              <h4 className="font-medium text-sm">{person.name}</h4>
                              <p className="text-xs text-gray-500">{person.title}</p>
                              <p className="text-xs text-gray-500">{person.institution}</p>
                              <p className="text-xs text-indigo-600">{person.mutualConnections} mutual connections</p>
                            </div>
                          </div>
                          <button 
                            onClick={() => toggleConnection(person.id)}
                            className={`flex items-center justify-center p-2 rounded-full ${
                              person.connected ? 'bg-gray-100' : 'bg-indigo-100 text-indigo-700'
                            }`}
                          >
                            {person.connected ? <UserCheck size={16} /> : <UserPlus size={16} />}
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 text-center">
                      <button className="text-indigo-600 text-sm font-medium">View all suggestions</button>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Messages Button */}
              <div className="relative">
                <button 
                  className="text-gray-600 hover:text-indigo-600 relative" 
                  onClick={() => setShowMessenger(!showMessenger)}
                >
                  <Mail size={20} />
                  {totalUnread > 0 && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">{totalUnread}</span>
                    </div>
                  )}
                </button>
              </div>
              
              {/* Notifications */}
              <button className="text-gray-600 hover:text-indigo-600">
                <Bell size={20} />
              </button>
              
              {/* User Profile */}
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-2">Your Peer Score: 78</span>
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                  <User size={16} className="text-indigo-700" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Feed Filters */}
          <div className="flex overflow-x-auto space-x-2 pb-2">
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${filters.active === 'all' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setFilters({...filters, active: 'all'})}
            >
              All
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex items-center ${filters.active === 'projects' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setFilters({...filters, active: 'projects'})}
            >
              <FileText size={14} className="mr-1" /> Projects
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex items-center ${filters.active === 'events' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setFilters({...filters, active: 'events'})}
            >
              <Calendar size={14} className="mr-1" /> Events
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex items-center ${filters.active === 'collaborations' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setFilters({...filters, active: 'collaborations'})}
            >
              <Users size={14} className="mr-1" /> Collaborations
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex items-center ${filters.active === 'resources' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setFilters({...filters, active: 'resources'})}
            >
              <BookOpen size={14} className="mr-1" /> Resources
            </button>
          </div>
        </div>
        
        {/* Messenger Overlay */}
        {showMessenger && (
          <div className="fixed bottom-0 right-8 w-80 z-20">
            <div className="bg-white rounded-t-lg shadow-lg border border-gray-200">
              {/* Messenger Header */}
              <div className="p-3 bg-indigo-600 text-white rounded-t-lg flex justify-between items-center">
                <div className="flex items-center">
                  {activeChat ? (
                    <h3 className="font-medium">
                      {connections.find(c => c.id === activeChat.with)?.name}
                    </h3>
                  ) : (
                    <h3 className="font-medium">Messages</h3>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  {activeChat && (
                    <button onClick={() => setActiveChat(null)}>
                      <ChevronDown size={18} />
                    </button>
                  )}
                  <button onClick={() => setShowMessenger(false)}>
                    <X size={18} />
                  </button>
                </div>
              </div>
              
              {/* Messenger Content */}
              {!activeChat ? (
                // Conversations List
                <div className="h-96 overflow-y-auto">
                  {connections.map(connection => (
                    <div 
                      key={connection.id} 
                      className="p-3 hover:bg-gray-50 cursor-pointer border-b flex items-center justify-between"
                      onClick={() => openChat(connection.id)}
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                          <User size={16} className="text-indigo-700" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{connection.name}</h4>
                          <p className="text-xs text-gray-500">{connection.title}</p>
                        </div>
                      </div>
                      {connection.unreadMessages > 0 && (
                        <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">{connection.unreadMessages}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                // Active Chat
                <div>
                  <div className="h-80 p-3 overflow-y-auto bg-gray-50">
                    {activeChat.messages.map(message => (
                      <div 
                        key={message.id} 
                        className={`mb-3 flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                      >
                        {message.sender !== 'me' && (
                          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                            <User size={14} className="text-indigo-700" />
                          </div>
                        )}
                        <div className={`max-w-xs p-3 rounded-lg ${
                          message.sender === 'me' 
                            ? 'bg-indigo-600 text-white' 
                            : 'bg-white border text-gray-800'
                        }`}>
                          <p className="text-sm">{message.text}</p>
                          <p className={`text-xs mt-1 ${
                            message.sender === 'me' ? 'text-indigo-100' : 'text-gray-500'
                          }`}>{message.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-t">
                    <div className="flex items-center">
                      <input 
                        type="text" 
                        placeholder="Type a message..." 
                        className="flex-1 text-sm border-none outline-none bg-gray-50 py-2 px-3 rounded-full"
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      />
                      <button className="ml-2 text-gray-500">
                        <Paperclip size={18} />
                      </button>
                      <button className="ml-2 text-gray-500">
                        <Smile size={18} />
                      </button>
                      <button 
                        onClick={sendMessage}
                        className="ml-2 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center"
                      >
                        <SendHorizontal size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* Rest of your existing content */}
        {/* Create Post Button */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <button className="w-full py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700">
            Create New Post
          </button>
          <div className="flex justify-around mt-3">
            <button className="flex items-center text-xs text-gray-600">
              <FileText size={14} className="mr-1 text-indigo-600" /> Project
            </button>
            <button className="flex items-center text-xs text-gray-600">
              <Users size={14} className="mr-1 text-blue-600" /> Collaboration
            </button>
            <button className="flex items-center text-xs text-gray-600">
              <Calendar size={14} className="mr-1 text-green-600" /> Event
            </button>
            <button className="flex items-center text-xs text-gray-600">
              <Briefcase size={14} className="mr-1 text-amber-600" /> Opportunity
            </button>
          </div>
        </div>

        {/* Network Suggestions Panel */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-medium text-gray-700">People You May Know</h3>
            <button className="text-xs text-indigo-600 font-medium">See All</button>
          </div>
          <div className="flex space-x-3 overflow-x-auto pb-2">
            {networkSuggestions.slice(0, 4).map(person => (
              <div key={person.id} className="min-w-max bg-gray-50 rounded-lg p-3 border">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-2">
                    <User size={24} className="text-indigo-700" />
                  </div>
                  <h4 className="font-medium text-sm text-center">{person.name}</h4>
                  <p className="text-xs text-gray-500 text-center">{person.title}</p>
                  <p className="text-xs text-gray-500 text-center mb-2">{person.institution}</p>
                  <p className="text-xs text-indigo-600">{person.mutualConnections} mutual connections</p>
                  <button 
                    onClick={() => toggleConnection(person.id)}
                    className={`mt-2 px-4 py-1 rounded-full text-xs font-medium ${
                      person.connected 
                        ? 'bg-gray-200 text-gray-700' 
                        : 'bg-indigo-600 text-white'
                    }`}
                  >
                    {person.connected ? 'Connected' : 'Connect'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Topic Hubs */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Your Topic Hubs</h3>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {['Technology', 'Data Science', 'Design', 'Business', 'Media'].map((topic, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-0.5">
                  <div className="w-full h-full rounded-full bg-white p-0.5">
                    <div className="w-full h-full rounded-full bg-indigo-100 flex items-center justify-center">
                      {index === 0 && <BookOpen size={20} className="text-indigo-700" />}
                      {index === 1 && <FileText size={20} className="text-indigo-700" />}
                      {index === 2 && <Users size={20} className="text-indigo-700" />}
                      {index === 3 && <Briefcase size={20} className="text-indigo-700" />}
                      {index === 4 && <Calendar size={20} className="text-indigo-700" />}
                    </div>
                  </div>
                </div>
                <span className="text-xs mt-1">{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Posts */}
        {posts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-md mb-4">
            {/* Post Header */}
            <div className="flex items-center justify-between p-3 border-b">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                  <User size={18} className="text-indigo-700" />
                </div>
                <div>
                  <div className="flex items-center">
                    <h4 className="font-medium text-sm">{post.user.name}</h4>
                    {post.user.isPartner && (
                      <span className="ml-1 px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">Partner</span>
                    )}
                    {post.user.isVerified && (
                      <span className="ml-1 px-1.5 py-0.5 bg-green-100 text-green-700 rounded text-xs">Verified</span>
                    )}
                  </div>
                  <div className="flex items-center">
                    <p className="text-xs text-gray-500">@{post.user.username}</p>
                    {post.user.institution && (
                      <p className="text-xs text-gray-500 ml-1">• {post.user.institution}</p>
                    )}
                    {post.user.peerScore && (
                      <div className="flex items-center ml-1">
                        <Award size={12} className="text-amber-500" />
                        <span className="text-xs text-amber-500">{post.user.peerScore}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-xs text-gray-400 mr-2">{post.timestamp}</span>
                <button>
                  <MoreHorizontal size={18} className="text-gray-500" />
                </button>
              </div>
            </div>

            {/* Post Type Indicator */}
            <div className="flex items-center px-3 py-2 bg-gray-50">
              {getIconForPostType(post.type)}
              <span className="ml-1 text-sm font-medium capitalize">{post.type}</span>
              {post.location && (
                <span className="ml-2 text-xs text-gray-500">📍 {post.location}</span>
              )}
              {post.date && (
                <span className="ml-2 text-xs text-gray-500">📅 {post.date}</span>
              )}
            </div>

            {/* Post Content */}
            <div className="p-3">
              <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-700 mb-3">{post.description}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag, index) => (
                  <span key={index} className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full text-xs">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Post Actions */}
              <div className="flex justify-between mt-4 pt-3 border-t">
                <div className="flex space-x-4">
                  <button 
                    onClick={() => toggleEngagement(post.id)}
                    className="flex items-center text-sm"
                  >
                    <ThumbsUp size={18} className={post.engaged ? "text-indigo-600 fill-indigo-600" : "text-gray-600"} />
                    <span className="ml-1">{post.engagement}</span>
                  </button>
                  <button className="flex items-center text-sm text-gray-600">
                    <MessageSquare size={18} />
                    <span className="ml-1">{post.comments}</span>
                  </button>
                  <button className="flex items-center text-sm text-gray-600">
                    <Share2 size={18} />
                  </button>
                </div>
                <button 
                  onClick={() => toggleSave(post.id)}
                  className="flex items-center text-sm"
                >
                  <Bookmark size={18} className={post.saved ? "text-indigo-600 fill-indigo-600" : "text-gray-600"} />
                </button>
              </div>
            </div>

            {/* Comment Input */}
            <div className="p-3 border-t flex items-center">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                <User size={14} className="text-indigo-700" />
              </div>
              <input 
                type="text" 
                placeholder="Add a comment..." 
                className="flex-1 text-sm border-none outline-none bg-gray-50 py-2 px-3 rounded-full"
              />
              <button className="text-indigo-600 text-sm font-medium ml-2">Post</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeerPlatformFeed;