import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { getAllRooms } from '../../api/rooms.api'
import { FadeLoader } from 'react-spinners'
import Room from './Room/Room'
import { useEffect, useLayoutEffect, useState } from 'react'
import useQueryConfig from '../../hooks/useQueryConfig'
export default function RoomsList({ filter }) {
  const filterParams = filter
  // console.log(filterParams)
  // const { data, isLoading } = useQuery({
  //   queryKey: ['rooms', filterParams],
  //   queryFn: () => {
  //     return getAllRooms()
  //   },
  //   select: (data) => {
  //     console.log(data.data.rooms)
  //     data.data.rooms = data.data.rooms.filter((room) => {
  //       let valid = true
  //       if (room.is_have_parking_lot !== filterParams.haveParkingLot && filterParams.haveParkingLot === true)
  //         valid = false
  //       if (room.is_new !== filterParams.isNew && filterParams.isNew === true) valid = false
  //       if (room.is_high_security !== filterParams.haveHighSecurity && filterParams.haveHighSecurity === true)
  //         valid = false
  //       if (room.is_have_owner !== filterParams.haveOwner && filterParams.haveOwner === true) valid = false
  //       if (room.is_have_bed !== filterParams.haveBed && filterParams.haveBed === true) valid = false
  //       if (room.is_have_wardrobe !== filterParams.haveWardrobe && filterParams.haveWardrobe === true) valid = false
  //       if (room.is_have_dinning_table !== filterParams.haveDiningTable && filterParams.haveDiningTable === true)
  //         valid = false
  //       if (room.is_have_refrigerator !== filterParams.haveRefrigerator && filterParams.haveRefrigerator === true)
  //         valid = false
  //       if (room.is_have_television !== filterParams.haveTV && filterParams.haveTV === true) valid = false
  //       if (room.is_have_kitchen !== filterParams.haveKitchen && filterParams.haveKitchen === true) valid = false
  //       if (
  //         room.is_have_washing_machine !== filterParams.haveWashingMachine &&
  //         filterParams.haveWashingMachine === true
  //       )
  //         valid = false
  //       if (room.price < filterParams.minPrice) valid = false
  //       if (room.price > filterParams.maxPrice) valid = false
  //       if (room.area < filterParams.minArea) valid = false
  //       if (room.area > filterParams.maxArea) valid = false
  //       if (filterParams.ward_id !== '' && filterParams.ward_id !== room.ward_id._id) valid = false
  //       switch (filterParams.numOfPeople) {
  //         case 1:
  //           if (room.num_or_people !== 1) valid = false
  //           break
  //         case 2:
  //           if (room.num_or_people !== 2) valid = false
  //           break
  //         case 3:
  //           if (room.num_or_people !== 3) valid = false
  //           break
  //         case 4:
  //           if (room.num_or_people !== 4) valid = false
  //           break
  //         case 5:
  //           if (room.num_or_people !== 5) valid = false
  //           break
  //         case 'more5':
  //           if (room.num_or_people <= 5) valid = false
  //           break
  //       }
  //       return valid
  //     })

  //     return data
  //   }
  // })

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
