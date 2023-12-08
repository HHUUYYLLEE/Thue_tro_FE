import Banner from '../../components/Banner'
import PopUpAddress from '../../components/PopUpAddress'

export default function Home() {
  return (
    <>
      <div>
        <div>
          <Banner />
        </div>
      </div>
      <div className='mt-[20rem]'>
        <PopUpAddress />
      </div>
    </>
  )
}
