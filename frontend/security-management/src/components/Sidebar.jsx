import React, { useEffect, useState } from 'react';
import { FiLogOut, FiX, FiChevronRight } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaShieldAlt } from 'react-icons/fa';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [SecurityDropdownOpen, setSecurityManagement] = useState(false);

  const isActive = (path) => location.pathname === path;

  const handleSecurityClick = () => {
    if (!SecurityDropdownOpen) {
      navigate('/security-management/visitorlogs');
    }
    setSecurityManagement(!SecurityDropdownOpen);
  };

  useEffect(() => {
    const storedSecurityDropdownState = localStorage.getItem('SecurityDropdownOpen') === 'true';
    setSecurityManagement(storedSecurityDropdownState);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white shadow-md w-[280px] z-50 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out lg:translate-x-0`}
    >
      {/* Header */}
      <div className="flex justify-between items-center h-16 border-b p-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#fe512e] to-[#f09619] bg-clip-text text-transparent">
          Dash<span className="text-black">Stack</span>
        </h2>
        <button onClick={onClose} className="text-gray-700 hover:text-red-500 lg:hidden">
          <FiX size={24} />
        </button>
      </div>

      {/* Navigation */}
      <div>
        <ul className="space-y-2 my-6">
          <li className="flex">
            <span
              className={`h-10 ${
                isActive('/security/visitor') ? 'bg-orange-500 rounded-r-md px-1' : ''
              }`}
            ></span>
            <span
              className={`h-10 ${
                isActive('/security/emergency') ? 'bg-orange-500 rounded-r-md px-1' : ''
              }`}
            ></span>
            <div className="mx-3">
              <button
                onClick={handleSecurityClick}
                className={`w-full flex justify-between items-center p-2 rounded-lg ${
                  isActive('/security') || SecurityDropdownOpen
                    ? 'bg-gradient-to-r from-[#fe512e] to-[#f09619] text-white'
                    : 'text-gray-700 hover:text-orange-500'
                }`}
                style={{ width: '240px' }} // Fix width for the Security button
              >
                <div className="flex items-center space-x-2">
                  <FaShieldAlt size={20} />
                  <span>Security</span>
                </div>
              </button>

              {/* Dropdown */}
              {SecurityDropdownOpen && (
                <ul className="ml-6 mt-2 space-y-2">
                  <li>
                    <Link
                      to="/security/visitor"
                      className="flex items-center w-full space-x-2 p-2 rounded-lg"
                    >
                      {isActive('/security/visitor') && <FiChevronRight size={16} />}
                      <span>Visitor Tracking</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/security/emergency"
                      className="flex items-center w-full space-x-2 p-2 rounded-lg"
                    >
                      {isActive('/security/emergency') && <FiChevronRight size={16} />}
                      <span>Emergency Management</span>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>
        </ul>
      </div>

      {/* Logout */}
      <div className="absolute bottom-0 w-full">
        <button className="flex items-center m-6 w-full space-x-2 p-2 pr-4 rounded-l-full text-[#fe512e]">
          <span className="bg-gradient-to-r from-[#fe512e] to-[#f09619] p-2 rounded-full text-white">
            <FiLogOut size={20} />
          </span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
