import React from 'react';
import Sidebar from './Sidebar';
import DashboardNav from './DashboardNav';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Section */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <DashboardNav />
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;