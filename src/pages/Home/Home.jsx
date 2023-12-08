import Banner from '../../components/Banner'
import NavFilter from '../../components/NavFilter'

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
    </>
  )
}
