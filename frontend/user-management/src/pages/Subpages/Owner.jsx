import React from 'react'
import PersonalDetails from '../../components/PersonalDetails'
import { Link } from 'react-router-dom'

const Owner = () => {
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
      <PersonalDetails />
    </div>
  )
}

export default Owner
