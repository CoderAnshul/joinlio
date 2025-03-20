import React, { useState, useEffect } from 'react';
import { User, Book, MessageSquare, Award, Edit2, Image, MapPin, Calendar, Clock, Shield, AlertCircle, CheckCircle } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [verificationStatus, setVerificationStatus] = useState('pending'); // 'pending', 'verified', 'rejected'
  const [verificationMethod, setVerificationMethod] = useState(null); // 'studentId', 'alumniCard', 'enrollmentLetter'
  const [uploadedDocument, setUploadedDocument] = useState(null);
  const [isFromPartnerInstitution, setIsFromPartnerInstitution] = useState(false);
  const [trialEndDate, setTrialEndDate] = useState(null);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  
  const student = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    course: 'Computer Science',
    year: 'Sophomore',
    university: 'Tech University',
    dateOfBirth: 'May 15, 2003',
    joinDate: 'January 10, 2024',
    interests: ['Media', 'Technology', 'Entrepreneurship'],
    peerScore: 756,
    profileCompleteness: 85,
    achievements: [
      { title: 'Early Adopter', description: 'Joined during platform launch', date: 'Jan 2024' },
      { title: 'Content Creator', description: 'Published 5 blog posts', date: 'Feb 2024' },
      { title: 'Collaborator', description: 'Participated in 3 projects', date: 'Mar 2024' }
    ],
    activities: [
      { type: 'project', title: 'Mobile App Development', status: 'In Progress', collaborators: 4 },
      { type: 'blog', title: 'The Future of AI in Education', views: 127, likes: 42 }
    ]
  };

  // Calculate trial end date when component mounts
  useEffect(() => {
    if (!isFromPartnerInstitution && verificationStatus === 'verified') {
      // Set trial end date to 1 month from now
      const endDate = new Date();
      endDate.setMonth(endDate.getMonth() + 1);
      setTrialEndDate(endDate.toLocaleDateString());
    }
  }, [isFromPartnerInstitution, verificationStatus]);

  // Handle document upload
  const handleDocumentUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedDocument(file.name);
    }
  };

  // Handle verification submission
  const handleVerificationSubmit = () => {
    if (verificationMethod && uploadedDocument) {
      // Simulate verification process (would be a server call in a real app)
      setVerificationStatus('inProgress');
      
      // Simulate verification delay
      setTimeout(() => {
        setVerificationStatus('verified');
        setShowVerificationModal(false);
      }, 2000);
    }
  };

  // Handle university partnership toggle
  const togglePartnerInstitution = () => {
    setIsFromPartnerInstitution(!isFromPartnerInstitution);
  };

  // Check if content should be hidden based on verification status
  const isContentHidden = verificationStatus !== 'verified';

  // Render verification banner
  const renderVerificationBanner = () => {
    if (verificationStatus === 'pending') {
      return (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <div className="flex items-center">
            <AlertCircle size={24} className="text-yellow-500 mr-2" />
            <div>
              <p className="font-medium text-yellow-800">Verification Required</p>
              <p className="text-sm text-yellow-700">Please verify your student status to access all features.</p>
              <button 
                onClick={() => setShowVerificationModal(true)} 
                className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded-md text-sm"
              >
                Verify Now
              </button>
            </div>
          </div>
        </div>
      );
    } else if (verificationStatus === 'inProgress') {
      return (
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
          <div className="flex items-center">
            <Shield size={24} className="text-blue-500 mr-2" />
            <div>
              <p className="font-medium text-blue-800">Verification In Progress</p>
              <p className="text-sm text-blue-700">We're currently verifying your student status.</p>
            </div>
          </div>
        </div>
      );
    } else if (verificationStatus === 'verified') {
      return (
        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
          <div className="flex items-center">
            <CheckCircle size={24} className="text-green-500 mr-2" />
            <div>
              <p className="font-medium text-green-800">Verification Complete</p>
              <p className="text-sm text-green-700">
                {isFromPartnerInstitution ? 
                  "You have full access to all platform features." : 
                  `Your 1-month free trial ends on ${trialEndDate}.`}
              </p>
            </div>
          </div>
        </div>
      );
    } else if (verificationStatus === 'rejected') {
      return (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
          <div className="flex items-center">
            <AlertCircle size={24} className="text-red-500 mr-2" />
            <div>
              <p className="font-medium text-red-800">Verification Failed</p>
              <p className="text-sm text-red-700">Your student status could not be verified.</p>
              <button 
                onClick={() => setShowVerificationModal(true)} 
                className="mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md text-sm"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  // Verification modal
  const renderVerificationModal = () => {
    if (!showVerificationModal) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">Student Verification</h2>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Select Verification Method</label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input 
                  type="radio" 
                  id="studentId" 
                  name="verificationMethod" 
                  className="mr-2"
                  onChange={() => setVerificationMethod('studentId')}
                />
                <label htmlFor="studentId">Student ID (for current students)</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="radio" 
                  id="alumniCard" 
                  name="verificationMethod" 
                  className="mr-2"
                  onChange={() => setVerificationMethod('alumniCard')}
                />
                <label htmlFor="alumniCard">Alumni Card (for graduates)</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="radio" 
                  id="enrollmentLetter" 
                  name="verificationMethod" 
                  className="mr-2"
                  onChange={() => setVerificationMethod('enrollmentLetter')}
                />
                <label htmlFor="enrollmentLetter">Enrollment Letter (for newly enrolled students)</label>
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Upload Document</label>
            <input 
              type="file" 
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
              onChange={handleDocumentUpload}
            />
            {uploadedDocument && (
              <p className="text-sm text-green-600 mt-1">File uploaded: {uploadedDocument}</p>
            )}
          </div>
          
          <div className="mb-4">
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="partnerInstitution" 
                className="mr-2"
                checked={isFromPartnerInstitution}
                onChange={togglePartnerInstitution}
              />
              <label htmlFor="partnerInstitution">I am from a partner institution</label>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Students from partnered institutions get free access to the platform.
              Other students get a 1-month free trial.
            </p>
          </div>
          
          <div className="flex justify-end space-x-2">
            <button 
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
              onClick={() => setShowVerificationModal(false)}
            >
              Cancel
            </button>
            <button 
              className={`bg-blue-600 text-white px-4 py-2 rounded-md ${(!verificationMethod || !uploadedDocument) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
              onClick={handleVerificationSubmit}
              disabled={!verificationMethod || !uploadedDocument}
            >
              Submit Verification
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-5 font-sans bg-gray-50 min-h-screen">
      {/* Verification Banner */}
      {renderVerificationBanner()}
      
      {/* Header with Cover Photo */}
      <div className="relative rounded-lg overflow-hidden mb-4 h-40 bg-blue-600">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-500 opacity-90"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h1 className="text-2xl font-bold">{student.name}</h1>
          <p className="text-sm">{student.university}</p>
          {verificationStatus === 'verified' && (
            <div className="flex items-center mt-1">
              <Shield size={14} className="text-green-300 mr-1" />
              <span className="text-xs text-green-300">Verified Student</span>
            </div>
          )}
        </div>
        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
          <Edit2 size={16} className="text-blue-600" />
        </button>
      </div>

      {/* Profile Content */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Column */}
        <div className="w-full md:w-1/3">
          {/* Profile Card */}
          <div className="bg-white rounded-lg shadow-md p-5 mb-4">
            <div className="flex flex-col items-center mb-4">
              <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                <User size={48} className="text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold">{student.name}</h2>
              <p className="text-gray-500">{student.email}</p>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex items-center mb-2">
                <Book size={16} className="text-gray-500 mr-2" />
                <span className="text-gray-700">{student.course}, {student.year}</span>
              </div>
              {isContentHidden ? (
                <div className="text-center my-4">
                  <Shield size={24} className="mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">Additional details visible after verification</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center mb-2">
                    <Calendar size={16} className="text-gray-500 mr-2" />
                    <span className="text-gray-700">Born: {student.dateOfBirth}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="text-gray-500 mr-2" />
                    <span className="text-gray-700">Joined: {student.joinDate}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Interests & Topics */}
          <div className="bg-white rounded-lg shadow-md p-5 mb-4">
            <h3 className="font-semibold text-lg mb-3">Interests & Topics</h3>
            {isContentHidden ? (
              <div className="text-center my-4">
                <Shield size={24} className="mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">Content visible after verification</p>
                <button 
                  onClick={() => setShowVerificationModal(true)} 
                  className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-md text-sm"
                >
                  Verify Now
                </button>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {student.interests.map((interest, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {interest}
                  </span>
                ))}
                <button className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm flex items-center">
                  <span className="mr-1">+</span> Add
                </button>
              </div>
            )}
          </div>

          {/* Peer Score */}
          <div className="bg-white rounded-lg shadow-md p-5">
            <h3 className="font-semibold text-lg mb-3">Peer Score</h3>
            {isContentHidden ? (
              <div className="text-center my-4">
                <Shield size={24} className="mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">Score visible after verification</p>
                <button 
                  onClick={() => setShowVerificationModal(true)} 
                  className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-md text-sm"
                >
                  Verify Now
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700">Score</span>
                  <span className="text-2xl font-bold text-blue-600">{student.peerScore}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${student.profileCompleteness}%` }}></div>
                </div>
                <p className="text-sm text-gray-500 mt-1">Profile {student.profileCompleteness}% complete</p>
              </>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-2/3">
          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-md mb-4">
            <div className="flex border-b">
              <button 
                onClick={() => setActiveTab('overview')} 
                className={`flex-1 py-3 px-4 text-center ${activeTab === 'overview' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-500'}`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveTab('projects')} 
                className={`flex-1 py-3 px-4 text-center ${activeTab === 'projects' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-500'}`}
              >
                Projects
              </button>
              <button 
                onClick={() => setActiveTab('content')} 
                className={`flex-1 py-3 px-4 text-center ${activeTab === 'content' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-500'}`}
              >
                Content
              </button>
              <button 
                onClick={() => setActiveTab('achievements')} 
                className={`flex-1 py-3 px-4 text-center ${activeTab === 'achievements' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-500'}`}
              >
                Achievements
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-5">
              {isContentHidden ? (
                <div className="text-center py-8">
                  <Shield size={48} className="mx-auto text-gray-400 mb-3" />
                  <h3 className="font-medium text-lg mb-1">Content Restricted</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Please verify your student status to access all features of the platform.
                  </p>
                  <button 
                    onClick={() => setShowVerificationModal(true)} 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
                  >
                    Verify Now
                  </button>
                </div>
              ) : (
                <>
                  {activeTab === 'overview' && (
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Platform Activity</h3>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-700">Projects</span>
                            <span className="text-xl font-bold text-blue-600">3</span>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-700">Collaborations</span>
                            <span className="text-xl font-bold text-blue-600">7</span>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-700">Content Created</span>
                            <span className="text-xl font-bold text-blue-600">5</span>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-700">Tools Used</span>
                            <span className="text-xl font-bold text-blue-600">12</span>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-lg mb-3">Recent Activity</h3>
                      <div className="space-y-3">
                        {student.activities.map((activity, index) => (
                          <div key={index} className="bg-gray-50 p-3 rounded-lg flex items-center">
                            {activity.type === 'project' ? (
                              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                <MapPin size={20} className="text-green-600" />
                              </div>
                            ) : (
                              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                                <MessageSquare size={20} className="text-purple-600" />
                              </div>
                            )}
                            <div className="flex-1">
                              <h4 className="font-medium">{activity.title}</h4>
                              {activity.type === 'project' ? (
                                <p className="text-sm text-gray-500">{activity.status} • {activity.collaborators} collaborators</p>
                              ) : (
                                <p className="text-sm text-gray-500">{activity.views} views • {activity.likes} likes</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'achievements' && (
                    <div>
                      <h3 className="font-semibold text-lg mb-3">My Achievements</h3>
                      <div className="space-y-4">
                        {student.achievements.map((achievement, index) => (
                          <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-start">
                            <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                              <Award size={24} className="text-yellow-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">{achievement.title}</h4>
                              <p className="text-sm text-gray-500">{achievement.description}</p>
                              <p className="text-xs text-gray-400 mt-1">Earned: {achievement.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'projects' && (
                    <div className="text-center py-8 text-gray-500">
                      <MapPin size={36} className="mx-auto mb-2 text-gray-400" />
                      <h3 className="font-medium text-lg mb-1">No projects yet</h3>
                      <p className="text-sm">Start creating or join a project to collaborate with peers</p>
                      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">Create Project</button>
                    </div>
                  )}

                  {activeTab === 'content' && (
                    <div className="text-center py-8 text-gray-500">
                      <Image size={36} className="mx-auto mb-2 text-gray-400" />
                      <h3 className="font-medium text-lg mb-1">No content yet</h3>
                      <p className="text-sm">Start creating blogs, posts, or videos to share with the community</p>
                      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">Create Content</button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Recommended Connections */}
          <div className="bg-white rounded-lg shadow-md p-5">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-lg">Recommended Connections</h3>
              <a href="#" className="text-blue-600 text-sm">View All</a>
            </div>
            {isContentHidden ? (
              <div className="text-center my-4">
                <Shield size={24} className="mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">Recommendations visible after verification</p>
                <button 
                  onClick={() => setShowVerificationModal(true)} 
                  className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-md text-sm"
                >
                  Verify Now
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <User size={20} className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">Sarah Johnson</h4>
                    <p className="text-xs text-gray-500">Computer Science • 3 mutual interests</p>
                  </div>
                  <button className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">Connect</button>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <User size={20} className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">Michael Lee</h4>
                    <p className="text-xs text-gray-500">Media Studies • 2 mutual interests</p>
                  </div>
                  <button className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">Connect</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Verification Modal */}
      {renderVerificationModal()}
    </div>
  );
};

export default Profile;