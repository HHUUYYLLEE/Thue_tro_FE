import { FaLocationDot } from 'react-icons/fa6'
import { IoMdCafe } from 'react-icons/io'
import { FaRegSquare } from 'react-icons/fa'
import { FaRegCheckSquare } from 'react-icons/fa'
import { displayNum } from '../../../utils/utils'
import { Link } from 'react-router-dom'
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

  return (
    <div className='flex justify-between items-center my-[1rem] border-2 rounded-md pr-[2rem]'>
      <div className='flex'>
        <div className='max-w-[13vw] min-w-[13vw] w-[100%] overflow-hidden max-h-[12rem]'>
          <Link to={`/room/${room._id}`}>
            <img
              src={room.images[0].url}
              className='w-[100%] cursor-pointer hover:scale-125 transition duration-300 ease-in-out h-full object-cover'
              alt=''
            />
          </Link>
        </div>
        <div className='ml-[1rem] flex-col flex justify-center max-h-[12rem]'>
          <Link to={`/room/${room._id}`}>
            <div className='font-bold cursor-pointer font-lato text-lg max-w-[27rem] line-clamp-2'>{room.name}</div>
          </Link>
          <div className='flex text-1xl text-[#01B7F2]'>
            <FaLocationDot />
            <div className='font-lato text-xs mt-1 ml-[0.4rem] max-w-[27rem] line-clamp-1'>{room.address}</div>
          </div>
          <div className='font-montserrat-700 mt-1'>{'Diện tích: ' + room.area + 'm2'}</div>
          <div className='flex mt-[0.8rem]'>
            <IoMdCafe />
            <div className='ml-[0.4rem] font-montserrat-700'>{numOfFeatures()}</div>
            <div className='ml-[0.4rem] font-montserrat-500'>Tiện ích</div>
          </div>
          <div className='flex mt-[0.8rem] items-center'>
            {room.is_checked_information ? (
              <FaRegCheckSquare className='text-[#0057FF] text-xl' />
            ) : (
              <FaRegSquare className='text-[#0057FF] text-xl' />
            )}
            <div className='font-lato text-[#01B7F2] text-lg  ml-[0.5rem]'>Đã xác minh</div>
          </div>
        </div>
      </div>
      <div className='mt-[1rem] ml-5'>
        <div className='text-[#353535] font-poppins-800 text-xl'>{displayNum(room.price) + '/tháng'}</div>
        <div className='flex justify-end font-medium'>excl. tax</div>
        <div className='flex justify-end mt-[3rem]'>
          <Link to={`/room/${room._id}`}>
            <button className='font-medium hover:bg-blue-500 bg-[#01B7F2] px-[2rem] py-[0.5rem] rounded-md text-white'>
              Xem phòng
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
