import Banner from '../../components/Banner'
import NavFilter from '../../components/NavFilter'
import RoomsList from '../../components/RoomsList'
import SidebarFilter from '../../components/SidebarFilter/SidebarFilter'

export default function Home() {
  return (
    <>
      <div>
        <Banner />
      </div>
      <div className='mt-[6rem]'>
        <NavFilter />
      </div>
      <div className='my-[3rem] mx-[9vw] grid gap-x-[3rem] grid-cols-11'>
        <div className='row-start-1 col-span-2'>
          <SidebarFilter />
        </div>
        <div className='row-start-1 col-span-9'>
          <RoomsList />
        </div>
      </div>
    </>
  )
}
