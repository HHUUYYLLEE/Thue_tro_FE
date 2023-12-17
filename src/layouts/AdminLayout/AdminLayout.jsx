import React from 'react'
import AdminHeader from '../../components/AdminHeader'
import AdminSidebar from '../../components/AdminSidebar'

export default function AdminLayout({ children }) {
  return (
    <>
      <div className='flex'>
        <div className='bg-[#DCEAFF]'>
          <AdminSidebar />
        </div>
        <div>
          <div className='bg-[#DCEAFF]'>
            <AdminHeader />
          </div>
          {children}
        </div>
      </div>
    </>
  )
}
