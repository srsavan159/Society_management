import React, { useEffect, useState } from 'react';
import { FiLogOut, FiX, FiChevronRight } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import {   FaExclamationCircle, FaShieldAlt, FaUserShield, FaBullhorn } from 'react-icons/fa';
import { BiSolidUserDetail } from "react-icons/bi";
import { BsBoxSeamFill } from "react-icons/bs";
import { IoMdCalendar } from "react-icons/io";
import { GrWindows } from "react-icons/gr";
import { IoShieldCheckmark } from "react-icons/io5";

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [financialDropdownOpen, setFinancialDropdownOpen] = useState(false);
  const [ComplaintDropdownOpen, setComplaintTracking] = useState(false);
  const [SecurityDropdownOpen, setSecurityManagement] = useState(false);

  function isActive(paths) {
    const currentPath = window.location.pathname;
    if (Array.isArray(paths)) {
      return paths.some(path => currentPath.startsWith(path));
    }
    return currentPath.startsWith(paths);
  }

  const closeFinancialDropdown = () => {
    setFinancialDropdownOpen(false);
    localStorage.setItem('financialDropdownOpen', 'false');
  };

  const closeCompiantDropdown = () => {
    setComplaintTracking(false);
    localStorage.setItem('ComplaintDropdownOpen', 'false');
  };

  const closeSecurityDropdown = () => {
    setSecurityManagement(false);
    localStorage.setItem('SecurityDropdownOpen', 'false');
  };



  const handleComplaintClick = () => {
    if (!ComplaintDropdownOpen) {
      navigate('/complaint-tracking/createcomplaint');
    }
    setComplaintTracking(!ComplaintDropdownOpen);
    localStorage.setItem('ComplaintDropdownOpen', !ComplaintDropdownOpen ? 'true' : 'false');
  };

  const handleSecurityClick = () => {
    if (!SecurityDropdownOpen) {
      navigate('/security-management/visitorlogs');
    }
    setSecurityManagement(!SecurityDropdownOpen);
    localStorage.setItem('SecurityDropdownOpen', !SecurityDropdownOpen ? 'true' : 'false');
  };

  useEffect(() => {
    const storedFinancialDropdownState = localStorage.getItem('financialDropdownOpen') === 'true';
    const storedComplaintDropdownState = localStorage.getItem('ComplaintDropdownOpen') === 'true';
    const storedSecurityDropdownState = localStorage.getItem('SecurityDropdownOpen') === 'true';

    setFinancialDropdownOpen(storedFinancialDropdownState);
    setComplaintTracking(storedComplaintDropdownState);
    setSecurityManagement(storedSecurityDropdownState);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white shadow-md w-[280px] z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0`}
    >
      <div className="flex justify-center items-center h-16 border-b p-4 gap-5">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#fe512e] to-[#f09619] bg-clip-text text-transparent mx-5 ">
          Dash<span className="text-black">Stack</span>
        </h2>
        <button onClick={onClose} className="text-gray-700 hover:text-red-500 lg:hidden mt-1 ">
          <FiX size={24} />
        </button>
      </div>

      <div>
        <ul className="space-y-2 my-6">
          <li className='flex '>
            <span className={`${isActive('/dashboard') ? 'bg-orange-500 rounded-r-md px-1' : ''}`}></span>
            <Link
              to="/dashboard"
              className={`flex mx-3 items-center w-full space-x-2 p-2 rounded-lg ${isActive('/dashboard') ? 'bg-gradient-to-r from-[#fe512e] to-[#f09619] text-white' : 'text-gray-700 hover:text-orange-500'}`}
              onClick={() => {
                closeFinancialDropdown();
                closeCompiantDropdown();
                closeSecurityDropdown();
              }}
            >
              <GrWindows   size={20} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className='flex '>
            <span className={`${isActive('/personal-details/owner') ? 'bg-orange-500 rounded-r-md px-1' : ''}`}></span>
            <span className={`${isActive('/personal-details/tenant') ? 'bg-orange-500 rounded-r-md px-1' : ''}`}></span>
            <Link
              to="/personal-details/owner"
              className={`flex mx-3 items-center w-full space-x-2 p-2 rounded-lg ${isActive(['/personal-details/owner', '/personal-details/tenant']) ? 'bg-gradient-to-r from-[#fe512e] to-[#f09619] text-white' : 'text-gray-700 hover:text-orange-500'}`}
              onClick={() => {
                closeFinancialDropdown();
                closeCompiantDropdown();
                closeSecurityDropdown();
              }}
            >
              <BiSolidUserDetail size={20} />
              <span>Personal Details</span>
            </Link>

          </li>

          <li className='flex '>
            <span className={`${isActive('/service-complaint/complaint') ? 'bg-orange-500 rounded-r-md px-1' : ''}`}></span>
            <span className={`${isActive('/service-complaint/request') ? 'bg-orange-500 rounded-r-md px-1' : ''}`}></span>
            <Link
              to="/service-complaint/complaint"
              className={`flex mx-3 items-center w-full space-x-2 p-2 rounded-lg ${isActive(['/service-complaint/complaint', '/service-complaint/request']) ? 'bg-gradient-to-r from-[#fe512e] to-[#f09619] text-white' : 'text-gray-700 hover:text-orange-500'}`}
              onClick={() => {
                closeFinancialDropdown();
                closeCompiantDropdown();
                closeSecurityDropdown();
              }}
            >
              <BsBoxSeamFill  size={20} />
              <span>Service And Complaint</span>
            </Link>

          </li>

          <li className='flex '>
            <span className={`${isActive('/event-participation/event') ? 'bg-orange-500 rounded-r-md px-1' : ''}`}></span>
            <span className={`${isActive('/event-participation/activity') ? 'bg-orange-500 rounded-r-md px-1' : ''}`}></span>
            <Link
              to="/event-participation/event"
              className={`flex mx-3 items-center w-full space-x-2 p-2 rounded-lg ${isActive(['/event-participation/event', '/event-participation/activity']) ? 'bg-gradient-to-r from-[#fe512e] to-[#f09619] text-white' : 'text-gray-700 hover:text-orange-500'}`}
              onClick={() => {
                closeFinancialDropdown();
                closeCompiantDropdown();
                closeSecurityDropdown();
              }}
            >
              <IoMdCalendar  size={20} />
              <span>Events Participation</span>
            </Link>

          </li>

          <li className='flex '>
            <span className={`${isActive('/security-protocol') ? 'bg-orange-500 rounded-r-md px-1' : ''}`}></span>
            <Link
              to="/security-protocol"
              className={`flex mx-3 items-center w-full space-x-2 p-2 rounded-lg ${isActive('/security-protocol') ? 'bg-gradient-to-r from-[#fe512e] to-[#f09619] text-white' : 'text-gray-700 hover:text-orange-500'}`}
              onClick={() => {
                closeFinancialDropdown();
                closeCompiantDropdown();
                closeSecurityDropdown();
              }}
            >
              <IoShieldCheckmark  size={20} />
              <span>Security Protocol</span>
            </Link>
          </li>

        
         
        
        </ul>
      </div>

      <div className="absolute bottom-0 w-full">
        <button className="flex items-center m-6 w-full space-x-2 p-2 pr-4 rounded-l-full bg-transparent text-[#fe512e]">
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