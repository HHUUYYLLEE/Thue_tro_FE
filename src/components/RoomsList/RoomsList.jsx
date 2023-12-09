import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { getAllRooms } from '../../api/rooms.api'
import { FadeLoader } from 'react-spinners'
import Room from './Room'
import useQueryConfig from '../../hooks/useQueryConfig'
import { useEffect, useRef, useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { createSearchParams, useNavigate } from 'react-router-dom'

export default function RoomsList() {
  const [sortMode, toggleSortMode] = useState('Sắp xếp theo giá thấp nhất')
  const sortOptions = ['Sắp xếp theo giá thấp nhất', 'Sắp xếp theo giá cao nhất']
  const [sortMenu, toggleSortMenu] = useState(false)
  const refSort = useRef()
  const navigate = useNavigate()
  const handleClickOutside = (event) => {
    if (refSort.current && !refSort.current.contains(event.target)) {
      toggleSortMenu(false)
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  const queryConfig = useQueryConfig()

  // console.log(queryConfig)

  const { data, isLoading } = useQuery({
    queryKey: ['rooms', queryConfig],
    queryFn: () => {
      return getAllRooms(queryConfig)
    },
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5
  })

  const dataRooms = data?.data?.rooms
  console.log(data?.data)
  // const total = data?.data
  // console.log(total)
  const loadingMore = () => {
    console.log('loading more')
    navigate({
      pathname: '/',
      search: createSearchParams({
        ...queryConfig,
        limit: parseInt(queryConfig.limit) + 3
      }).toString()
    })
  }

  // check xem đã đến giới hạn data chưa. chưa thì cho loadmore = true để load thêm data lên  , đã đến giới hạn thì loadmore = false
  // disable button loadmore khi đã đến giới hạn
  const checkLoadingMore = () => {
    if (dataRooms?.length < queryConfig.limit * queryConfig.page) {
      return false
    }
    return true
  }

  console.log(checkLoadingMore())

  if (isLoading)
    return (
      <div className='relative'>
        <div className='absolute top-[50%] translate-y-[-50%] translate-x-[-50%] left-[50%]'>
          <FadeLoader color='#36d7b7' />
        </div>
      </div>
    )
  return (
    <>
      <div className='flex justify-between mb-[3rem]'>
        <div>
          <span className='font-poppins-500'>{`Xem ${queryConfig.limit * queryConfig.page} trên `}</span>
          <span className='font-poppins-500 text-[#01B7F2]'>{`${data && data?.data.total} kết quả`}</span>
        </div>
        <div className='relative' ref={refSort} onClick={() => toggleSortMenu(!sortMenu)}>
          <div className='font-poppins-500 flex justify-end hover:text-blue-400 cursor-pointer '>
            <div>{sortMode}</div>
            <div className='ml-[1rem]'>
              <AiOutlineDown />
            </div>
          </div>
          {sortMenu && (
            <div className='absolute z-50 right-[0.2rem] top-[2rem]'>
              <div className='z-50 bg-white divide-y overflow-y-auto example divide-gray-100 border border-black shadow min-w-[18rem] '>
                <ul>
                  {sortOptions.map((option) => {
                    return (
                      <li key={option} className='text-black w-full'>
                        <div
                          onClick={() => toggleSortMode(option)}
                          className='block hover:text-blue-500 cursor-pointer border-y-2  px-2 py-2 transition-all duration-400'
                        >
                          <div className='flex justify-between items-center'>
                            <div>{option}</div>
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      {dataRooms &&
        dataRooms?.map((room) => {
          return <Room key={room.id} dataRooms={room} />
        })}

      <button
        onClick={loadingMore}
        className='font-poppins-500 w-[100%] py-[1rem] hover:bg-green-700 text-white text-xl rounded-lg bg-[#172432]'
      >
        Xem thêm kết quả khác
      </button>
    </>
  )
}
