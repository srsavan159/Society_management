import React, { useState, useEffect } from 'react';
const VisitorAddForm = ({ onClose, onAdd, initialData }) => {
    const [visitorName, setVisitorName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [wing, setWing] = useState('');
    const [unit, setUnit] = useState('');

    useEffect(() => {
        if (initialData) {
            setVisitorName(initialData.name);
            setPhoneNumber(initialData.phone);
            setDate(initialData.date);
            setWing(initialData.wing);
            setUnit(initialData.unit);
            setTime(initialData.time);
        }
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newVisitor = {
            name: visitorName,
            phone: phoneNumber,
            date,
            wing,
            unit,
            time,
        };
        onAdd(newVisitor); 
        onClose();
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg w-[410px]">
            <h2 className="text-xl font-semibold mb-4 text-center">Add Visitor Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Visitor Name</label>
                    <input
                        type="text"
                        value={visitorName}
                        onChange={(e) => setVisitorName(e.target.value)}
                        placeholder="Enter Visitor Name"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Phone Number</label>
                    <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter Phone Number"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                        required
                    />
                </div>

                <div className="flex space-x-4">
                    <div className="w-1/2">
                        <label className="block text-sm font-medium mb-1">Wing</label>
                        <input
                            type="text"
                            value={wing}
                            onChange={(e) => setWing(e.target.value)}
                            placeholder="Enter Wing"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block text-sm font-medium mb-1">Unit Number</label>
                        <input
                            type="text"
                            value={unit}
                            onChange={(e) => setUnit(e.target.value)}
                            placeholder="Enter Unit Number"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Time</label>
                    <div className="flex space-x-2">
                        <input
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                            required
                        />
                    </div>
                </div>

                <div className="flex justify-between mt-6 gap-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="w-6/12 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="flex items-center justify-center gap-1 font-semibold text-white bg-gradient-to-r from-[#fe512e] to-[#f09619] h-[40px] rounded-md w-6/12"
                    >
                        {initialData ? 'Update' : 'Save'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default VisitorAddForm;
