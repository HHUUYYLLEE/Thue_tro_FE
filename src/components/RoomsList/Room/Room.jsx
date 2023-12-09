import { FaLocationDot } from 'react-icons/fa6'
import { IoMdCafe } from 'react-icons/io'
import { FaRegSquare } from 'react-icons/fa'
import { FaRegCheckSquare } from 'react-icons/fa'
import { displayNum } from '../../../utils/utils'
export default function Room() {
  return (
    <div className='flex justify-between my-[3rem]'>
      <div className='flex'>
        <img src={info.images[0].url} className='w-[15rem] object-contain' alt='' />
        <div>
          <div className='font-bold font-lato text-2xl'>{info.name}</div>
          <div className='flex text-1xl text-[#01B7F2]'>
            <FaLocationDot />
            <div className='font-lato ml-[0.4rem]'>{info.address}</div>
          </div>
          <div className='font-montserrat-700'>{'Diện tích: ' + info.area + 'm2'}</div>
          <div className='flex text-1xl mt-[0.8rem]'>
            <IoMdCafe />
            <div className='ml-[0.4rem] font-montserrat-700'>20+</div>
            <div className='ml-[0.4rem] font-montserrat-500'>Tiện ích</div>
          </div>
          <div className='flex mt-[0.8rem]'>
            {info.is_checked_information ? (
              <FaRegCheckSquare className='text-[#0057FF] text-3xl' />
            ) : (
              <FaRegSquare className='text-[#0057FF] text-3xl' />
            )}
            <div className='font-lato text-[#01B7F2] text-1xl mt-[0.5rem] ml-[0.5rem]'>Đã xác minh</div>
          </div>
        </div>
      </div>
      <div>
        <div className='text-[#353535] font-poppins text-5xl'>{displayNum(info.price) + '/tháng'}</div>
        <div className='flex justify-end font-poppins'>excl. tax</div>
        <div className='flex justify-end mt-[3rem]'>
          <button className='font-poppins bg-[#01B7F2] px-[4rem] py-[1rem] rounded-lg text-white'>Xem phòng</button>
        </div>
      </div>
    </div>
  )
}
