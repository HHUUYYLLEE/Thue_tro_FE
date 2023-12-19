import { useForm } from 'react-hook-form'
import BannerImage from '../../asset/img/banner.png'
import useQueryConfig from '../../hooks/useQueryConfig'
import { Link, createSearchParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getRandomRoom } from '../../api/rooms.api'
import { omit } from 'lodash'
import { PacmanLoader } from 'react-spinners'
import Slider from 'react-slick'
export default function Banner() {
  const { register, handleSubmit } = useForm({})
  const queryConfig = useQueryConfig()
  console.log(queryConfig)
  const navigate = useNavigate()
  const onSubmit = handleSubmit((data) => {
    console.log(data)
    navigate({
      pathname: '/',
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
  const { data, isLoading, isSuccess, refetch } = useQuery({
    queryKey: ['randomRoom'],
    queryFn: () => {
      return getRandomRoom()
    },
    staleTime: 1000 * 60 * 5
  })

  let updateBanner = false
  let first4Rooms, last4Rooms
  if (isSuccess) {
    const listRandomRooms = data?.data?.randomRooms
    first4Rooms = listRandomRooms.slice(0, 4)
    last4Rooms = listRandomRooms.slice(4)
  }
  console.log(data?.data?.randomRooms)
  return (
    <div>
      <img src={BannerImage} alt='' className='pointer-events-none' />
      <div>
        <div className='left-52 top-32 absolute text-white text-6xl font-abeezee'>
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
              className='h-[60px] font-andika backdrop-blur placeholder-white bg-white/30 text-white block p-4 pl-16 w-full text-sm border border-gray-300 rounded-[10px]'
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
        <div className='absolute -mt-[15rem] left-[8rem] w-[84vw]'>
          <div className='text-white text-3xl font-abeezee'>Các phòng trọ nổi bật</div>
          <div className='mt-12'>
            {isLoading ? (
              <div className='flex gap-[2vw]'>
                {[...Array(4)].map((e, i) => (
                  <div key={i} className='relative min-w-[19vw] max-w-[19vw] h-[217px]'>
                    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
                      <PacmanLoader color='#36d7b7' className='' />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <Slider
                infinite={true}
                speed={2500}
                slidesToShow={1}
                slidesToScroll={1}
                autoplay={true}
                arrows={false}
                dots={false}
                autoplaySpeed={5000}
                afterChange={() => {
                  if (updateBanner) {
                    updateBanner = false
                    refetch()
                  } else updateBanner = true
                }}
              >
                <div className=''>
                  <div className='flex gap-[2vw] pr-[2vw]'>
                    {first4Rooms &&
                      first4Rooms.map((dataRandomRoom) => {
                        return (
                          <Link to={`/room/${dataRandomRoom._id}`} key={dataRandomRoom._id}>
                            <img
                              src={dataRandomRoom.images[Math.floor(Math.random() * 5)].url}
                              alt=''
                              className='min-w-[19vw] max-w-[19vw] h-[217px] rounded-lg'
                            />
                          </Link>
                        )
                      })}
                  </div>
                </div>
                <div className=''>
                  <div className='flex gap-[2vw] pr-[2vw]'>
                    {last4Rooms &&
                      last4Rooms.map((dataRandomRoom) => {
                        return (
                          <Link to={`/room/${dataRandomRoom._id}`} key={dataRandomRoom._id}>
                            <img
                              src={dataRandomRoom.images[Math.floor(Math.random() * 5)].url}
                              alt=''
                              className='min-w-[19vw] max-w-[19vw] h-[217px] rounded-lg'
                            />
                          </Link>
                        )
                      })}
                  </div>
                </div>
              </Slider>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
