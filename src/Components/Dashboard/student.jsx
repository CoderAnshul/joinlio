import React, { useState, useEffect } from 'react';
import { User, Search, Filter, Download, Plus, MoreHorizontal, ChevronDown, CheckCircle, AlertCircle, Clock, Tag, Book, Calendar, School } from 'lucide-react';

const StudentManagement = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });
  const [expandedStudent, setExpandedStudent] = useState(null);
  
  // Categories/Groups that students can be part of
  const studentGroups = [
    { id: 'computerScience', name: 'Computer Science' },
    { id: 'business', name: 'Business Administration' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'arts', name: 'Arts & Humanities' },
    { id: 'medicine', name: 'Medicine & Health Sciences' },
    { id: 'socialSciences', name: 'Social Sciences' }
  ];
  
  // Mock student data with groups/topics
  const mockStudents = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.edu',
      profileImage: null,
      enrollmentDate: '2023-09-15',
      verificationStatus: 'verified',
      groups: ['computerScience', 'engineering'],
      performance: 92,
      attendance: 97,
      lastActive: '2024-03-18',
      topics: ['Programming', 'Machine Learning', 'Web Development'],
      level: 'Undergraduate',
      year: 3,
      credits: 86,
      financialStatus: 'Clear',
      notes: 'Excellent student, considering for research assistant position'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.edu',
      profileImage: null,
      enrollmentDate: '2023-09-10',
      verificationStatus: 'verified',
      groups: ['business', 'socialSciences'],
      performance: 88,
      attendance: 92,
      lastActive: '2024-03-19',
      topics: ['Marketing', 'Economics', 'Business Ethics'],
      level: 'Graduate',
      year: 1,
      credits: 24,
      financialStatus: 'Pending Payment',
      notes: 'Requested extension for upcoming project'
    },
    {
      id: 3,
      name: 'Robert Johnson',
      email: 'robert.j@example.edu',
      profileImage: null,
      enrollmentDate: '2024-01-05',
      verificationStatus: 'pending',
      groups: ['arts', 'socialSciences'],
      performance: 76,
      attendance: 83,
      lastActive: '2024-03-15',
      topics: ['Modern Literature', 'Philosophy', 'Art History'],
      level: 'Undergraduate',
      year: 2,
      credits: 45,
      financialStatus: 'Financial Aid',
      notes: 'Scheduling advising appointment for course selection'
    },
    {
      id: 4,
      name: 'Emily Chen',
      email: 'emily.chen@example.edu',
      profileImage: null,
      enrollmentDate: '2022-09-01',
      verificationStatus: 'verified',
      groups: ['medicine', 'engineering'],
      performance: 95,
      attendance: 99,
      lastActive: '2024-03-19',
      topics: ['Biomedical Engineering', 'Anatomy', 'Health Informatics'],
      level: 'Graduate',
      year: 2,
      credits: 48,
      financialStatus: 'Scholarship',
      notes: 'Research project in progress with Dr. Martinez'
    },
    {
      id: 5,
      name: 'Michael Brown',
      email: 'michael.b@example.edu',
      profileImage: null,
      enrollmentDate: '2023-09-15',
      verificationStatus: 'rejected',
      groups: ['computerScience'],
      performance: 65,
      attendance: 72,
      lastActive: '2024-03-10',
      topics: ['Database Systems', 'Network Security'],
      level: 'Undergraduate',
      year: 1,
      credits: 20,
      financialStatus: 'Past Due',
      notes: 'Academic probation warning issued'
    }
  ];
  
  // Load student data when component mounts
  useEffect(() => {
    // Simulating API fetch with setTimeout
    setTimeout(() => {
      setStudents(mockStudents);
      setFilteredStudents(mockStudents);
      setLoading(false);
    }, 800);
  }, []);
  
  // Update filtered students when search term or active filter changes
  useEffect(() => {
    let result = students;
    
    // Apply search filter
    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      result = result.filter(student => 
        student.name.toLowerCase().includes(lowercasedTerm) || 
        student.email.toLowerCase().includes(lowercasedTerm) ||
        student.topics.some(topic => topic.toLowerCase().includes(lowercasedTerm))
      );
    }
    
    // Apply status filter
    if (activeFilter !== 'all') {
      if (activeFilter === 'verified' || activeFilter === 'pending' || activeFilter === 'rejected') {
        result = result.filter(student => student.verificationStatus === activeFilter);
      } else {
        // Filter by group
        result = result.filter(student => student.groups.includes(activeFilter));
      }
    }
    
    // Apply sorting
    if (sortConfig.key) {
      result = [...result].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    
    setFilteredStudents(result);
    setCurrentPage(1);
  }, [searchTerm, activeFilter, students, sortConfig]);

  // Handle search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  // Handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };
  
  // Handle sorting
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  
  // Toggle student selection
  const toggleStudentSelection = (studentId) => {
    setSelectedStudents(prevSelected => {
      if (prevSelected.includes(studentId)) {
        return prevSelected.filter(id => id !== studentId);
      } else {
        return [...prevSelected, studentId];
      }
    });
  };
  
  // Toggle select all students
  const toggleSelectAll = () => {
    if (selectedStudents.length === filteredStudents.length) {
      setSelectedStudents([]);
    } else {
      setSelectedStudents(filteredStudents.map(student => student.id));
    }
  };
  
  // Handle bulk actions
  const handleBulkAction = (action) => {
    console.log(`Performing ${action} on students:`, selectedStudents);
    // In a real app, this would call an API to perform the action
    
    // For demo purposes, just clear the selection
    setSelectedStudents([]);
  };
  
  // Toggle expanded student details
  const toggleStudentDetails = (studentId) => {
    if (expandedStudent === studentId) {
      setExpandedStudent(null);
    } else {
      setExpandedStudent(studentId);
    }
  };
  
  // Get status badge based on verification status
  const getStatusBadge = (status) => {
    switch (status) {
      case 'verified':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle size={12} className="mr-1" /> Verified
          </span>
        );
      case 'pending':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <Clock size={12} className="mr-1" /> Pending
          </span>
        );
      case 'rejected':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <AlertCircle size={12} className="mr-1" /> Rejected
          </span>
        );
      default:
        return null;
    }
  };
  
  // Get group badge for groups
  const getGroupBadge = (groupId) => {
    const group = studentGroups.find(g => g.id === groupId);
    if (!group) return null;
    
    let bgColor, textColor;
    switch (groupId) {
      case 'computerScience':
        bgColor = 'bg-blue-100';
        textColor = 'text-blue-800';
        break;
      case 'business':
        bgColor = 'bg-purple-100';
        textColor = 'text-purple-800';
        break;
      case 'engineering':
        bgColor = 'bg-green-100';
        textColor = 'text-green-800';
        break;
      case 'arts':
        bgColor = 'bg-pink-100';
        textColor = 'text-pink-800';
        break;
      case 'medicine':
        bgColor = 'bg-red-100';
        textColor = 'text-red-800';
        break;
      case 'socialSciences':
        bgColor = 'bg-amber-100';
        textColor = 'text-amber-800';
        break;
      default:
        bgColor = 'bg-gray-100';
        textColor = 'text-gray-800';
    }
    
    return (
      <span key={groupId} className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor} ${textColor} mr-1 mb-1`}>
        <Tag size={12} className="mr-1" /> {group.name}
      </span>
    );
  };

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };
  
  // Items per page for pagination
  const ITEMS_PER_PAGE = 10;
  
  // Get current page of students
  const getCurrentPageStudents = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredStudents.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };
  
  // Total number of pages
  const totalPages = Math.ceil(filteredStudents.length / ITEMS_PER_PAGE);
  
  // Pagination controls
  const renderPagination = () => {
    return (
      <div className="flex items-center justify-between mt-4">
        <span className="text-sm text-gray-700">
          Showing <span className="font-medium">{Math.min(1 + (currentPage - 1) * ITEMS_PER_PAGE, filteredStudents.length)}</span> to{' '}
          <span className="font-medium">{Math.min(currentPage * ITEMS_PER_PAGE, filteredStudents.length)}</span> of{' '}
          <span className="font-medium">{filteredStudents.length}</span> students
        </span>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50 border'}`}
          >
            Previous
          </button>
          
          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
            const pageNum = currentPage > 3 && totalPages > 5
              ? currentPage - 2 + i
              : i + 1;
              
            if (pageNum <= totalPages) {
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-3 py-1 rounded-md ${currentPage === pageNum ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50 border'}`}
                >
                  {pageNum}
                </button>
              );
            }
            return null;
          })}
          
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages || totalPages === 0}
            className={`px-3 py-1 rounded-md ${currentPage === totalPages || totalPages === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50 border'}`}
          >
            Next
          </button>
        </div>
      </div>
    );
  };
  
  return (
    <div className="p-6 font-sans bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">Student Management</h1>
        <p className="text-gray-600">Manage and monitor student accounts, groups, and performance</p>
      </div>
      
      {/* Action Panel */}
      <div className="mb-6 bg-white rounded-lg shadow p-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Search and Filters */}
          <div className="flex flex-1 items-center space-x-2 min-w-0">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search by name, email, or topics..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            
            <div className="relative">
              <button 
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <Filter size={16} className="mr-2 text-gray-500" />
                <span>Filter</span>
                <ChevronDown size={16} className="ml-1 text-gray-500" />
              </button>
              
              {/* Filter dropdown would go here */}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <Download size={16} className="mr-2" />
              Export
            </button>
            
            <button 
              onClick={() => setShowAddStudentModal(true)}
              className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Plus size={16} className="mr-2" />
              Add Student
            </button>
          </div>
        </div>
        
        {/* Filter Pills */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <button
            onClick={() => handleFilterChange('all')}
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${activeFilter === 'all' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            All Students
          </button>
          
          <button
            onClick={() => handleFilterChange('verified')}
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${activeFilter === 'verified' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            <CheckCircle size={12} className="mr-1" /> 
            Verified
          </button>
          
          <button
            onClick={() => handleFilterChange('pending')}
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${activeFilter === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            <Clock size={12} className="mr-1" /> 
            Pending
          </button>
          
          <button
            onClick={() => handleFilterChange('rejected')}
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${activeFilter === 'rejected' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            <AlertCircle size={12} className="mr-1" /> 
            Rejected
          </button>
          
          {/* Group filters */}
          {studentGroups.map(group => (
            <button
              key={group.id}
              onClick={() => handleFilterChange(group.id)}
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${activeFilter === group.id ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              <Tag size={12} className="mr-1" /> 
              {group.name}
            </button>
          ))}
        </div>
        
        {/* Selected Actions */}
        {selectedStudents.length > 0 && (
          <div className="mt-4 flex items-center justify-between py-2 px-4 bg-blue-50 border border-blue-100 rounded-md">
            <span className="text-sm text-blue-700">
              <span className="font-medium">{selectedStudents.length}</span> students selected
            </span>
            <div className="flex space-x-2">
              <button className="text-sm text-blue-700 hover:text-blue-900">Send Message</button>
              <button className="text-sm text-blue-700 hover:text-blue-900">Assign to Group</button>
              <button className="text-sm text-red-600 hover:text-red-800">Remove</button>
            </div>
          </div>
        )}
      </div>
      
      {/* Students Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {loading ? (
          <div className="p-8 flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : filteredStudents.length === 0 ? (
          <div className="p-8 text-center">
            <Users size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">No students found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchTerm ? 'Try adjusting your search or filter to find what you\'re looking for.' : 'Add your first student to get started.'}
            </p>
            <button
              onClick={() => setShowAddStudentModal(true)}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Plus size={16} className="mr-2" />
              Add Student
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        checked={selectedStudents.length === filteredStudents.length && filteredStudents.length > 0}
                        onChange={toggleSelectAll}
                      />
                    </div>
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => requestSort('name')}
                  >
                    <div className="flex items-center">
                      <span>Student</span>
                      {sortConfig.key === 'name' && (
                        <ChevronDown 
                          size={16} 
                          className={`ml-1 ${sortConfig.direction === 'descending' ? 'transform rotate-180' : ''}`} 
                        />
                      )}
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Groups & Topics
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => requestSort('enrollmentDate')}
                  >
                    <div className="flex items-center">
                      <span>Enrollment</span>
                      {sortConfig.key === 'enrollmentDate' && (
                        <ChevronDown 
                          size={16} 
                          className={`ml-1 ${sortConfig.direction === 'descending' ? 'transform rotate-180' : ''}`} 
                        />
                      )}
                    </div>
                  </th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => requestSort('performance')}
                  >
                    <div className="flex items-center">
                      <span>Performance</span>
                      {sortConfig.key === 'performance' && (
                        <ChevronDown 
                          size={16} 
                          className={`ml-1 ${sortConfig.direction === 'descending' ? 'transform rotate-180' : ''}`} 
                        />
                      )}
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {getCurrentPageStudents().map(student => (
                  <React.Fragment key={student.id}>
                    <tr className={`hover:bg-gray-50 ${expandedStudent === student.id ? 'bg-blue-50' : ''}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          checked={selectedStudents.includes(student.id)}
                          onChange={() => toggleStudentSelection(student.id)}
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            {student.profileImage ? (
                              <img className="h-10 w-10 rounded-full" src={student.profileImage} alt="" />
                            ) : (
                              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <User size={20} className="text-blue-600" />
                              </div>
                            )}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{student.name}</div>
                            <div className="text-sm text-gray-500">{student.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap">
                          {student.groups.map(groupId => getGroupBadge(groupId))}
                          {student.topics.length > 0 && (
                            <span className="text-xs text-gray-500">+{student.topics.length} topics</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(student.enrollmentDate)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2.5 mr-2">
                            <div 
                              className={`h-2.5 rounded-full ${
                                student.performance >= 90 ? 'bg-green-600' : 
                                student.performance >= 70 ? 'bg-yellow-500' : 
                                'bg-red-500'
                              }`}
                              style={{ width: `${student.performance}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">{student.performance}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(student.verificationStatus)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => toggleStudentDetails(student.id)} 
                            className="text-blue-600 hover:text-blue-900"
                          >
                            {expandedStudent === student.id ? 'Hide Details' : 'View Details'}
                          </button>
                          <div className="relative">
                            <button className="text-gray-400 hover:text-gray-500">
                              <MoreHorizontal size={16} />
                            </button>
                            {/* Dropdown menu would go here */}
                          </div>
                        </div>
                      </td>
                    </tr>
                    
                    {/* Expanded details row */}
                    {expandedStudent === student.id && (
                      <tr>
                        <td colSpan="7" className="px-6 py-4 bg-blue-50">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-md shadow-sm">
                              <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                <Book size={16} className="mr-2 text-blue-600" />
                                Academic Information
                              </h4>
                              <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                  <span className="text-gray-500">Level:</span>
                                  <span className="font-medium">{student.level}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-500">Year:</span>
                                  <span className="font-medium">{student.year}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-500">Credits:</span>
                                  <span className="font-medium">{student.credits}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-500">Financial Status:</span>
                                  <span className="font-medium">{student.financialStatus}</span>
                                </div>
                                </div>
                                </div>

                                <div className="bg-white p-4 rounded-md shadow-sm">

                                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                        <Calendar size={16} className="mr-2 text-blue-600" />
                                        Activity & Performance
                                    </h4>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Attendance:</span>
                                            <span className="font-medium">{student.attendance}%</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Last Active:</span>
                                            <span className="font-medium">{formatDate(student.lastActive)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Notes:</span>
                                            <span className="font-medium">{student.notes}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-4 rounded-md shadow-sm">
                                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                                        <School size={16} className="mr-2 text-blue-600" />
                                        Topics of Interest
                                    </h4>
                                    <div className="space-y-2 text-sm">
                                        {student.topics.map(topic => (
                                            <div key={topic} className="flex items-center">
                                                <span className="text-gray-500">{topic}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                )}
            </React.Fragment>
        ))}
        </tbody>
    </table>
</div>
        )
    }
    </div>
{renderPagination()}
</div>
  )
}

export default StudentManagement;   