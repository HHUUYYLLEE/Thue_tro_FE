import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { getAllRooms } from '../../api/rooms.api'
import Room from './Room'
import useQueryConfig from '../../hooks/useQueryConfig'
import { useEffect, useRef, useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { createSearchParams, useNavigate } from 'react-router-dom'
import Loading from './Loading'
import { MdCalendarToday } from 'react-icons/md'

export default function RoomsList() {
  const queryConfig = useQueryConfig()
  console.log(queryConfig)
  const [sortMode, toggleSortMode] = useState(
    queryConfig?.sort === '1' ? 'Sắp xếp theo giá thấp nhất' : 'Sắp xếp theo giá cao nhất'
  )
  const sortOptions = [
    { label: 'Sắp xếp theo giá thấp nhất', value: '1' },
    { label: 'Sắp xếp theo giá cao nhất', value: '-1' }
  ]
  const [sortMenu, toggleSortMenu] = useState(false)
  const [enableLoadingMore, toggleLoadingMore] = useState(true)
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

  // console.log(queryConfig)

  const { status, data, isLoading, refetch } = useQuery({
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
    // console.log('loading more')
    navigate({
      pathname: '/admin/dashboard',
      search: createSearchParams({
        ...queryConfig,
        limit: parseInt(queryConfig.limit) + 4
      }).toString()
    })
  }

  // check xem đã đến giới hạn data chưa. chưa thì cho loadmore = true để load thêm data lên  , đã đến giới hạn thì loadmore = false
  // disable button loadmore khi đã đến giới hạn
  useEffect(() => {
    if (status === 'success') {
      const dataRooms = data?.data?.rooms
      const total = data?.data?.total
      if (dataRooms?.length >= total) toggleLoadingMore(false)
      else toggleLoadingMore(true)
    } else {
      toggleLoadingMore(false)
    }
  }, [data?.data?.rooms, data?.data?.total, queryConfig.limit, queryConfig.page, status])

  if (isLoading) return <Loading />
  return (
    <>
      <div className='flex justify-center items-center w-[8vw] rounded-lg bg-[#F4F7FE] py-[1vh] text-[#A3AED0]'>
        <MdCalendarToday className='scale-150' /> <div className='ml-[0.5vw] font-dmsans-500'>This month</div>
      </div>

      <div className='flex justify-between mb-[1rem] mr-[10.5vw] ml-[2vw] mt-[6vh]'>
        <div>
          <span className='font-poppins-500'>{`Xem ${dataRooms?.length ? dataRooms.length : '0'} trên `}</span>
          <span className='font-poppins-500 text-[#01B7F2]'>{`${data ? data?.data?.total : '0'} kết quả`}</span>
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
                      <li key={option.value} className='text-black w-full'>
                        <div
                          onClick={() => {
                            toggleSortMode(option.label)
                            navigate({
                              pathname: '/admin/dashboard',
                              search: createSearchParams({
                                ...queryConfig,
                                sort: option.value
                              }).toString()
                            })
                          }}
                          className='block hover:text-blue-500 cursor-pointer border-y-2  px-2 py-2 transition-all duration-400'
                        >
                          <div className='flex justify-between items-center'>
                            <div>{option.label}</div>
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
          return <Room key={room.id} room={room} refetch={refetch} />
        })}
      <div className='flex justify-between pl-[2.5vw] w-[71.5vw]'>
        {enableLoadingMore && (
          <button
            onClick={loadingMore}
            className='font-poppins-500 w-[57vw] py-[1rem] hover:bg-green-700 text-white text-xl rounded-md bg-[#4318FF]'
          >
            Xem thêm kết quả khác
          </button>
        )}
        <button
          className={`${
            enableLoadingMore ? 'w-[10vw]' : 'w-full'
          } font-poppins-500 flex justify-center items-center py-[1rem] hover:bg-green-700 text-white rounded-md bg-[#2BB3FF]`}
        >
          <span className='text-3xl'>+</span>
          <span className='text-lg'>&nbsp;Thêm Phòng</span>
        </button>
      </div>
    </>
  )
}
