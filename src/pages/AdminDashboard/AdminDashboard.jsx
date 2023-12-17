import React from 'react'
import RoomsListAdmin from "../../components/RoomsListAdmin"

export default function AdminDashboard() {
  return (
    <div className="w-full h-full bg-[#F4F7FE] p-12">
      <div className="border bg-white mt-10 p-16">
        <RoomsListAdmin />
      </div>
    </div>
  )
}
