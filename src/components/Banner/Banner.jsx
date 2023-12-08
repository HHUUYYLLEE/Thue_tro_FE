import BannerImage from '../../asset/img/banner.png'
import Room1 from '../../asset/img/room1.png'
import Room2 from '../../asset/img/room2.png'
import Room3 from '../../asset/img/room3.png'
import Room4 from '../../asset/img/room4.png'

export default function Banner() {
  return (
    <div>
      <img src={BannerImage} alt='' className='absolute -z-1 pointer-events-none' />
      <div className='z-50 pl-28 pt-24 absolute text-white text-6xl italic'>
        Tìm phòng trọ uy tín,<br></br> giá rẻ
      </div>
      <form className='top-1/3 left-1/2 w-1/2 absolute -translate-x-1/2 -translate-y-1/2'>
        <div className='relative'>
          <div className='flex absolute inset-y-0 left-0 items-center pl-8 pointer-events-none z-50'>
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
      <div className='pl-28 pt-[540px]'>
        <div className='z-50 absolute text-white text-3xl italic'>Các phòng trọ nổi bật</div>
        <div className='flex absolute gap-4 mt-20'>
          <img src={Room1} alt=""/>
          <img src={Room2} alt=""/>
          <img src={Room3} alt=""/>
          <img src={Room4} alt=""/>
        </div>
      </div>
    </div>
  )
}
