import React from 'react'
import AdminHeader from '../../components/AdminHeader'
import AdminSidebar from '../../components/AdminSidebar'

export default function AdminLayout({ children }) {
  return (
    <>
      <div className='flex'>
        <div className='bg-[#F4F7FE]'>
          <AdminSidebar />
        </div>
        <div className='w-full h-full bg-[#F4F7FE] p-6'>
          <div>
            <AdminHeader />
          </div>
          {children}
        </div>
      </div>
    </>
  )
}
