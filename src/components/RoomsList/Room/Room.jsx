import { FaLocationDot } from 'react-icons/fa6'
import { IoMdCafe } from 'react-icons/io'
import { FaRegSquare } from 'react-icons/fa'
import { FaRegCheckSquare } from 'react-icons/fa'

export default function Room() {
  return (
    <div className='flex justify-between my-[3rem]'>
      <div className='flex'>
        <img
          src='https://blog.cdn.own3d.tv/resize=fit:crop,height:400,width:600/BoYRMteyQBOo9hgM2TO0'
          className='w-[15rem]'
          alt=''
        />
        <div>
          <div className='font-bold font-lato text-2xl'>Phòng trọ 202B</div>
          <div className='flex text-1xl text-[#01B7F2]'>
            <FaLocationDot />
            <div className='font-lato ml-[0.4rem]'>Hoàng Mai</div>
          </div>
          <div className='font-montserrat-700'>Diện tích: 30m2</div>
          <div className='flex text-1xl mt-[0.8rem]'>
            <IoMdCafe />
            <div className='ml-[0.4rem] font-montserrat-700'>20+</div>
            <div className='ml-[0.4rem] font-montserrat-500'>Tiện ích</div>
          </div>
          <div className='flex mt-[0.8rem]'>
            <FaRegCheckSquare className='text-[#0057FF] text-3xl' />
            <div className='font-lato text-[#01B7F2] text-1xl mt-[0.5rem] ml-[0.5rem]'>Đã xác minh</div>
          </div>
        </div>
      </div>
      <div>
        <div className='text-[#353535] font-poppins text-5xl'>1.000.000/tháng</div>
        <div className='flex justify-end font-poppins'>excl. tax</div>
        <div className='flex justify-end mt-[3rem]'>
          <button className='font-poppins bg-[#01B7F2] px-[4rem] py-[1rem] rounded-lg text-white'>Xem phòng</button>
        </div>
      </div>
    </div>
  )
}
