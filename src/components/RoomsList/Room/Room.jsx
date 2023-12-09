import { FaLocationDot } from 'react-icons/fa6'
import { IoMdCafe } from 'react-icons/io'
import { FaRegSquare } from 'react-icons/fa'
import { FaRegCheckSquare } from 'react-icons/fa'
import { displayNum } from '../../../utils/utils'
import { Link } from 'react-router-dom'
export default function Room({ dataRooms }) {
  return (
    <div className='flex justify-between items-center my-[1rem] border-2 rounded-md pr-[2rem]'>
      <div className='flex'>
        <div className='w-[18rem] overflow-hidden max-h-[13rem]'>
          <img
            src={dataRooms.images[0].url}
            className='w-full hover:scale-125 transition duration-300 ease-in-out h-full object-cover'
            alt=''
          />
        </div>
        <div className='ml-[1rem] flex-col flex justify-center max-h-[13rem]'>
          <div className='font-bold font-lato text-xl max-w-[28rem] line-clamp-2'>{dataRooms.name}</div>
          <div className='flex text-1xl text-[#01B7F2]'>
            <FaLocationDot />
            <div className='font-lato ml-[0.4rem] max-w-[27rem] line-clamp-1'>{dataRooms.address}</div>
          </div>
          <div className='font-montserrat-700'>{'Diện tích: ' + dataRooms.area + 'm2'}</div>
          <div className='flex mt-[0.8rem]'>
            <IoMdCafe />
            <div className='ml-[0.4rem] font-montserrat-700'>20+</div>
            <div className='ml-[0.4rem] font-montserrat-500'>Tiện ích</div>
          </div>
          <div className='flex mt-[0.8rem] items-center'>
            {dataRooms.is_checked_information ? (
              <FaRegCheckSquare className='text-[#0057FF] text-xl' />
            ) : (
              <FaRegSquare className='text-[#0057FF] text-xl' />
            )}
            <div className='font-lato text-[#01B7F2] text-lg  ml-[0.5rem]'>Đã xác minh</div>
          </div>
        </div>
      </div>
      <div className='mt-[1rem]'>
        <div className='text-[#353535] font-poppins-800 text-2xl'>{displayNum(dataRooms.price) + '/tháng'}</div>
        <div className='flex justify-end font-medium'>excl. tax</div>
        <div className='flex justify-end mt-[3rem]'>
          <Link to={dataRooms._id}>
            <button className='font-medium hover:bg-blue-500 bg-[#01B7F2] px-[2rem] py-[0.5rem] rounded-md text-white'>
              Xem phòng
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
