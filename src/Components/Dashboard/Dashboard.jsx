import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Bell, Users, Award, Compass,
  PieChart, Calendar, Clock, Bookmark, Plus, TrendingUp, Coffee,
  CheckCircle, Clock as ClockIcon, XCircle, UserPlus, AlertTriangle
} from 'lucide-react';

const DashboardLayout = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [role, setRole] = useState('');
  const [planDetails, setPlanDetails] = useState({});
  const [students, setStudents] = useState({
    verified: [],
    pending: [],
    rejected: []
  });
  
  // Load role from localStorage on component mount
  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    if (storedRole) {
      setRole(storedRole);
    }
    
    // Mock data - in a real app, this would come from an API
    setPlanDetails({
      name: 'Premium Plan',
      startDate: '2025-01-15',
      expiryDate: '2025-12-31',
      features: ['Unlimited Student Enrollments', 'Priority Support', 'Advanced Analytics'],
      usageStats: {
        studentCapacity: 500,
        currentStudents: 342,
        storageUsed: '7.2GB',
        storageTotal: '10GB'
      }
    });
    
    // Mock student data
    setStudents({
      verified: [
        { id: 1, name: 'Sarah Johnson', enrollmentDate: '2025-02-10', course: 'Media Studies' },
        { id: 2, name: 'Michael Lee', enrollmentDate: '2025-02-15', course: 'Technology' },
        { id: 3, name: 'Emily Chen', enrollmentDate: '2025-03-01', course: 'Entrepreneurship' }
      ],
      pending: [
        { id: 4, name: 'David Williams', enrollmentDate: '2025-03-10', course: 'Media Studies' },
        { id: 5, name: 'Lisa Garcia', enrollmentDate: '2025-03-12', course: 'Technology' }
      ],
      rejected: [
        { id: 6, name: 'James Brown', enrollmentDate: '2025-02-20', course: 'Technology', reason: 'Incomplete documentation' }
      ]
    });
  }, []);

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

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  // Function to calculate days remaining
  const getDaysRemaining = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = Math.abs(expiry - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Function to handle student verification
  const handleVerifyStudent = (studentId) => {
    // In a real app, this would make an API call
    const studentToVerify = students.pending.find(student => student.id === studentId);
    if (studentToVerify) {
      setStudents({
        verified: [...students.verified, studentToVerify],
        pending: students.pending.filter(student => student.id !== studentId),
        rejected: students.rejected
      });
    }
  };

  // Function to handle student rejection
  const handleRejectStudent = (studentId) => {
    // In a real app, this would make an API call
    const studentToReject = students.pending.find(student => student.id === studentId);
    if (studentToReject) {
      const rejectedStudent = {...studentToReject, reason: 'Manually rejected'};
      setStudents({
        verified: students.verified,
        pending: students.pending.filter(student => student.id !== studentId),
        rejected: [...students.rejected, rejectedStudent]
      });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Welcome Section for Institute */}
        {role === 'institute' && (
          <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-lg shadow-md p-6 text-white mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h2 className="text-xl font-semibold mb-1">Welcome back, Tech University!</h2>
                <p className="opacity-90">Institute Dashboard • {planDetails.name}</p>
              </div>
              <div className="mt-4 md:mt-0 bg-blue-800 bg-opacity-30 py-2 px-4 rounded-full flex items-center">
                <Award size={18} className="mr-2" />
                <span>Students: <strong>{students.verified.length}</strong></span>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm flex items-center">
                <Clock size={14} className="mr-1" /> Expires: {formatDate(planDetails.expiryDate)}
              </span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm flex items-center">
                <AlertTriangle size={14} className="mr-1" /> {getDaysRemaining(planDetails.expiryDate)} days remaining
              </span>
              <button className="bg-white bg-opacity-10 px-3 py-1 rounded-full text-sm flex items-center">
                <Plus size={14} className="mr-1" /> Upgrade Plan
              </button>
            </div>
          </div>
        )}

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
            {role === 'institute' && (
              <button 
                onClick={() => setActiveTab('enrollments')} 
                className={`px-4 py-3 flex items-center whitespace-nowrap ${activeTab === 'enrollments' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-600'}`}
              >
                <UserPlus size={18} className="mr-2" />
                Enrollments
              </button>
            )}
             {role !== 'institute' && ( <button 
              onClick={() => setActiveTab('topics')} 
              className={`px-4 py-3 flex items-center whitespace-nowrap ${activeTab === 'topics' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-600'}`}
            >
              <BookOpen size={18} className="mr-2" />
              Topics
            </button>)}
            {role !== 'institute' && ( <button 
              onClick={() => setActiveTab('services')} 
              className={`px-4 py-3 flex items-center whitespace-nowrap ${activeTab === 'services' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-600'}`}
            >
              <Coffee size={18} className="mr-2" />
              Services
            </button>)}
            {role !== 'institute' && (  <button 
              onClick={() => setActiveTab('tools')} 
              className={`px-4 py-3 flex items-center whitespace-nowrap ${activeTab === 'tools' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-600'}`}
            >
              Tools
            </button>)}
            {role !== 'institute' && (   <button 
              onClick={() => setActiveTab('connections')} 
              className={`px-4 py-3 flex items-center whitespace-nowrap ${activeTab === 'connections' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-600'}`}
            >
              <Users size={18} className="mr-2" />
              Connections
            </button>)}
            {role !== 'institute' && (  <button 
              onClick={() => setActiveTab('supports')} 
              className={`px-4 py-3 flex items-center whitespace-nowrap ${activeTab === 'supports' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-600'}`}
            >
              Supports
            </button>)}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - 2/3 width on large screens */}
          <div className="lg:col-span-2 space-y-6">
            {/* Institute Overview */}
            {role === 'institute' && activeTab === 'overview' && (
              <>
                {/* Plan Details */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Subscription Plan</h3>
                    <button className="text-blue-600 text-sm font-medium">Upgrade</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-800 mb-2">{planDetails.name}</h4>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Start Date:</span>
                        <span className="font-medium">{formatDate(planDetails.startDate)}</span>
                      </div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Expiry Date:</span>
                        <span className="font-medium">{formatDate(planDetails.expiryDate)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Days Remaining:</span>
                        <span className="font-medium">{getDaysRemaining(planDetails.expiryDate)} days</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Usage Statistics</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Students</span>
                            <span>{planDetails.usageStats?.currentStudents}/{planDetails.usageStats?.studentCapacity}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(planDetails.usageStats?.currentStudents / planDetails.usageStats?.studentCapacity) * 100}%` }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Storage</span>
                            <span>{planDetails.usageStats?.storageUsed}/{planDetails.usageStats?.storageTotal}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Plan Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {planDetails.features?.map((feature, index) => (
                        <div key={index} className="flex items-center bg-gray-50 p-2 rounded">
                          <CheckCircle size={16} className="text-green-600 mr-2" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enrollment Summary */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Enrollment Summary</h3>
                    <button className="text-blue-600 text-sm font-medium">View Details</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <div className="flex items-center justify-center mb-2">
                        <CheckCircle size={20} className="text-green-600 mr-2" />
                        <h4 className="font-medium">Verified Students</h4>
                      </div>
                      <p className="text-3xl font-bold text-green-700">{students.verified.length}</p>
                      <p className="text-sm text-gray-600 mt-1">Active enrollments</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg text-center">
                      <div className="flex items-center justify-center mb-2">
                        <ClockIcon size={20} className="text-yellow-600 mr-2" />
                        <h4 className="font-medium">Pending Students</h4>
                      </div>
                      <p className="text-3xl font-bold text-yellow-700">{students.pending.length}</p>
                      <p className="text-sm text-gray-600 mt-1">Awaiting verification</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg text-center">
                      <div className="flex items-center justify-center mb-2">
                        <XCircle size={20} className="text-red-600 mr-2" />
                        <h4 className="font-medium">Rejected Students</h4>
                      </div>
                      <p className="text-3xl font-bold text-red-700">{students.rejected.length}</p>
                      <p className="text-sm text-gray-600 mt-1">Failed verification</p>
                    </div>
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
                        <UserPlus size={18} className="text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">New student enrollment: Lisa Garcia</h4>
                        <p className="text-sm text-gray-500">Technology Topic • 2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <CheckCircle size={18} className="text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Student verification: Michael Lee</h4>
                        <p className="text-sm text-gray-500">Technology Topic • Yesterday</p>
                      </div>
                    </div>
                    <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <BookOpen size={18} className="text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">New course added: Advanced AI</h4>
                        <p className="text-sm text-gray-500">Technology Topic • 2 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Student Enrollments Tab */}
            {role === 'institute' && activeTab === 'enrollments' && (
              <>
                {/* Pending Enrollments */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Pending Enrollments</h3>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {students.pending.length} Pending
                    </span>
                  </div>
                  
                  {students.pending.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Student
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Course
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Date
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {students.pending.map((student) => (
                            <tr key={student.id}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                                    <span className="text-gray-600 font-medium">{student.name.charAt(0)}</span>
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">{student.name}</div>
                                    <div className="text-sm text-gray-500">ID: {student.id}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{student.course}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{formatDate(student.enrollmentDate)}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button
                                  onClick={() => handleVerifyStudent(student.id)}
                                  className="text-green-600 hover:text-green-900 mr-3"
                                >
                                  Verify
                                </button>
                                <button
                                  onClick={() => handleRejectStudent(student.id)}
                                  className="text-red-600 hover:text-red-900"
                                >
                                  Reject
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No pending enrollments at this time.</p>
                    </div>
                  )}
                </div>

                {/* Verified Students */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Verified Students</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {students.verified.length} Active
                    </span>
                  </div>
                  
                  {students.verified.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Student
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Course
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Enrollment Date
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {students.verified.map((student) => (
                            <tr key={student.id}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                    <span className="text-blue-600 font-medium">{student.name.charAt(0)}</span>
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">{student.name}</div>
                                    <div className="text-sm text-gray-500">ID: {student.id}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{student.course}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{formatDate(student.enrollmentDate)}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  Active
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No verified students yet.</p>
                    </div>
                  )}
                </div>

                {/* Rejected Students */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Rejected Enrollments</h3>
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {students.rejected.length} Rejected
                    </span>
                  </div>
                  
                  {students.rejected.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Student
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Course
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Date
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Reason
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {students.rejected.map((student) => (
                            <tr key={student.id}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                                    <span className="text-red-600 font-medium">{student.name.charAt(0)}</span>
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">{student.name}</div>
                                    <div className="text-sm text-gray-500">ID: {student.id}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{student.course}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{formatDate(student.enrollmentDate)}</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-red-600">{student.reason}</div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No rejected enrollments.</p>
                    </div>
                  )}
                </div>
              </>
            )}
             {role != 'institute' && activeTab === 'overview' && (
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

             {role != 'institute' && activeTab === 'topics' && (
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

            { role != 'institute' && activeTab === 'services' && (
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
            
            {role != 'institute' && activeTab === 'tools' && (
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
            
             {role != 'institute' && activeTab === 'connections' && (
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
            
            {role != 'institute' && activeTab === 'supports' && (
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
                          {/* <Tool size={16} className="text-blue-600" /> */}
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
                       Chat Support
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
          {role != 'institute' &&(
            <div className="space-y-6">
            {/* Calendar & Events */}
            {/* <div className="bg-white rounded-lg shadow-sm p-6">
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
            </div> */}
                
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
          )}
                </div>
            
        </main>
    </div>



       
    );
};

export default DashboardLayout;
