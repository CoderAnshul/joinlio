import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchUsers, createGroup, clearUsers, clearErrors } from '../store/slices/group';

// Toast Component
const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';
  const icon = type === 'success' ? (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
  ) : type === 'error' ? (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  ) : (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  );

  return (
    <div className={`fixed top-4 right-4 z-[60] ${bgColor} text-white px-6 py-4 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out flex items-center space-x-3 min-w-80`}>
      <div className="flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <p className="font-medium">{message}</p>
      </div>
      <button 
        onClick={onClose}
        className="flex-shrink-0 ml-4 text-white hover:text-gray-200 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  );
};

const GroupPopup = ({ onClose }) => {
  const [groupData, setGroupData] = useState({
    name: '',
    description: '',
    privacy: 'Public',
    coverImage: null,
    members: [],
  });
  const [searchEmail, setSearchEmail] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [toast, setToast] = useState(null);
  
  const dispatch = useDispatch();
  const { 
    users, 
    searchMessage,
    loading: createLoading, 
    searchLoading, 
    error: createError,
    searchError 
  } = useSelector((state) => state.group);

  const suggestionRef = useRef(null);

  // Clear errors when component mounts
  useEffect(() => {
    dispatch(clearErrors());
    return () => {
      dispatch(clearUsers());
    };
  }, [dispatch]);

  // Handle click outside suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Show toast for errors
  useEffect(() => {
    if (createError || searchError) {
      setToast({
        message: createError || searchError,
        type: 'error'
      });
    }
  }, [createError, searchError]);

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const closeToast = () => {
    setToast(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGroupData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        showToast('Image size should be less than 5MB', 'error');
        return;
      }
      setGroupData((prev) => ({ ...prev, coverImage: file }));
      showToast('Cover image uploaded successfully', 'success');
    }
  };

  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    setSearchEmail(value);

    // Clear previous timeout
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    // Hide suggestions if input is empty
    if (!value.trim()) {
      setShowSuggestions(false);
      dispatch(clearUsers());
      return;
    }

    // Set new timeout for debounced search
    const newTimeout = setTimeout(() => {
      if (value.trim() && value.length >= 3) {
        dispatch(searchUsers(value.trim()));
        setShowSuggestions(true);
      }
    }, 500); // 500ms delay

    setSearchTimeout(newTimeout);
  };

  const handleAddMember = (user) => {
    if (!groupData.members.some((member) => member.email === user.email)) {
      setGroupData((prev) => ({
        ...prev,
        members: [...prev.members, { 
          email: user.email, 
          name: user.name || user.email.split('@')[0] 
        }],
      }));
      showToast(`${user.name || user.email} added to group`, 'success');
    } else {
      showToast('User already added to the group', 'error');
    }
    setSearchEmail('');
    setShowSuggestions(false);
    dispatch(clearUsers());
  };

  const handleRemoveMember = (email) => {
    const member = groupData.members.find(m => m.email === email);
    setGroupData((prev) => ({
      ...prev,
      members: prev.members.filter((member) => member.email !== email),
    }));
    showToast(`${member?.name || email} removed from group`, 'success');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description, coverImage, members, privacy } = groupData;
    
    if (!name.trim()) {
      showToast('Group name is required', 'error');
      return;
    }

    try {
      await dispatch(createGroup({
        name: name.trim(),
        description: description.trim(),
        coverImage,
        members: members.map((member) => member.email),
        privacy
      })).unwrap();
      
      showToast('Group created successfully!', 'success');
      
      // Close popup after a short delay to show the success message
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (error) {
      console.error('Group creation failed:', error);
      showToast('Failed to create group. Please try again.', 'error');
    }
  };

  return (
    <>
      {/* Toast Notification */}
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={closeToast} 
        />
      )}

      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <div 
          className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl transform transition-all duration-300 ease-out"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-6 text-white">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-3xl font-bold">Create New Group</h3>
                <p className="text-blue-100 mt-1">Bring people together around shared interests</p>
              </div>
              <button 
                className="text-white hover:text-gray-200 p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-200" 
                onClick={onClose}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 overflow-y-auto max-h-[calc(90vh-140px)]">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="bg-gray-50 rounded-2xl p-6 space-y-6">
                <h4 className="text-xl font-semibold text-gray-800 flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  Basic Information
                </h4>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-gray-700 text-sm font-semibold">Group Name *</label>
                    <input
                      name="name"
                      value={groupData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      type="text"
                      placeholder="Enter an engaging group name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-gray-700 text-sm font-semibold">Privacy Settings</label>
                    <select
                      name="privacy"
                      value={groupData.privacy}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="Public">🌍 Public - Anyone can join</option>
                      <option value="Private">🔒 Private - Invite only</option>
                      <option value="Invite Only">📧 Invite Only - Admin approval</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-700 text-sm font-semibold">Description</label>
                  <textarea
                    name="description"
                    value={groupData.description}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="What's this group about? Share the purpose and goals..."
                    rows="4"
                  />
                </div>
              </div>

              {/* Cover Image */}
              <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                <h4 className="text-xl font-semibold text-gray-800 flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z"></path>
                    </svg>
                  </div>
                  Group Cover Image
                </h4>
                
                <div className="relative">
                  <div className="flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 rounded-2xl h-48 hover:border-blue-400 transition-all duration-200 cursor-pointer group">
                    {groupData.coverImage ? (
                      <div className="relative w-full h-full">
                        <img
                          src={URL.createObjectURL(groupData.coverImage)}
                          alt="Group cover preview"
                          className="w-full h-full object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200">
                          <span className="text-white font-medium">Click to change image</span>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center">
                        <svg className="w-16 h-16 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z"></path>
                        </svg>
                        <p className="text-gray-600 font-medium">Upload Group Cover Image</p>
                        <p className="text-gray-400 text-sm mt-1">PNG, JPG up to 5MB</p>
                      </div>
                    )}
                    <input
                      type="file"
                      onChange={handleImageChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      accept="image/*"
                    />
                  </div>
                </div>
              </div>

              {/* Members Section */}
              <div className="bg-gray-50 rounded-2xl p-6 space-y-6">
                <h4 className="text-xl font-semibold text-gray-800 flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                    </svg>
                  </div>
                  Add Members
                  {groupData.members.length > 0 && (
                    <span className="ml-2 bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                      {groupData.members.length} selected
                    </span>
                  )}
                </h4>

                <div className="relative" ref={suggestionRef}>
                  <div className="relative">
                    <input
                      value={searchEmail}
                      onChange={handleSearchInputChange}
                      className="w-full px-4 py-3 pl-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      type="email"
                      placeholder="Search by email address..."
                    />
                    <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    {searchLoading && (
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-blue-500 border-t-transparent"></div>
                      </div>
                    )}
                  </div>

                  {/* Suggestions Dropdown */}
                  {showSuggestions && users.length > 0 && (
                    <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-xl shadow-xl mt-2 max-h-64 overflow-y-auto">
                      {users.map((user) => (
                        <div
                          key={user.email}
                          className="flex items-center p-4 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-all duration-150"
                          onClick={() => handleAddMember(user)}
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                            {user.name ? user.name[0].toUpperCase() : user.email[0].toUpperCase()}
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900">
                              {user.name || user.email.split('@')[0]}
                            </div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                          <div className="text-blue-500">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                            </svg>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* No results message */}
                  {showSuggestions && !searchLoading && users.length === 0 && searchEmail.includes('@') && (
                    <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-xl shadow-lg mt-2 p-4">
                      <div className="flex items-center text-gray-500 text-sm">
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        {searchMessage || "No users found with this email"}
                      </div>
                    </div>
                  )}
                </div>

                {/* Selected Members */}
                {groupData.members.length > 0 && (
                  <div className="space-y-3">
                    <h5 className="text-lg font-medium text-gray-700">Selected Members</h5>
                    <div className="bg-white rounded-xl p-4 space-y-3 max-h-40 overflow-y-auto border border-gray-200">
                      {groupData.members.map((member) => (
                        <div
                          key={member.email}
                          className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-100"
                        >
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                              {member.name[0].toUpperCase()}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{member.name}</div>
                              <div className="text-sm text-gray-500">{member.email}</div>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveMember(member.email)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-all duration-200"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
                  disabled={createLoading || !groupData.name.trim()}
                >
                  {createLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                      Creating Group...
                    </div>
                  ) : (
                    'Create Group'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupPopup;