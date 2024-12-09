import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Owner from './pages/Subpages/Owner';
import Tenant from './pages/Subpages/Tenant';
import ComplaintSubmission from './pages/Subpages/ComplaintSubmission';
import RequestSubmission from './pages/Subpages/RequestSubmission';
import EventParticipate from './pages/Subpages/EventParticipate';
import ActivityParticipate from './pages/Subpages/ActivityParticipate';
import SecurityProtocols from './pages/SecurityProtocols';
// import other components...

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Router>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

        <div className="flex-1 p-6 bg-gray-100 pt-16 lg:ml-[280px] h-screen overflow-x-hidden">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/personal-details/owner" element={<Owner />} />
            <Route path="/personal-details/tenant" element={<Tenant />} />
            <Route path="/service-complaint/complaint" element={<ComplaintSubmission />} />
            <Route path="/service-complaint/request" element={<RequestSubmission />} />
            <Route path="/event-participation/event" element={<EventParticipate />} />
            <Route path="/event-participation/activity" element={<ActivityParticipate />} />
            <Route path="/security-protocol" element={<SecurityProtocols />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
