import React from 'react'
import Pepega from '../../asset/img/pepega.png'

export default function AdminHeader() {
  return (
    <header className='flex justify-between flex-row'>
      <div className="flex flex-col text-[#707EAE] ml-4">
        <div>Pages / Quản lý phòng trọ</div>
        <div className="text-[#2B3674] font-semibold text-3xl">Main Dashboard</div>
      </div>
      <div className='bg-white p-2.5 rounded-full w-[30rem] flex justify-between items-center'>
        <form>
          <div className='relative'>
            <div className='flex absolute inset-y-0 left-0 items-center pl-8 pointer-events-none z-10'>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-[#2B3674]'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                ></path>
              </svg>
            </div>
            <input
              type='search'
              id='default-search'
              className='h-[48px] font-andika backdrop-blur placeholder:text-[#8F9BBA] block p-4 pl-16 text-sm border border-gray-300 rounded-full outline-none bg-[#F4F7FE]'
              placeholder='Search'
            ></input>
          </div>
        </form>
        <div className='bg-gray-300 rounded-full w-[3rem] h-[3rem] flex items-center justify-center cursor-pointer'>
          <img src={Pepega} alt="" className='w-[2rem] h-[2rem]'/>
        </div>
      </div>
    </header>
  )
}
