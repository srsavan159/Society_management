import React, { useState } from 'react';
import AddButton from '../components/buttons/AddButton';
import VisitorAddForm from '../components/Form/VisitorAddForm';

const VisitorTracking = () => {
    const [visitors, setVisitors] = useState([
        { id: 1, name: 'Evelyn Harper', phone: '97852 12369', date: '2024-01-10', wing: 'A', unit: '1001', time: '15:45' },
        { id: 2, name: 'Wade Warren', phone: '97852 25893', date: '2024-01-11', wing: 'B', unit: '1002', time: '02:45' },
        { id: 3, name: 'Guy Hawkins', phone: '97589 55563', date: '2024-01-12', wing: 'C', unit: '1003', time: '15:00' },
    ]);

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [filter, setFilter] = useState('year'); 

    const handleAddVisitor = (formData) => {
        const newVisitor = { id: Date.now(), ...formData };
        setVisitors((prevVisitors) => [...prevVisitors, newVisitor]);
        setIsFormOpen(false); 
    };

    const formatTime = (time24) => {
        const [hours, minutes] = time24.split(':');
        const period = +hours >= 12 ? 'PM' : 'AM';
        const hours12 = (+hours % 12) || 12;
        return `${hours12}:${minutes} ${period}`;
    };

    const formatDate = (date) => {
        const [year, month, day] = date.split('-');
        return `${day}/${month}/${year}`;
    };

    const filterVisitors = () => {
        const today = new Date();
        return visitors.filter((visitor) => {
            const visitorDate = new Date(visitor.date);
            const differenceInTime = today - visitorDate;
            const differenceInDays = differenceInTime / (1000 * 3600 * 24);

            if (filter === 'Week') return differenceInDays <= 7;
            if (filter === 'Month') return differenceInDays <= 30;
            if (filter === 'Year') return differenceInDays <= 365;
            return true;
        });
    };

    const filteredVisitors = filterVisitors();

    return (
        <div className="bg-white p-4 shadow-md rounded-lg mt-6 w-full h-[799px] overflow-auto">
            <div className="flex sm:justify-between justify-center gap-3 flex-wrap items-center mb-4">
                <h4 className="text-xl font-bold">Visitor Tracking</h4>
                <div className="flex items-center gap-3">
                    <select
                        className="border border-gray-300 p-2 rounded-lg"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="Year">Year</option>
                        <option value="Week">Week</option>
                        <option value="Month">Month</option>
                    </select>
                    <AddButton Addbuttontitle="Add Visitor Details" onClick={() => setIsFormOpen(true)} />
                </div>
            </div>

            {isFormOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                    <VisitorAddForm
                        onClose={() => setIsFormOpen(false)}
                        onAdd={handleAddVisitor}
                        initialData={null}
                    />
                </div>
            )}

            <div className="overflow-auto w-full">
                <table className="min-w-full text-left border-collapse">
                    <thead className="bg-blue-50">
                        <tr>
                            <th className="py-3 px-2">Visitor Name</th>
                            <th className="py-3 px-2 text-start">Phone Number</th>
                            <th className="py-3 px-2 text-center">Date</th>
                            <th className="py-3 px-2 text-center">Unit Number</th>
                            <th className="py-3 px-2 text-center">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredVisitors.map((visitor) => (
                            <tr key={visitor.id} className="border-t h-16">
                                <td className="px-2 h-full">
                                    <div className="flex items-center">
                                        <img
                                            className="w-10 h-10 rounded-full mr-3"
                                            src="https://via.placeholder.com/40"
                                            alt="Profile"
                                        />
                                        {visitor.name}
                                    </div>
                                </td>
                                <td className="px-2">{visitor.phone}</td>
                                <td className="px-2 text-center">{formatDate(visitor.date)}</td>
                                <td className="px-2 text-center">
                                    <span className="bg-blue-100 rounded-full px-2 py-1 text-blue-500 font-semibold">
                                        {visitor.wing}
                                    </span>
                                    <span className="font-medium ml-2">{visitor.unit}</span>
                                </td>
                                <td className="px-2 text-center">
                                    <span className="p-1 px-3 bg-gray-100 rounded-full">{formatTime(visitor.time)}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VisitorTracking;
