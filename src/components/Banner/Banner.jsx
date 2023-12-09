import { useForm } from 'react-hook-form'
import BannerImage from '../../asset/img/banner.png'
import Room1 from '../../asset/img/room1.png'
import Room2 from '../../asset/img/room2.png'
import Room3 from '../../asset/img/room3.png'
import Room4 from '../../asset/img/room4.png'
import useQueryConfig from '../../hooks/useQueryConfig'
import { createSearchParams, useNavigate } from 'react-router-dom'

export default function Banner() {
  const { register, handleSubmit } = useForm({})
  const queryConfig = useQueryConfig()
  console.log(queryConfig)
  const navigate = useNavigate()
  const onSubmit = handleSubmit((data) => {
    console.log(data)
    navigate({
      pathname: '/',
      search: createSearchParams({
        ...queryConfig,
        ...data
      }).toString()
    })
  })
  return (
    <div>
      <img src={BannerImage} alt='' className='pointer-events-none' />
      <div>
        <div className='left-52 top-32 absolute text-white text-6xl italic'>
          Tìm phòng trọ uy tín,<br></br> giá rẻ
        </div>
        <form onSubmit={onSubmit} className='top-80 left-0 right-0 ml-auto mr-auto w-[50vw] absolute'>
          <div className='relative'>
            <div className='flex absolute inset-y-0 left-0 items-center pl-8 pointer-events-none z-10'>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-white'
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
              className='h-[60px] backdrop-blur placeholder-white bg-white/30 text-white block p-4 pl-16 w-full text-sm border border-gray-300 rounded-[10px]'
              placeholder='Tìm kiếm quận, huyện, vị trí, phòng trọ,...'
            ></input>
            <button
              type='submit'
              className='bg-white absolute right-2.5 bottom-[10px] text-blue-700 focus:outline-none italic px-10 py-2 rounded-[20px]'
            >
              Tìm kiếm
            </button>
          </div>
        </form>
        <div className='absolute -mt-60 left-0 right-0 ml-auto mr-auto w-[75vw]'>
          <div className='text-white text-3xl italic'>Các phòng trọ nổi bật</div>
          <div className='flex gap-8 mt-12'>
            <div>
              <img src={Room1} alt='' />
            </div>
            <div>
              <img src={Room2} alt='' />
            </div>
            <div>
              <img src={Room3} alt='' />
            </div>
            <div>
              <img src={Room4} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
