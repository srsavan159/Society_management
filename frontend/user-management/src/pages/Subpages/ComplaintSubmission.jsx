import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AddButton from '../../components/buttons/AddButton';
import DeleteForm from '../../components/Forms/DeleteForm';
import ComplainAddForm from '../../components/Forms/ComplainAddForm'; 
import { HiDotsVertical } from "react-icons/hi";

const ComplaintSubmission = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [complaints, setComplaints] = useState([
    { id: 1, complainerName: "John Doe", date: "2024-07-01", status: "Open", description: "Regular waste collection services." },
    { id: 2, complainerName: "Jane Smith", date: "2024-07-01", status: "Open", description: "Expenses will make sense for you." },
  ]);
  const [deleteComplaint, setDeleteComplaint] = useState(null);
  const [popupOpen, setPopupOpen] = useState(null);
  const popupRef = useRef(null);

  // Handle adding a new complaint
  const handleAddComplaint = (newComplaint) => {
    const currentDate = new Date().toISOString().split('T')[0];
    const formattedComplaint = { ...newComplaint, date: currentDate };

    // Add new complaint to the list
    setComplaints((prev) => [...prev, { ...formattedComplaint, id: complaints.length + 1 }]);
    setIsFormOpen(false); // Close the form after submission
  };

  const handleDeleteComplaint = () => {
    setComplaints(complaints.filter(complaint => complaint.id !== deleteComplaint.id));
    setDeleteComplaint(null);
  };

  const openForm = () => {
    setIsFormOpen(true);
    setDeleteComplaint(null); // Reset delete state when opening form
  };

  // Close form when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopupOpen(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="mt-6">
      <div className="shadow-md rounded-t-lg w-80 border-b-2 border-b-[#fc6d25] flex justify-between">
        <Link
          to="/service-complaint/complaint"
          className={`w-1/2 text-center py-3 font-semibold text-[14px] rounded-t-lg ${location.pathname === '/service-complaint/complaint'
            ? 'bg-gradient-to-r from-[#fe512e] to-[#f09619] text-white'
            : 'bg-white'
            }`}
        >
          Complaint Submission
        </Link>
        <Link
          to="/service-complaint/request"
          className={`w-1/2 text-center py-3 font-semibold text-[14px] rounded-t-lg ${location.pathname === '/service-complaint/request'
            ? 'bg-gradient-to-r from-[#fe512e] to-[#f09619] text-white'
            : 'bg-white'
            }`}
        >
          Request Submission
        </Link>
      </div>
      <div className="bg-white p-4 shadow-lg rounded-lg w-full h-[799px] overflow-auto">
        <div className="flex justify-center items-center mb-3 flex-wrap sm:justify-between gap-3">
          <h4 className="text-2xl font-semibold">Complaint</h4>
          <AddButton Addbuttontitle="Create Complaint" onClick={openForm} className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-lg font-bold" />
        </div>

        <div className="flex flex-wrap gap-4 rounded-lg">
          {complaints.map((complaint) => (
            <div key={complaint.id} className="py-3 w-[370px] shadow-md rounded-lg relative text-sm">
              <div className="rounded-t-lg font-bold mb-1 text-[16px] bg-blue-500 text-white p-3 flex items-center justify-between">
                <h5>{complaint.complainerName}</h5>
                <button onClick={() => setPopupOpen(complaint.id === popupOpen ? null : complaint.id)}>
                  <HiDotsVertical />
                </button>
                {popupOpen === complaint.id && (
                  <div ref={popupRef} className="absolute right-5 top-12 mt-2 bg-white border text-black rounded-lg shadow-lg z-10 text-sm">
                    <button className="p-2 pe-6" onClick={() => setDeleteComplaint(complaint)}>Delete</button>
                  </div>
                )}
              </div>
              <div className='flex px-3 mt-2 justify-between'>
                <p className='text-gray-500'>Request Date</p>
                <p>{new Date(complaint.date).toLocaleDateString('en-GB')}</p>
              </div>
              <div className='flex px-3 mt-2 justify-between'>
                <p className='text-gray-500'>Status</p>
                <p className='bg-blue-100 p-1 px-4 rounded-full text-blue-600'>{complaint.status}</p>
              </div>
              <h1 className='px-3 mt-2 text-gray-400'>Description</h1>
              <p className="px-3 pt-1">{complaint.description}</p>
            </div>
          ))}
        </div>

        {isFormOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-[410px]">
              <ComplainAddForm
                onClose={() => setIsFormOpen(false)}
                onAdd={handleAddComplaint}
              />
            </div>
          </div>
        )}

        {deleteComplaint && (
          <DeleteForm
            onCancel={() => setDeleteComplaint(null)}
            onDelete={handleDeleteComplaint}
            deltitle="Complaint"
            deletepages="Complaint "
          />
        )}
      </div>
    </div>
  );
};

export default ComplaintSubmission;
