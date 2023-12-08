import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Banner from '../../components/Banner'

function Mainlayout({ children }) {
  return (
    <>
      <div className='flex flex-col min-h-[100vh]'>
        <div className='bg-[#DCEAFF]'>
          <Header />
        </div>
        <div className='h-[100rem]'><Banner /></div>
        <div className='mt-auto'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Mainlayout
