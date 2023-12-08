import Banner from '../../components/Banner'
import NavFilter from '../../components/NavFilter'
import RoomsList from '../../components/RoomsList'
import SidebarFilter from '../../components/SidebarFilter/SidebarFilter'
export default function Home() {
  return (
    <>
      <div>
        <div>
          <Banner />
        </div>
      </div>
      <div className='mt-[5rem]'>
        <NavFilter />
      </div>
      <div className='my-[8rem] mx-[8rem] grid gap-x-[7rem] grid-cols-11'>
        <div className='row-start-1 col-span-3'>
          <SidebarFilter />
        </div>
        <div className='row-start-1 col-span-8'>
          <RoomsList />
        </div>
      </div>
    </>
  )
}
