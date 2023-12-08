import { AiOutlineDown } from 'react-icons/ai'
import { FiFilter } from 'react-icons/fi'

const Body = () => (
  <div className='w-full flex justify-center border border-slate-400 py-8 mb-8'>
    <div className='w-3/4 flex justify-between'>
      <div className='font-bold text-2xl'>Bộ lọc tìm kiếm</div>
      <div className='flex items-center border border-black rounded py-1 px-3'>
        <div className='mr-20 w-[80px]  '>Vị trí</div>
        <div className=''>
          <AiOutlineDown />
        </div>
      </div>
      <div className='flex items-center border border-black rounded py-1 px-3'>
        <div className='mr-20'>Loại phòng</div>
        <div>
          <AiOutlineDown />
        </div>
      </div>
      <div className='flex items-center bg-[#0153F2] text-white hover:bg-sky-600 font-semibold rounded-lg px-5 py-2 mr-3'>
        <div className='mr-3'>Tìm kiếm theo bộ lọc</div>
        <div>
          <FiFilter />
        </div>
      </div>
    </div>
  </div>
)

export default Body
