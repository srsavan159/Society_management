import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import VisitorTracking from './pages/VisitorTracking';
import EmergencyManagement from './pages/EmergencyManagement';
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
            <Route path="/security/visitor" element={<VisitorTracking />} />
            <Route path="/security/emergency" element={<EmergencyManagement />} />
            
            <Route path="*" element={<Navigate to="/security/visitor" replace />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
