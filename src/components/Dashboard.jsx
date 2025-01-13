// import React from 'react'
// import { AppSidebar } from './app-sidebar'

// const Dashboard = () => {
//   return (
//     <div>
//         <AppSidebar/>
        
//     </div>
//   )
// }

// export default Dashboard
import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppSidebar } from './app-sidebar';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar on the left */}
      <div className="w-64">
        <AppSidebar />
      </div>

      {/* Content on the right */}
      <div className="flex-1 p-4 bg-gray-100">
        {/* The dynamic content will be rendered here based on the selected route */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
