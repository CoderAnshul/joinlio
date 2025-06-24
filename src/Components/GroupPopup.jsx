import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchUsers, createGroup, clearUsers, clearErrors } from '../store/slices/group';

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGroupData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setGroupData((prev) => ({ ...prev, coverImage: e.target.files[0] }));
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
    }
    setSearchEmail('');
    setShowSuggestions(false);
    dispatch(clearUsers());
  };

  const handleRemoveMember = (email) => {
    setGroupData((prev) => ({
      ...prev,
      members: prev.members.filter((member) => member.email !== email),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description, coverImage, members, privacy } = groupData;
    
    if (!name.trim()) {
      alert('Group name is required');
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
      
      // Close popup only if creation was successful
      onClose();
    } catch (error) {
      // Error is already handled by the reducer
      console.error('Group creation failed:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl w-full max-w-2xl h-[80vh] overflow-y-scroll shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold gradient-text-three">Create Group</h3>
          <button className="text-gray-500 hover:text-gray-800 p-2" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {(createError || searchError) && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mr-3">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <p className="text-red-800 text-sm">
              {createError || searchError}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Group Name *</label>
              <input
                name="name"
                value={groupData.name}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter group name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Privacy</label>
              <select
                name="privacy"
                value={groupData.privacy}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option>Public</option>
                <option>Private</option>
                <option>Invite Only</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Group Cover Image</label>
            <div className="flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-40 mb-2 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <span className="ml-2 text-sm text-gray-500">Upload Group Image</span>
              </div>
              <input
                type="file"
                onChange={handleImageChange}
                className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                accept="image/*"
              />
            </div>
            {groupData.coverImage && (
              <div className="mt-2">
                <img
                  src={URL.createObjectURL(groupData.coverImage)}
                  alt="Group preview"
                  className="h-16 w-16 object-cover rounded"
                />
              </div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <textarea
              name="description"
              value={groupData.description}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
              placeholder="Describe your group"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Add Members</label>
            <div className="relative" ref={suggestionRef}>
              <input
                value={searchEmail}
                onChange={handleSearchInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Type email address to search..."
              />
              
              {searchLoading && (
                <div className="absolute right-3 top-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
                </div>
              )}

              {showSuggestions && users.length > 0 && (
                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto mt-1">
                  {users.map((user) => (
                    <div
                      key={user.email}
                      className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                      onClick={() => handleAddMember(user)}
                    >
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3">
                        {user.name ? user.name[0].toUpperCase() : user.email[0].toUpperCase()}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {user.name || user.email.split('@')[0]}
                        </div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {showSuggestions && !searchLoading && users.length === 0 && searchEmail.includes('@') && (
                <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 p-3">
                  <div className="flex items-center text-gray-500 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    {searchMessage || "No users found with this email"}
                  </div>
                </div>
              )}
            </div>

            {/* Selected Members */}
            {groupData.members.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Selected Members ({groupData.members.length})</h4>
                <div className="bg-gray-50 p-3 rounded-lg max-h-32 overflow-y-auto">
                  {groupData.members.map((member) => (
                    <div
                      key={member.email}
                      className="flex items-center justify-between p-2 bg-white rounded mb-2 shadow-sm"
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold mr-2">
                          {member.name[0].toUpperCase()}
                        </div>
                        <span className="text-sm">{member.email}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveMember(member.email)}
                        className="text-red-500 hover:text-red-700 p-1"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-400 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={createLoading || !groupData.name.trim()}
            >
              {createLoading ? 'Creating...' : 'Create Group'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GroupPopup;