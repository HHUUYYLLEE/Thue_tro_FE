import { useState } from 'react'
import Banner from '../../components/Banner'
import NavFilter from '../../components/NavFilter'
import RoomsList from '../../components/RoomsList'
import SidebarFilter from '../../components/SidebarFilter/SidebarFilter'
import { createSearchParams, useNavigate } from 'react-router-dom'
import useQueryParams from '../../hooks/useQueryParam'
export default function Home() {
  // const navigate = useNavigate()
  // const filterParams = useQueryParams()
  // // console.log(filterParams)
  // const [searchForm, setSearchForm] = useState({
  //   minPrice: 0,
  //   maxPrice: 5000000,
  //   minArea: 10,
  //   maxArea: 200,
  //   haveParkingLot: false,
  //   isNew: false,
  //   highSecurity: false,
  //   haveOwner: false,
  //   haveBed: false,
  //   haveWardrobe: false,
  //   haveDiningTable: false,
  //   haveRefrigerator: false,
  //   haveTV: false,
  //   haveKitchen: false,
  //   haveWashingMachine: false,
  //   numOfPeople: 'more5',
  //   ward_id: ''
  // })

  // const handleSearch = () => {
  //   navigate({
  //     pathname: '/',
  //     search: createSearchParams({
  //       ...searchForm
  //     }).toString()
  //   })
  // }
  return (
    <>
      <div>
        <div>
          <Banner />
        </div>
      </div>
      {/* <div className='mt-[5rem]'>
        <NavFilter Form={searchForm} handleSearch={handleSearch} />
      </div>
      <div className='my-[8rem] mx-[8rem] grid gap-x-[7rem] grid-cols-11'>
        <div className='row-start-1 col-span-3'>
          <SidebarFilter Form={searchForm} />
        </div> */}
      <div className='row-start-1 col-span-8'>
        {/* <RoomsList filter={searchForm} /> */}
        <RoomsList />
      </div>
      {/* </div> */}
    </>
  )
}
