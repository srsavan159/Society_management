import React from 'react'
import PersonalDetails from '../../components/PersonalDetails'
import { Link } from 'react-router-dom'

const Tenant = () => {
  return (
    <div className='mt-6'>
      <div className="shadow-md rounded-t-lg w-44 border-b-2 border-b-[#fc6d25] flex justify-between">
        <Link
          to="/personal-details/owner"
          className={`w-1/2 text-center py-3 font-semibold text-[14px] rounded-t-lg ${location.pathname === '/personal-details/owner'
            ? 'bg-gradient-to-r from-[#fe512e] to-[#f09619] text-white'
            : 'bg-white'
            }`}
        >
          Owner
        </Link>
        <Link
          to="/personal-details/tenant"
          className={`w-1/2 text-center py-3 font-semibold text-[14px] rounded-t-lg ${location.pathname === '/personal-details/tenant'
            ? 'bg-gradient-to-r from-[#fe512e] to-[#f09619] text-white'
            : 'bg-white'
            }`}
        >
          Tenant
        </Link>
      </div>
      <div className='flex flex-wrap gap-3 w-[100%] items-center bg-white shadow-md rounded-b-lg rounded-tr-lg p-3'>
        <div className='px-3'>
          <p className='font-semibold'>Owner Name</p>
          <p className='text-gray-500'>Arlene McCoy</p>
        </div>
        <div className='px-3'>
          <p className='font-semibold'>Owner Phone</p>
          <p className='text-gray-500'>+91 9876543210</p>
        </div>
        <div className='px-3'>
          <p className='font-semibold'>Owner Address</p>
          <p className='text-gray-500'>C-101,Dhara Arcade, Mota Varacha Surat</p>
        </div>
      </div>
      <div className='mt-6 rounded-lg overflow-hidden'>
        <PersonalDetails />

      </div>
    </div>
  )
}

export default Tenant
