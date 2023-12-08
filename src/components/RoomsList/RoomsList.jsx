import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { getAllRooms } from '../../api/rooms.api'
import Room from './Room/Room'
export default function RoomsList() {
  //   const { data, isLoading } = useQuery({
  //     queryKey: ['rooms', page],
  //     queryFn: () => {
  //       return getAllRooms(page)
  //     },
  //     placeholderData: keepPreviousData
  //   })
  //   console.log(data?.data)
  return (
    <>
      <Room />
      <Room />
    </>
  )
}
