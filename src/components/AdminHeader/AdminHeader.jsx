import Pepega from '../../asset/img/pepega.png'
import { FaRegBell } from 'react-icons/fa6'
import { FaMoon } from 'react-icons/fa'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { useForm } from 'react-hook-form'
import { omit } from 'lodash'
import { createSearchParams, useNavigate } from 'react-router-dom'
import useQueryConfig from '../../hooks/useQueryConfig'
export default function AdminHeader() {
  const { register, handleSubmit } = useForm({})
  const navigate = useNavigate()
  const queryConfig = useQueryConfig()
  const onSubmit = handleSubmit((data) => {
    console.log(data)
    navigate({
      pathname: '/admin/dashboard',
      search: createSearchParams(
        omit(
          {
            ...queryConfig,
            ...data
          },
          [
            'address',
            'type',
            'sort',
            'price_min',
            'price_max',
            'area_min',
            'area_max',
            'is_have_parking_lot',
            'is_new',
            'is_high_security',
            'is_have_owner',
            'is_have_bed',
            'is_have_wardrobe',
            'is_have_dinning_table',
            'is_have_refrigerator',
            'is_have_television',
            'is_have_kitchen',
            'is_have_washing_machine',
            'number_or_people'
          ]
        )
      ).toString()
    })
  })
  return (
    <header className='flex justify-between flex-row'>
      <div className='flex flex-col text-[#707EAE] ml-4'>
        <div>Pages / Quản lý phòng trọ</div>
        <div className='text-[#2B3674] font-semibold text-3xl'>Main Dashboard</div>
      </div>
      <div className='bg-white p-2.5 rounded-full w-[31rem] flex justify-between items-center'>
        <form onSubmit={onSubmit} className='mr-3'>
          <div className='relative'>
            <div className='flex absolute inset-y-0 left-0 items-center pl-8 pointer-events-none z-10'>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-[#2B3674]'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                ></path>
              </svg>
            </div>
            <input
              type='search'
              id='default-search'
              {...register('search')}
              className='h-[48px] font-andika backdrop-blur placeholder:text-[#8F9BBA] block p-4 pl-16 text-sm border border-gray-300 rounded-full outline-none bg-[#F4F7FE]'
              placeholder='Search'
            ></input>
          </div>
        </form>
        <FaRegBell className='text-[#8F9BBA] w-[1.5rem] h-[1.5rem] cursor-pointer' />
        <FaMoon className='text-[#8F9BBA] w-[1.3rem] h-[1.3rem] cursor-pointer' />
        <IoMdInformationCircleOutline className='text-[#8F9BBA] w-[1.7rem] h-[1.7rem] cursor-pointer' />
        <div className='bg-gray-300 rounded-full w-[3rem] h-[3rem] flex items-center justify-center cursor-pointer'>
          <img src={Pepega} alt='' className='w-[2rem] h-[2rem]' />
        </div>
      </div>
    </header>
  )
}
