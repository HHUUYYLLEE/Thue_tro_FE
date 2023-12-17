import React from 'react'
import AdminHeader from '../../components/AdminHeader'
import AdminSidebar from '../../components/AdminSidebar'

export default function AdminLayout({ children }) {
  return (
    <>
      <div className='flex flex-col min-h-[100vh]'>
        <div className='bg-[#DCEAFF]'>
          <AdminHeader />
        </div>
        <div className='bg-[#DCEAFF]'>
          <AdminSidebar />
        </div>
        <div>{children}</div>
      </div>
    </>
  )
}
