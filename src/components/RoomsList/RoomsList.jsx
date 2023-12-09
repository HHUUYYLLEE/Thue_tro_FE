import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { getAllRooms } from '../../api/rooms.api'
import { FadeLoader } from 'react-spinners'
import useQueryConfig from '../../hooks/useQueryConfig'
export default function RoomsList() {
  const queryConfig = useQueryConfig()

  console.log(queryConfig)

  const { data, isLoading } = useQuery({
    queryKey: ['rooms', queryConfig],
    queryFn: () => {
      return getAllRooms(queryConfig)
    },
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5
  })

  const dataRooms = data?.data?.rooms
  console.log(dataRooms)

  return (
    <>
      {/* {data?.data?.rooms &&
        data?.data?.rooms?.map((room) => {
          return <Room key={room.id} info={room} />
        })} */}
      <div>hello</div>
    </>
  )
}
