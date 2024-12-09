import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EventParticipate = () => {
  const [participants, setParticipants] = useState([
    { id: 1, name: 'Cody Fisher', description: 'Event and recreational activities.', time: '2:45 PM', date: '11/02/2024', event: 'Holi Festival' },
    { id: 2, name: 'Esther Howard', description: 'Securing critical government systems.', time: '1:45 AM', date: '12/02/2024', event: 'Ganesh Chaturthi' },
    { id: 3, name: 'Brooklyn Simmons', description: 'Implementing surveillance in public spaces.', time: '2:00 PM', date: '13/02/2024', event: 'Navratri Festival' },
  ]);

  const formatTime = (time) => {
    const [hour, rest] = time.split(':'); // Split time into hour and the rest (minutes and AM/PM)
    if (parseInt(hour, 10) >= 1 && parseInt(hour, 10) <= 9) {
      return `0${hour}:${rest}`; // Add leading zero to hour
    }
    return time; // Return time as is if hour is not between 1 and 9
  };

  return (
    <div className="mt-6">
      {/* Tab Navigation */}
      <div className="shadow-md rounded-t-lg w-72 border-b-2 border-b-[#fc6d25] flex justify-between">
        <Link
          to="/event-participation/event"
          className={`w-1/2 text-center py-3 font-semibold text-[14px] rounded-t-lg ${
            location.pathname === '/event-participation/event'
              ? 'bg-gradient-to-r from-[#fe512e] to-[#f09619] text-white'
              : 'bg-white'
          }`}
        >
          Events Participate
        </Link>
        <Link
          to="/event-participation/activity"
          className={`w-1/2 text-center py-3 font-semibold text-[14px] rounded-t-lg ${
            location.pathname === '/event-participation/activity'
              ? 'bg-gradient-to-r from-[#fe512e] to-[#f09619] text-white'
              : 'bg-white'
          }`}
        >
          Activity Participate
        </Link>
      </div>

      {/* Participant Table */}
      <div className="bg-white p-4 shadow-md rounded-b-lg rounded-tr-lg w-full h-[799px] overflow-auto">
        <h4 className="text-xl font-bold mb-4">Events Participation</h4>
        <div className="overflow-auto w-full">
          <table className="min-w-full w-[1050px] text-left border-collapse">
            <thead className="bg-blue-50">
              <tr>
                <th className="py-3 px-2">Participator Name</th>
                <th className="py-3 px-2 w-[30%] ">Description</th>
                <th className="py-3 px-2 text-center">Event Time</th>
                <th className="py-3 px-2 text-center">Event Date</th>
                <th className="py-3 px-2 text-center">Event Name</th>
              </tr>
            </thead>
            <tbody>
              {participants.map((participant) => (
                <tr key={participant.id} className="border-t h-16">
                  <td className="px-2 h-full">
                    <div className="flex items-center">
                      <img
                        className="w-10 h-10 rounded-full mr-3"
                        src="https://via.placeholder.com/40"
                        alt="Profile"
                      />
                      {participant.name}
                    </div>
                  </td>
                  <td className="px-2 h-full w-[30%]">{participant.description}</td>
                  <td className="px-2 h-full text-center">
                    <span className="bg-gray-100 p-1 px-3 rounded-full">{formatTime(participant.time)}</span>
                  </td>
                  <td className="px-2 h-full text-center">{participant.date}</td>
                  <td className="px-2 h-full text-center">{participant.event}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EventParticipate;
