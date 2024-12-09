import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SecurityProtocols = () => {
  const [protocols, setProtocols] = useState([
    {
      id: 1,
      guardName: 'Alice Brown',
      description: 'Ensured all visitors signed the log.',
      time: '8:00 AM',
      date: '01/12/2024',
    },
    {
      id: 2,
      guardName: 'Michael Green',
      description: 'Checked fire safety equipment.',
      time: '11:00 AM',
      date: '02/12/2024',
    },
    {
      id: 3,
      guardName: 'Sophia Davis',
      description: 'Monitored CCTV for 2 hours.',
      time: '3:00 PM',
      date: '03/12/2024',
    },
  ]);

  const formatTime = (time) => {
    const [hour, rest] = time.split(':');
    if (parseInt(hour, 10) >= 1 && parseInt(hour, 10) <= 9) {
      return `0${hour}:${rest}`;
    }
    return time;
  };

  return (
    <div className="mt-6">
    
      {/* Protocols Table */}
      <div className="bg-white p-4 shadow-md rounded-lg  w-full h-[799px] overflow-auto">
        <h4 className="text-xl font-bold mb-4">Security Protocols</h4>
        <div className="overflow-auto w-full">
          <table className="min-w-full w-[1050px] text-left border-collapse">
            <thead className="bg-blue-50">
              <tr>
                <th className="py-3 px-2">Title</th>
                <th className="py-3 px-2 w-[30%]">Description</th>
                <th className="py-3 px-2 text-center">Date</th>
                <th className="py-3 px-2 text-center">Time</th>
              </tr>
            </thead>
            <tbody>
              {protocols.map((protocol) => (
                <tr key={protocol.id} className="border-t h-16">
                  <td className="px-2 h-full">
                    <div className="flex items-center">
                      <img
                        className="w-10 h-10 rounded-full mr-3"
                        src="https://via.placeholder.com/40"
                        alt="Profile"
                      />
                      {protocol.guardName}
                    </div>
                  </td>
                  <td className="px-2 h-full w-[30%]">{protocol.description}</td>
                  <td className="px-2 h-full text-center">{protocol.date}</td>
                  <td className="px-2 h-full text-center">
                    <span className="bg-gray-100 p-1 px-3 rounded-full">{formatTime(protocol.time)}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SecurityProtocols;
