import React from 'react';

const PersonalDetails = () => {
    const members = [
        {
            id: 1,
            name: 'Arlene McCoy',
            email: 'Arlenemccoy@gmail.com',
            phone: '+91 99130 52221',
            age: 22,
            gender: 'Male',
            relation: 'Brother',
        },
        {
            id: 2,
            name: 'Brooklyn Simmons',
            email: 'BrooklynSimmons@gmail.com',
            phone: '+91 99233 66134',
            age: 22,
            gender: 'Male',
            relation: 'Uncle',
        },
        {
            id: 3,
            name: 'Jenny Wilson',
            email: 'JennyWilson@gmail.com',
            phone: '+91 99130 52221',
            age: 22,
            gender: 'Male',
            relation: 'Sister',
        },
        {
            id: 4,
            name: 'Jane Cooper',
            email: 'JaneCooper@gmail.com',
            phone: '+91 99130 52221',
            age: 22,
            gender: 'Male',
            relation: 'Mother',
        },
    ];

    const vehicles = [
        { id: 1, type: 'Two Wheelers', name: 'Splendor', number: 'GJ-5216' },
        { id: 2, type: 'Four Wheelers', name: 'Fortuner', number: 'GJ-5216' },
        { id: 3, type: 'Two Wheelers', name: 'Splendor', number: 'GJ-5216' },
        { id: 4, type: 'Two Wheelers', name: 'Splendor', number: 'GJ-5216' },
    ];

    return (
        <div >
            <div className="flex flex-wrap  w-[100%] items-center bg-white shadow-md rounded-b-lg rounded-tr-lg p-3">
                <div className='w-[200px]'>
                    <img
                        src="https://via.placeholder.com/80"
                        alt="Profile"
                        className="w-[170px] h-[170px] rounded-full border border-gray-300 mr-6"
                    />
                </div>

                <div className="lg:w-[65%] w-[100%] flex flex-wrap">
                    {[
                        { label: 'Full Name', value: 'Arlene McCoy' },
                        { label: 'Phone Number', value: '+91 99130 44537' },
                        { label: 'Email Address', value: 'ArleneMcCoy25@gmail.com' },
                        { label: 'Wing', value: 'A' },
                        { label: 'Age', value: '20' },
                        { label: 'Unit', value: '1001' },
                        { label: 'Gender', value: 'Male' },
                        { label: 'Relation', value: 'Father' },
                    ].map((info, idx) => (
                        <div key={idx} className='w-[250px] py-2 my-1'>
                            <p className="text-sm font-semibold">{info.label}</p>
                            <p className="text-gray-600">{info.value}</p>
                        </div>
                    ))}
                </div>

                <div className="2xl:w-[20%] w-[100%] flex flex-wrap 2xl:gap-0 gap-2">
                    {['Address Proof Front Side.PDF', 'Address Proof Front Side.PDF'].map((file, idx) => (
                        <div key={idx} className='p-2 border my-1'>
                            <p className="text-sm font-semibold">{file}</p>
                            <p className="text-gray-500 text-xs">3.5 MB</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Members Section */}
            <div className="bg-white p-4 shadow-lg rounded-lg mt-6 w-full  overflow-auto">
                <h5 className="text-md font-bold">Members: (4)</h5>
                <div className="flex flex-wrap gap-4">
                    {members.map((member) => (
                        <div key={member.id} className="py-3 w-[370px] shadow-md rounded-lg relative text-sm">
                            <div className="rounded-t-lg font-bold mb-1 text-[16px] bg-blue-500 text-white p-3 flex items-center justify-between">
                                {member.name}
                            </div>
                            <div className="px-3 mt-2">
                                <div className='flex justify-between pb-1'>
                                    <p className="text-gray-600 ">Email </p>
                                    <p>{member.email}</p>
                                </div>
                                <div className='flex justify-between pb-1'>
                                    <p className="text-gray-600 ">Phone Number </p>
                                    <p>{member.phone}</p>
                                </div>
                                <div className='flex justify-between pb-1'>
                                    <p className="text-gray-600 ">Age </p>
                                    <p>{member.age}</p>
                                </div>
                                <div className='flex justify-between pb-1'>
                                    <p className="text-gray-600 ">Gender </p>
                                    <p>{member.gender}</p>
                                </div>
                                <div className='flex justify-between pb-1'>
                                    <p className="text-gray-600 ">Relation </p>
                                    <p>{member.relation}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Vehicles Section */}
            <div className="bg-white p-4 shadow-lg rounded-lg mt-6 w-full  overflow-auto">
                <h5 className="text-md font-bold">Vehicles: (4)</h5>
                <div className="flex flex-wrap gap-4">
                    {vehicles.map((vehicle) => (
                        <div key={vehicle.id} className="py-3 w-[370px] shadow-md rounded-lg relative text-sm">
                            <div className="rounded-t-lg font-bold mb-1 text-[16px] bg-blue-500 text-white p-3">
                                {vehicle.type}
                            </div>
                            <div className="px-3 mt-2">
                                <div className='flex justify-between pb-1'>
                                    <p className="text-gray-600 ">Vehicle Name </p>
                                    <p>{vehicle.name}</p>
                                </div>
                                <div className='flex justify-between pb-1'>
                                    <p className="text-gray-600 ">Vehicle Number </p>
                                    <p>{vehicle.number}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-6 p-5 rounded-lg shadow-md flex flex-wrap justify-between items-center bg-white">
                <div className="font-bold text-xl">

                    Show Maintenance Details
                </div>

                <div className="flex flex-wrap gap-3 w-full md:w-auto order-2 md:order-1">
                    <div className="p-6 rounded-lg shadow-md border-r-2 border-r-orange-500 flex justify-between items-center w-full md:w-[236px] h-[105px]">
                        <div>
                            <h4 className="text-[16px] font-semibold text-black">Maintenance Amount</h4>
                            <p className="text-[26px] font-semibold mt-2 text-green-600">₹ 1500</p>
                        </div>
                    </div>
                    <div className="p-6 rounded-lg shadow-md border-r-2 border-r-orange-500 flex justify-between items-center w-full md:w-[236px] h-[105px]">
                        <div>
                            <h4 className="text-[16px] font-semibold text-black">Penalty Amount</h4>
                            <p className="text-[26px] font-semibold mt-2 text-red-600">₹ 500</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-4 shadow-lg rounded-lg mt-6 w-full overflow-auto">
                <h5 className="text-md font-bold">Pending Maintenance</h5>
                <div className="flex flex-wrap gap-4">
                    {[
                        {
                            billDate: "11/01/2024",
                            pendingDate: "11/01/2024",
                            maintenanceAmount: "1000.00",
                            penaltyAmount: "250.00",
                            grandTotal: "₹ 1,250",
                        },
                        {
                            billDate: "11/01/2024",
                            pendingDate: "11/01/2024",
                            maintenanceAmount: "1000.00",
                            penaltyAmount: "250.00",
                            grandTotal: "₹ 1,250",
                        },
                        {
                            billDate: "11/01/2024",
                            pendingDate: "11/01/2024",
                            maintenanceAmount: "1000.00",
                            penaltyAmount: "250.00",
                            grandTotal: "₹ 1,250",
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="py-3 w-[370px] shadow-md rounded-lg  relative text-sm"
                        >
                            {/* Card Header */}
                            <div className="rounded-t-lg font-bold text-[16px] bg-blue-500 text-white p-3 flex items-center justify-between">
                                <span>Maintenance</span>
                                <span className="rounded-full bg-blue-600 px-3 py-1 text-[14px]">
                                    Pending
                                </span>
                            </div>

                            {/* Card Content */}
                            <div className="px-4 mt-2">
                                <div className="flex justify-between pb-2">
                                    <p className="text-gray-600">Bill Date</p>
                                    <p className='text-gray-400'>{item.billDate}</p>
                                </div>
                                <div className="flex justify-between pb-2">
                                    <p className="text-gray-600">Pending Date</p>
                                    <p className='text-gray-400'>{item.pendingDate}</p>
                                </div>
                                <div className="flex justify-between pb-2">
                                    <p className="text-gray-600">Maintenance Amount</p>
                                    <p className="text-red-600">{item.maintenanceAmount}</p>
                                </div>
                                <div className="flex justify-between pb-2">
                                    <p className="text-gray-600">Maintenance Penalty Amount</p>
                                    <p className="text-red-600">{item.penaltyAmount}</p>
                                </div>
                                <div className="flex justify-between pb-2 font-semibold">
                                    <p>Grand Total</p>
                                    <p className="text-green-600">{item.grandTotal}</p>
                                </div>
                            </div>

                            {/* Button */}
                            <button className="w-full py-2 mt-3 bg-gradient-to-r from-[#fe512e] to-[#f09619] text-white font-semibold rounded-lg hover:shadow-md">
                                Pay Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Due Maintenance Section */}
            <div className="bg-white p-4 shadow-lg rounded-lg mt-6 w-full overflow-auto">
                <h5 className="text-md font-bold">Due Maintenance</h5>
                <div className="flex flex-wrap gap-4">
                    {[
                        {
                            dueDate: "11/01/2024",
                            maintenanceAmount: "1000.00",
                            penaltyAmount: "250.00",
                            grandTotal: "₹ 1,250",
                        },
                        {
                            dueDate: "15/01/2024",
                            maintenanceAmount: "1500.00",
                            penaltyAmount: "300.00",
                            grandTotal: "₹ 1,800",
                        },
                        {
                            dueDate: "20/01/2024",
                            maintenanceAmount: "2000.00",
                            penaltyAmount: "400.00",
                            grandTotal: "₹ 2,400",
                        },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="py-3 w-[370px] shadow-md rounded-lg relative text-sm"
                        >
                            {/* Card Header */}
                            <div className="rounded-t-lg font-bold text-[16px] bg-blue-500 text-white p-3 flex items-center justify-between">
                                <span>Maintenance</span>
                                <span className="rounded-full bg-blue-600 px-3 py-1 text-[14px]">
                                    Pending
                                </span>
                            </div>

                            {/* Card Content */}
                            <div className="px-4 mt-2">
                                <div className="flex justify-between pb-2">
                                    <p className="text-gray-600">Due Date</p>
                                    <p className="text-gray-400">{item.dueDate}</p>
                                </div>
                                <div className="flex justify-between pb-2">
                                    <p className="text-gray-600">Maintenance Amount</p>
                                    <p className="text-red-600">{item.maintenanceAmount}</p>
                                </div>
                                <div className="flex justify-between pb-2">
                                    <p className="text-gray-600">Penalty Amount</p>
                                    <p className="text-red-600">{item.penaltyAmount}</p>
                                </div>
                                <div className="flex justify-between pb-2 font-semibold">
                                    <p>Grand Total</p>
                                    <p className="text-green-600">{item.grandTotal}</p>
                                </div>
                            </div>

                            {/* Button */}
                            <div className='px-4'>
                                <button className="w-full py-2  mt-3 bg-gradient-to-r from-[#fe512e] to-[#f09619] text-white font-semibold rounded-lg hover:shadow-md">
                                    Pay Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white p-4 shadow-lg rounded-lg mt-6 w-full overflow-auto">
                <h5 className="text-md font-bold">Announcements</h5>
                <div className="flex flex-wrap gap-4">
                    {[
                        {
                            id: 1,
                            date: "11/01/2024",
                            time: "10:00 AM",
                            description: "Maintenance work in block A from 10 AM to 2 PM.",
                        },
                        {
                            id: 2,
                            date: "12/01/2024",
                            time: "3:00 PM",
                            description: "Monthly meeting for residents in the clubhouse.",
                        },
                        {
                            id: 3,
                            date: "15/01/2024",
                            time: "5:00 PM",
                            description: "Water supply maintenance in block B.",
                        },
                    ].map((announcement) => (
                        <div
                            key={announcement.id}
                            className="py-3 w-[370px] shadow-md rounded-lg relative text-sm"
                        >
                            {/* Card Header */}
                            <div className="rounded-t-lg font-bold text-[16px] bg-blue-500 text-white p-3">
                                Announcement
                            </div>

                            {/* Card Content */}
                            <div className="px-4 mt-2">
                                <div className="flex justify-between pb-2">
                                    <p className="text-gray-600">Date</p>
                                    <p className="font-semibold">{announcement.date}</p>
                                </div>
                                <div className="flex justify-between pb-2">
                                    <p className="text-gray-600">Time</p>
                                    <p className="font-semibold">{announcement.time}</p>
                                </div>
                                <div className="pb-2">
                                    <p className="text-gray-600">Description</p>
                                    <p className="font-semibold">{announcement.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default PersonalDetails;
