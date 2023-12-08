import { FaLocationDot } from 'react-icons/fa6'

export default function RoomDetail() {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-5/6 flex flex-col justify-between'>
        <div className='flex flex-row justify-between font-bold text-2xl'>
          <div>Trọ sinh viên Hoàng Mai | Phòng 2-3 người | Từ 5 - 7 triệu | 221B Baker Street</div>
          <div>6.999.999 VNĐ</div>
        </div>
        <div className='flex flex-row justify-between mt-4'>
          <div className=''>
            <div className='flex'>
              <div className='self-center mr-1'>
                <FaLocationDot />
              </div>
              <div className='underline'>Hoàng Mai, Baker, Baker Street, 221B</div>
            </div>
            <div className='text-sm mt-3'>Diện tích: 30m2</div>
          </div>
          <div className='flex flex-row items-center justify-center'>
            <div className='flex items-center bg-[#CECECE] min-w-[8rem] text-black cursor-pointer border border-[#01B7F2] rounded-sm px-4 py-1.5 mr-3'>
              <div className='flex text-lg justify-center items-center w-full'>Đã xác minh</div>
            </div>
            <div className='flex items-center bg-[#01B7F2] min-w-[8rem] text-white cursor-pointer hover:bg-sky-600 font-semibold rounded-sm px-4 py-1.5'>
              <div className='flex text-lg justify-center items-center w-full'>Liên Hệ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
