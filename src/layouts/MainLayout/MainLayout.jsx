import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Body from '../../components/Body'

function Mainlayout({ children }) {
  return (
    <>
      <div className='flex flex-col min-h-[100vh]'>
        <div className='bg-[#DCEAFF]'>
          <Header />
        </div>
        <div className='h-[100rem]'></div>
        <div className='mt-auto'>
          <Body />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Mainlayout