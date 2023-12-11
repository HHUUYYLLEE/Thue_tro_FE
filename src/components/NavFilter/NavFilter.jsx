import { useContext, useEffect, useRef, useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { FiFilter } from 'react-icons/fi'
import PopUpAddress from '../PopUpAddress'
import { AppContext } from '../../contexts/app.context'
export default function NavFilter() {
  const [addressMenu, setAddressMenu] = useState(false)
  const { valueAddress } = useContext(AppContext)
  const openAddressMenu = () => {
    setAddressMenu(!addressMenu)
  }
  const refAddress = useRef()
  const handleClickOutside = (event) => {
    if (refAddress.current && !refAddress.current.contains(event.target)) {
      setAddressMenu(false)
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className='w-full flex justify-center items-center border border-slate-400 px-7 pb-6 pt-8 mb-8'>
      <div className='w-[86%] flex justify-between'>
        <div className='font-poppins-700 text-[#353535] text-3xl mt-[0.5rem]'>Bộ lọc tìm kiếm</div>
        <div ref={refAddress} className='relative text-lg font-medium py-1'>
          <div
            onClick={openAddressMenu}
            className='flex  hover:text-blue-400 justify-between items-center cursor-pointer border border-black min-w-[20vw] rounded-lg  py-2 px-3'
          >
            <div></div>
            <div className=''>
              <p className='line-clamp-1 max-w-[8rem]'>{valueAddress == '' ? 'Vị trí' : valueAddress}</p>
            </div>
            <div>
              <AiOutlineDown />
            </div>
          </div>
          {addressMenu && <PopUpAddress setAddressMenu={setAddressMenu} />}
        </div>

        <div className='relative text-lg font-medium py-1'>
          <div className='flex text-lg font-medium hover:text-blue-400 justify-between items-center border cursor-pointer border-black min-w-[20vw] rounded-lg py-2 px-10'>
            <div></div>

            <p className='line-clamp-1 ml-[2vw] max-w-[8rem]'>Loại phòng</p>

            <div className='mr-[-2vw]'>
              <AiOutlineDown />
            </div>
          </div>
        </div>
        <div className='relative font-medium py-1 pl-[2vw]'>
          <button className='flex items-center bg-[#0153F2] min-w-[18vw] text-white cursor-pointer hover:bg-sky-600 font-poppins-600 rounded-md py-[0.8rem] mr-3'>
            <div className='flex justify-center items-center w-full'>
              <div className='mr-3 text-sm'>Tìm kiếm theo bộ lọc</div>
              <div className='text-lg'>
                <FiFilter />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
