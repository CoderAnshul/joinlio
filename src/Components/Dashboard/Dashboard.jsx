import React, { useState } from 'react';
import { 
  BookOpen, Bell, Users, Award, Compass,
  PieChart, Calendar, Clock, Bookmark, Plus, TrendingUp, Coffee
} from 'lucide-react';

const DashboardLayout = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const studentData = {
    name: 'John Doe',
    grade: 'Sophomore',
    university: 'Tech University',
    topics: ['Media', 'Technology', 'Entrepreneurship'],
    peerScore: 756,
    notifications: 4,
    upcomingEvents: [
      { title: 'Group Project Meeting', date: 'Today, 3:00 PM', topic: 'Technology' },
      { title: 'Media Workshop', date: 'Tomorrow, 1:00 PM', topic: 'Media' }
    ],
    recommendedTools: [
      { name: 'Business Plan Template', topic: 'Entrepreneurship', users: 1240 },
      { name: 'Video Editing Suite', topic: 'Media', users: 982 }
    ],
    trendingTopics: [
      { name: 'AI Development', engagement: 89 },
      { name: 'Mobile Marketing', engagement: 76 },
      { name: 'Student Travel', engagement: 65 }
    ],
    recentCollaborators: [
      { name: 'Sarah Johnson', topics: 3, projects: 2 },
      { name: 'Michael Lee', topics: 2, projects: 1 },
      { name: 'Emily Chen', topics: 4, projects: 3 }
    ],
    services: [
      { name: 'Camera Rental Service', discount: '25% off', topic: 'Media' },
      { name: 'Co-working Space', discount: '1 free day pass', topic: 'Entrepreneurship' }
    ]
  };

  return (
    <div className="min-h-screen bg-white font-sans">
 

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        {/* <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-lg shadow-md p-6 text-white mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h2 className="text-xl font-semibold mb-1">Welcome back, {studentData.name}!</h2>
              <p className="opacity-90">{studentData.grade} • {studentData.university}</p>
            </div>
            <div className="mt-4 md:mt-0 bg-blue-800 bg-opacity-30 py-2 px-4 rounded-full flex items-center">
              <Award size={18} className="mr-2" />
              <span>Peer Score: <strong>{studentData.peerScore}</strong></span>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {studentData.topics.map((topic, index) => (
              <span key={index} className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                {topic}
              </span>
            ))}
            <button className="bg-white bg-opacity-10 px-3 py-1 rounded-full text-sm flex items-center">
              <Plus size={14} className="mr-1" /> Add Topic
            </button>
          </div>
        </div> */}

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="flex overflow-x-auto">
            <button 
              onClick={() => setActiveTab('overview')} 
              className={`px-4 py-3 flex items-center whitespace-nowrap ${activeTab === 'overview' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-600'}`}
            >
              <PieChart size={18} className="mr-2" />
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('topics')} 
              className={`px-4 py-3 flex items-center whitespace-nowrap ${activeTab === 'topics' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-600'}`}
            >
              <BookOpen size={18} className="mr-2" />
              Topics
            </button>
            <button 
              onClick={() => setActiveTab('services')} 
              className={`px-4 py-3 flex items-center whitespace-nowrap ${activeTab === 'services' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-600'}`}
            >
              <Coffee size={18} className="mr-2" />
              Services
            </button>
            <button 
              onClick={() => setActiveTab('tools')} 
              className={`px-4 py-3 flex items-center whitespace-nowrap ${activeTab === 'tools' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-600'}`}
            >
              {/* <Tool size={18} className="mr-2" /> */}
              Tools
            </button>
            <button 
              onClick={() => setActiveTab('connections')} 
              className={`px-4 py-3 flex items-center whitespace-nowrap ${activeTab === 'connections' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-600'}`}
            >
              <Users size={18} className="mr-2" />
              Connections
            </button>
            <button 
              onClick={() => setActiveTab('supports')} 
              className={`px-4 py-3 flex items-center whitespace-nowrap ${activeTab === 'supports' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-600'}`}
            >
              {/* <HeartHandshake size={18} className="mr-2" /> */}
              Supports
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - 2/3 width on large screens */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Content Cards */}
            {activeTab === 'overview' && (
              <>
                {/* Your Topics */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Your Topics</h3>
                    <button className="text-blue-600 text-sm font-medium">View All</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {studentData.topics.map((topic, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">{topic}</h4>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>8 Activities</span>
                          <span>12 Content</span>
                        </div>
                        <button className="mt-3 w-full text-center text-blue-600 text-sm py-1.5 border border-blue-600 rounded-md">
                          Explore
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activities */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Recent Activities</h3>
                    <button className="text-blue-600 text-sm font-medium">See All</button>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <BookOpen size={18} className="text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">You commented on "The Future of AI"</h4>
                        <p className="text-sm text-gray-500">Technology Topic • 2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <Users size={18} className="text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Sarah Johnson invited you to collaborate</h4>
                        <p className="text-sm text-gray-500">Media Project • Yesterday</p>
                      </div>
                    </div>
                    <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        {/* <Tool size={18} className="text-blue-600" /> */}
                      </div>
                      <div>
                        <h4 className="font-medium">You used Video Editing Suite</h4>
                        <p className="text-sm text-gray-500">Media Topic • 2 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'topics' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Explore Topics</h3>
                  <button className="bg-blue-600 text-white text-sm px-3 py-1.5 rounded-md flex items-center">
                    <Plus size={16} className="mr-1" /> Create Topic
                  </button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Current Topics */}
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-3 flex items-center">
                      <Bookmark size={16} className="mr-1 text-blue-600" /> Your Topics
                    </h4>
                    {studentData.topics.map((topic, index) => (
                      <div key={index} className="py-2 border-b last:border-0 flex justify-between items-center">
                        <span>{topic}</span>
                        <button className="text-blue-600 text-sm">View</button>
                      </div>
                    ))}
                  </div>
                  
                  {/* Trending Topics */}
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-3 flex items-center">
                      <TrendingUp size={16} className="mr-1 text-red-500" /> Trending Topics
                    </h4>
                    {studentData.trendingTopics.map((topic, index) => (
                      <div key={index} className="py-2 border-b last:border-0 flex justify-between items-center">
                        <span>{topic.name}</span>
                        <button className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          {topic.engagement}% Engagement
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium mb-3">Popular Topics</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {['Travel', 'Photography', 'Finance', 'Marketing', 'Design', 'Gaming'].map((topic, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg text-center">
                        <h5 className="font-medium">{topic}</h5>
                        <p className="text-xs text-gray-500 mt-1">{Math.floor(Math.random() * 1000) + 200} Active Users</p>
                        <button className="mt-2 w-full bg-white border border-gray-200 text-blue-600 text-xs py-1 rounded">
                          Follow
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'services' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Available Services</h3>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search services..." 
                      className="border border-gray-200 rounded-full px-4 py-2 text-sm w-full"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Featured Services</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {studentData.services.map((service, index) => (
                      <div key={index} className="border rounded-lg p-4 flex flex-col">
                        <div className="flex justify-between items-start">
                          <h5 className="font-medium">{service.name}</h5>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                            {service.discount}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Related to: {service.topic}</p>
                        <div className="mt-3 flex justify-end">
                          <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded">
                            Get Access
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Services by Category</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {['Study Resources', 'Career Services', 'Equipment Rental', 'Tutoring', 'Printing', 'Event Spaces', 'Software Licenses', 'Health & Wellness'].map((category, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg text-center">
                        <h5 className="font-medium text-sm">{category}</h5>
                        <button className="mt-2 w-full bg-white border border-gray-200 text-blue-600 text-xs py-1 rounded">
                          Explore
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'tools' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Tools for Success</h3>
                  <button className="text-blue-600 text-sm font-medium">Browse All</button>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Recommended for You</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {studentData.recommendedTools.map((tool, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <h5 className="font-medium">{tool.name}</h5>
                        <p className="text-sm text-gray-500 mt-1">Topic: {tool.topic}</p>
                        <div className="mt-3 flex justify-between items-center">
                          <span className="text-xs text-gray-500">{tool.users} users</span>
                          <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded">
                            Use Tool
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Tools by Category</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="border rounded-lg p-4">
                      <h5 className="font-medium text-gray-800 mb-2">Content Creation</h5>
                      <ul className="space-y-2">
                        <li className="text-sm flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          Video Editing Suite
                        </li>
                        <li className="text-sm flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          Graphic Design Templates
                        </li>
                        <li className="text-sm flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          Audio Recording Suite
                        </li>
                      </ul>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h5 className="font-medium text-gray-800 mb-2">Academic Tools</h5>
                      <ul className="space-y-2">
                        <li className="text-sm flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          Citation Generator
                        </li>
                        <li className="text-sm flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          Research Database Access
                        </li>
                        <li className="text-sm flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          Study Schedule Maker
                        </li>
                      </ul>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h5 className="font-medium text-gray-800 mb-2">Career Development</h5>
                      <ul className="space-y-2">
                        <li className="text-sm flex items-center">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                          Resume Builder
                        </li>
                        <li className="text-sm flex items-center">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                          Portfolio Creator
                        </li>
                        <li className="text-sm flex items-center">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                          Interview Simulator
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'connections' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Your Network</h3>
                  <button className="bg-blue-600 text-white text-sm px-3 py-1.5 rounded-md">
                    Find Connections
                  </button>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Recent Collaborators</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {studentData.recentCollaborators.map((collaborator, index) => (
                      <div key={index} className="border rounded-lg p-4 flex flex-col">
                        <div className="flex items-center mb-3">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                            <span className="text-blue-600 font-medium">{collaborator.name.charAt(0)}</span>
                          </div>
                          <div>
                            <h5 className="font-medium">{collaborator.name}</h5>
                            <p className="text-xs text-gray-500">{collaborator.topics} shared topics</p>
                          </div>
                        </div>
                        <div className="mt-auto flex justify-between items-center">
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">{collaborator.projects} projects</span>
                          <button className="text-blue-600 text-sm">Message</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Suggested Connections</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                        <span className="text-gray-600 font-medium">A</span>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium">Alex Rivera</h5>
                        <p className="text-xs text-gray-500">4 shared interests • Technology</p>
                      </div>
                      <button className="bg-blue-600 text-white text-xs px-3 py-1 rounded">
                        Connect
                      </button>
                    </div>
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                        <span className="text-gray-600 font-medium">J</span>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium">Jordan Kim</h5>
                        <p className="text-xs text-gray-500">2 shared interests • Media</p>
                      </div>
                      <button className="bg-blue-600 text-white text-xs px-3 py-1 rounded">
                        Connect
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'supports' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Available Support</h3>
                  <button className="bg-blue-600 text-white text-sm px-3 py-1.5 rounded-md">
                    Get Help
                  </button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-5">
                    <h4 className="font-medium mb-3">Academic Support</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center text-sm">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <BookOpen size={16} className="text-green-600" />
                        </div>
                        <span>Assignment Feedback</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <BookOpen size={16} className="text-green-600" />
                        </div>
                        <span>Research Assistance</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <BookOpen size={16} className="text-green-600" />
                        </div>
                        <span>Study Group Formation</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-lg p-5">
                    <h4 className="font-medium mb-3">Technical Support</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center text-sm">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          {/* <Tool size={16} className="text-blue-600" /> */}
                        </div>
                        <span>Platform Navigation Help</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          {/* <Tool size={16} className="text-blue-600" /> */}
                        </div>
                        <span>Tool Usage Tutorials</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <Tool size={16} className="text-blue-600" />
                        </div>
                        <span>Account Settings Help</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-lg p-5 sm:col-span-2">
                    <h4 className="font-medium mb-3">Contact Support Team</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Need help with something specific? Reach out to our dedicated support team.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="flex-1 bg-blue-600 text-white py-2 rounded-md flex items-center justify-center">
                        <MessageSquare size={16} className="mr-2" /> Chat Support
                      </button>
                      <button className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-md flex items-center justify-center">
                        <BookOpen size={16} className="mr-2" /> Support Center
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - 1/3 width on large screens */}
          <div className="space-y-6">
            {/* Calendar & Events */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Upcoming Events</h3>
                <button className="text-blue-600 text-sm font-medium">View Calendar</button>
              </div>
              <div className="space-y-3">
                {studentData.upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                    <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                      <Calendar size={18} className="text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">{event.title}</h4>
                      <p className="text-sm text-gray-500">{event.date}</p>
                      <span className="mt-1 inline-block bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded">
                        {event.topic}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full text-center text-blue-600 text-sm py-2 border border-blue
-600 rounded-md">
                Add Event
                </button>
            </div>
                
                {/* Trending Topics */}

                <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">Trending Topics</h3>
                        <button className="text-blue-600 text-sm font-medium">View All</button>
                    </div>
                    <div className="space-y-3">
                        {studentData.trendingTopics.map((topic, index) => (
                        <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                            <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                            <Compass size={18} className="text-purple-600" />
                            </div>
                            <div>
                            <h4 className="font-medium">{topic.name}</h4>
                            <p className="text-sm text-gray-500">{topic.engagement}% Engagement</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                    
                    {/* Services */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-800">Exclusive Services</h3>
                            <button className="text-blue-600 text-sm font-medium">View All</button>
                        </div>
                        <div className="space-y-3">
                            {studentData.services.map((service, index) => (
                            <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                                <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                                <Clock size={18} className="text-yellow-600" />
                                </div>
                                <div>
                                <h4 className="font-medium">{service.name}</h4>
                                <p className="text-sm text-gray-500">{service.discount}</p>
                                </div>
                            </div>
                            ))}
                        </div>
                        </div>
                    </div>
                </div>
            
        </main>
    </div>



       
    );
};

export default DashboardLayout;
