import Banner from '../../components/Banner'
import NavFilter from '../../components/NavFilter'
import RoomDetail from '../../components/RoomDetail'

export default function Home() {
  return (
    <>
      <div>
        <div>
          <Banner />
        </div>
      </div>
      <div className='mt-[8rem]'>
        <NavFilter />
      </div>
      <div>
        <RoomDetail />
      </div>
    </>
  )
}
