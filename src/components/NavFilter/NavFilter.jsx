import React, { useContext, useEffect, useRef, useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { FiFilter } from 'react-icons/fi'
import PopUpAddress from '../PopUpAddress'
import { AppContext } from '../../contexts/app.context'
export default function NavFilter(props) {
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
    <div className='w-full flex justify-center items-center border border-slate-400  px-10 pb-6 pt-8 mb-8'>
      <div className='w-5/6 flex justify-between'>
        <div className='font-bold text-3xl'>Bộ lọc tìm kiếm</div>
        <div ref={refAddress} className='relative text-lg font-medium py-1 px-3'>
          <div
            onClick={openAddressMenu}
            className='flex  hover:text-blue-400 justify-between items-center cursor-pointer border border-black min-w-[18rem] rounded-lg  py-2 px-3'
          >
            <div></div>
            <div className=''>
              <p className='line-clamp-1 max-w-[10rem]'>{valueAddress == '' ? 'Vị trí' : valueAddress}</p>
            </div>
            <div>
              <AiOutlineDown />
            </div>
          </div>
          {addressMenu && <PopUpAddress Form={props.Form} setAddressMenu={setAddressMenu} />}
        </div>

        <div className='relative text-lg font-medium py-1 px-3'>
          <div className='flex text-lg font-medium hover:text-blue-400 justify-between items-center border cursor-pointer border-black min-w-[18rem] rounded-lg py-2 px-3'>
            <div></div>
            <div className=''>
              <p className='line-clamp-1 max-w-[10rem]'>Loại phòng</p>
            </div>
            <div>
              <AiOutlineDown />
            </div>
          </div>
        </div>
        <div className='relative text-lg font-medium py-1 px-3'>
          <button className='flex items-center bg-[#0153F2] min-w-[18rem] text-white cursor-pointer hover:bg-sky-600 font-semibold rounded-lg px-5 py-2 mr-3'>
            <div className='flex text-lg justify-center items-center w-full'>
              <div className='mr-3'>Tìm kiếm theo bộ lọc</div>
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
