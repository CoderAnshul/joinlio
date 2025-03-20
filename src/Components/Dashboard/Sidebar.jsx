import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo512.png";


const Sidebar = ({ userData }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  // Determine if the user has completed onboarding
  const hasCompletedOnboarding = userData?.onboardingComplete || false;
  
  // Calculate onboarding progress for progress bar
  const calculateProgress = () => {
    if (!userData?.onboardingSteps) return 0;
    const completedSteps = Object.values(userData.onboardingSteps).filter(step => step).length;
    const totalSteps = Object.values(userData.onboardingSteps).length;
    return Math.round((completedSteps / totalSteps) * 100);
  };
  
  return (
    <div className={`${isCollapsed ? 'w-16' : 'w-64'} transition-width duration-300 ease-in-out h-full bg-blue-800 text-white p-4 flex flex-col`}>
        <div className="flex items-center justify-between mb-8">
          <Link to="/">
          {!isCollapsed && <img className="max-h-32" src={logo} alt="logo" />}
          </Link>
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)} 
            className="p-1 rounded-full hover:bg-blue-700"
          >
            {isCollapsed ? '→' : '←'}
          </button>
        </div>
        
        {/* Onboarding progress - only shown if onboarding is not complete */}
      {!hasCompletedOnboarding && !isCollapsed && (
        <div className="mb-6">
          <div className="flex justify-between mb-1">
            <span className="text-sm">Onboarding Progress</span>
            <span className="text-sm">{calculateProgress()}%</span>
          </div>
          <div className="w-full bg-blue-900 rounded-full h-2">
            <div 
              className="bg-green-400 h-2 rounded-full" 
              style={{ width: `${calculateProgress()}%` }}
            ></div>
          </div>
        </div>
      )}
      
      {/* Navigation Links */}
      <ul className="space-y-2 flex-1">
        {/* Dashboard/Home */}
        <li>
          <Link to="/dashboard" className="flex items-center px-4 py-2 rounded hover:bg-blue-700">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            {!isCollapsed && <span className="ml-3">Dashboard</span>}
          </Link>
        </li>
        
        {/* My Profile */}
        <li>
          <Link to="/dashboard/profile" className="flex items-center px-4 py-2 rounded hover:bg-blue-700">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
            </svg>
            {!isCollapsed && <span className="ml-3">My Profile</span>}
          </Link>
        </li>


            {/* Feed */}
            <li>
          <Link to="/dashboard/feed" className="flex items-center px-4 py-2 rounded hover:bg-blue-700">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
            </svg>
            {!isCollapsed && <span className="ml-3">Explore Feeds</span>}
          </Link>
        </li>
        
        {/* Topics */}
        <li>
          <Link to="/dashboard/topics" className="flex items-center px-4 py-2 rounded hover:bg-blue-700">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
            </svg>
            {!isCollapsed && <span className="ml-3">Explore Topics</span>}
          </Link>
        </li>
        
        {/* Projects & Collaborations */}
        <li>
          <Link to="/dashboard/projects" className="flex items-center px-4 py-2 rounded hover:bg-blue-700">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
            </svg>
            {!isCollapsed && <span className="ml-3">Collaborations</span>}
          </Link>
        </li>
        
        {/* Peer Account */}
        <li>
          <Link to="/dashboard/account" className="flex items-center px-4 py-2 rounded hover:bg-blue-700">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
            </svg>
            {!isCollapsed && <span className="ml-3">Peer Account</span>}
          </Link>
        </li>
        
        {/* Tools & Resources */}
        <li>
          <Link to="/dashboard/tools" className="flex items-center px-4 py-2 rounded hover:bg-blue-700">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd"></path>
            </svg>
            {!isCollapsed && <span className="ml-3">Tools & Resources</span>}
          </Link>
        </li>
        
        {/* Partner Services */}
        <li>
          <Link to="/dashboard/services" className="flex items-center px-4 py-2 rounded hover:bg-blue-700">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            {!isCollapsed && <span className="ml-3">Student Discounts</span>}
          </Link>
        </li>
        
        <li>
          <Link to="/dashboard/rewards" className="flex items-center px-4 py-2 rounded hover:bg-blue-700">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            {!isCollapsed && <span className="ml-3">My Rewards</span>}
          </Link>
        </li>
      </ul>
      
      {/* Bottom section */}
      <div className="mt-6 space-y-2">
        {/* If institution is not partnered, show request button */}
        <Link to="/dashboard/request-partnership" className="flex items-center justify-center px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 text-sm">
            Request Partnership
        </Link>

        <Link to="/settings" className="flex items-center px-4 py-2 rounded hover:bg-blue-700">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
          </svg>
          {!isCollapsed && <span className="ml-3">Settings</span>}
        </Link>
        
        {/* Logout */}
        <Link to="/logout" className="flex items-center px-4 py-2 rounded hover:bg-blue-700">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path>
          </svg>
          {!isCollapsed && <span className="ml-3">Logout</span>}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;