import React from 'react'
import { useState } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { IoIosHome } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { RiAdminLine } from "react-icons/ri";

export default function AdminSidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div className={`bg-white h-screen w-72 duration-300 relative ${open ? "w-72" : "w-20"}`}>
      <BsArrowLeftShort className={`mt-2 -mr-0.5 bg-gray-200 text-3xl rounded-full absolute -right-3 top-9 border border-purple-950 cursor-pointer duration-300' ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
      <div className='flex justify-center p-10 border-b'>
        <h1 className={`text-[#2B3674] text-3xl ${!open && "hidden"}`}><strong>Admin </strong>DB</h1>
        <RiAdminLine className={`text-[#2B3674] min-w-[2rem] min-h-[2rem] ${open && "hidden"}`}/>
      </div>
      <div className={`flex flex-col gap-6 p-8 ${!open && "items-center"}`}>
        <div className='cursor-pointer flex items-center text-[#4318FF] hover:text-blue-600'>
          <IoIosHome className='min-w-[2rem] min-h-[2rem]'/>
          <div className={`ml-4 duration-200 ${!open && "hidden"}`}>Dashboard</div>
        </div>
        <div className='cursor-pointer flex items-center text-[#A3AED0] hover:text-blue-600'>
          <AiOutlineShoppingCart className='min-w-[2rem] min-h-[2rem]'/>
          <div className={`ml-4 duration-200 ${!open && "hidden"}`}>Quản lý phòng trọ</div>
        </div>
        <div className='cursor-pointer flex items-center text-[#A3AED0] hover:text-blue-600'>
          <VscGraph className='min-w-[2rem] min-h-[2rem]'/>
          <div className={`ml-4 duration-200 ${!open && "hidden"}`}>Quản lý khách hàng</div>
        </div>
      </div>
    </div>
  )
}
