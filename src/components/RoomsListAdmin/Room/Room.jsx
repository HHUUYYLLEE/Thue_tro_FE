import { FaLocationDot } from 'react-icons/fa6'
import { IoMdCafe } from 'react-icons/io'
import { displayNum } from '../../../utils/utils'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export default function Room({ room }) {
  let numOfFeatures = () => {
    let count = 0
    if (room.is_have_parking_lot) count++
    if (room.is_new) count++
    if (room.is_high_security) count++
    if (room.is_have_bed) count++
    if (room.is_have_wardrobe) count++
    if (room.is_have_dining_table) count++
    if (room.is_have_refrigerator) count++
    if (room.is_have_television) count++
    if (room.is_have_kitchen) count++
    if (room.is_have_washing_machine) count++
    return count
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className='flex flex-row w-full justify-center'>
      <div className='flex justify-between items-center my-[1rem] border-2 rounded-md w-full'>
        <div className='flex mr-2'>
          <div className='max-w-[16vw] min-w-[16vw] w-[100%] overflow-hidden max-h-[22vh] min-h-[22vh]'>
            <Link to={`/room/${room._id}`}>
              <img
                onMouseLeave={(e) => {
                  let randomIndex = Math.floor(Math.random() * 5)
                  while (room.images[randomIndex].url === e.target.src) randomIndex = Math.floor(Math.random() * 5)
                  e.target.src = room.images[randomIndex].url
                }}
                src={room.images[0].url}
                className='w-[100%] cursor-pointer hover:scale-125 transition duration-300 ease-in-out h-full object-cover' alt=''
              />
            </Link>
          </div>
          <div className='ml-[1rem] flex-col flex justify-center max-h-[12rem]'>
            <Link to={`/room/${room._id}`}>
              <div className='font-bold cursor-pointer font-lato text-2xl max-w-[16vw] line-clamp-1'>{room.name}</div>
            </Link>
            <div className='flex text-1xl text-[#01B7F2]'>
              <FaLocationDot />
              <div className='font-lato text-xs mt-1 ml-[0.4rem] max-w-[16vw] line-clamp-1'>{room.address}</div>
            </div>
            <div className='font-montserrat-700 text-sm mt-1'>{'Diện tích: ' + room.area + 'm2'}</div>
            <div className='flex mt-[1.2rem]'>
              <IoMdCafe />
              <div className='ml-[0.4rem] font-montserrat-700'>{numOfFeatures()}</div>
              <div className='ml-[0.4rem] font-montserrat-500'>Tiện ích</div>
            </div>
          </div>
        </div>
        <div className='mt-[1.5rem] mr-[2vw]'>
          <div className='text-[#353535] font-poppins-700 text-4xl'>{displayNum(room.price) + '/tháng'}</div>
          <div className='flex justify-end font-poppins-500 text-[#112211]'>excl. tax</div>
          <div className='flex justify-end mt-[1vh]'>
            <Link to={`/room/${room._id}`}>
              <button className='font-medium hover:bg-blue-500 bg-[#01B7F2] px-[2rem] py-[0.5rem] rounded-md text-white'>
                Xem phòng
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-between p-8 -mr-8'>
        <div className="relative inline-block text-left">
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex w-40 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm border-[1px] border-black hover:bg-gray-50"
            id="menu-button"
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            Lựa chọn
            <svg
              className={`mt-0.5 -mr-1 h-5 w-5 duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {isOpen && (
            <div
              className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg border-[1px] border-black focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1 divide-y divide-gray-500" role="none">
                <button className="inline-flex w-full justify-between gap-x-1.5 px-4 py-2 text-sm -mt-0.5" role="menuitem" tabIndex="-1" id="menu-item-0">
                  Sửa
                  <svg
                    className='mt-1'
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                  </svg>
                </button>
                <button className="inline-flex w-full justify-between gap-x-1.5 px-4 py-2 text-sm mt-0.5" role="menuitem" tabIndex="-1" id="menu-item-1">
                  Xóa
                  <svg
                    className='mt-1'
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                  >
                    <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z" />
                    <path
                      fillRule="evenodd"
                      d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
        {room.is_checked_information ? (
          <button className='bg-[#20AD2E] hover:bg-white text-white font-semibold hover:text-[#20AD2E] py-2 px-4 border border-green-900 rounded w-40'>Xác minh</button>
        ) : (
          <button className='group bg-[#5C5C5C] inline-flex justify-center hover:bg-white text-white font-semibold hover:text-[#5C5C5C] py-2 px-4 border border-gray-950 rounded w-40 pointer-events-none'>Đã xác minh
            <svg
              className='text-white group-hover:text-[#5C5C5C] mt-1 ml-2'
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
            >
            <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}