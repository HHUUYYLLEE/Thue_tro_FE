import { FaLocationDot } from 'react-icons/fa6'
import { IoMdCafe } from 'react-icons/io'
import { FaRegSquare } from 'react-icons/fa'
import { FaRegCheckSquare } from 'react-icons/fa'
import { displayNum } from '../../../utils/utils'
import { Link } from 'react-router-dom'
export default function Room({ dataRooms }) {
  return (
    <div className='flex justify-between my-[1rem] border-2 rounded-md py-[2rem] pr-[2rem]'>
      <div className='flex'>
        <div className='min-w-[10rem] max-h-[13rem]'>
          <img src={dataRooms.images[0].url} className='w-[10rem] h-[13rem] object-cover' alt='' />
        </div>
        <div className='ml-[1rem] max-h-[10rem]'>
          <div className='font-bold font-lato text-2xl max-w-[27rem] line-clamp-2'>{dataRooms.name}</div>
          <div className='flex text-1xl text-[#01B7F2]'>
            <FaLocationDot />
            <div className='font-lato ml-[0.4rem] max-w-[27rem] line-clamp-1'>{dataRooms.address}</div>
          </div>
          <div className='font-montserrat-700'>{'Diện tích: ' + dataRooms.area + 'm2'}</div>
          <div className='flex text-1xl mt-[0.8rem]'>
            <IoMdCafe />
            <div className='ml-[0.4rem] font-montserrat-700'>20+</div>
            <div className='ml-[0.4rem] font-montserrat-500'>Tiện ích</div>
          </div>
          <div className='flex mt-[0.8rem]'>
            {dataRooms.is_checked_information ? (
              <FaRegCheckSquare className='text-[#0057FF] text-3xl' />
            ) : (
              <FaRegSquare className='text-[#0057FF] text-3xl' />
            )}
            <div className='font-lato text-[#01B7F2] text-xl mt-[0.5rem] ml-[0.5rem]'>Đã xác minh</div>
          </div>
        </div>
      </div>
      <div className='mt-[1rem]'>
        <div className='text-[#353535] font-poppins-800 text-3xl'>{displayNum(dataRooms.price) + '/tháng'}</div>
        <div className='flex justify-end font-poppins-800'>excl. tax</div>
        <div className='flex justify-end mt-[3rem]'>
          <Link to={dataRooms._id}>
            <button className='font-poppins-800 bg-[#01B7F2] px-[4rem] py-[1rem] rounded-lg text-white'>
              Xem phòng
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
