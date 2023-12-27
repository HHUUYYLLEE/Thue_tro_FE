import { Link, NavLink, useLocation } from 'react-router-dom'
import LoginModal from '../LoginModal'
import Pepega from '../../asset/img/pepega.png'
import { AppContext } from '../../contexts/app.context'
import { useEffect, useRef, useState, useContext } from 'react'
import { logoutAccount } from '../../api/auth.api'
import { useMutation } from '@tanstack/react-query'
import Modal from 'react-modal'
import { TailSpin } from 'react-loader-spinner'

// const headerItems = [
//   { id: 1, name: 'Trang chủ', path: '/' },
//   { id: 2, name: 'Đăng nhập', path: '/login' },
//   { id: 3, name: 'Đăng ký', path: '/signup' }
// ]

export default function Header() {
  const [header, setHeader] = useState(false)
  const [modalLogin, setModalLogin] = useState(false)
  const [logoutModal, setLogoutModal] = useState(false)
  const { isAuthenticated, setIsAuthenticated, info, setInfo } = useContext(AppContext)

  const openModalLogin = () => {
    setModalLogin(true)
  }
  const closeModalLogin = () => {
    setModalLogin(false)
  }
  const changeBackground = () => {
    if (window.scrollY > 100) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }
  const logoutMutation = useMutation({
    mutationFn: logoutAccount,
    onSuccess: () => {
      setIsAuthenticated(false)
      setInfo(null)
      setLogoutModal(false)
    },
    onError: () => {
      setLogoutModal(false)
    }
  })

  const handleLogout = () => {
    logoutMutation.mutate()
  }

  const path = useLocation()
  // console.log(path.pathname.includes('/room'))

  // console.log(header)
  window.addEventListener('scroll', changeBackground)

  const [isOpen, setIsOpen] = useState(false)
  const refDropDown = useRef()

  const handleClickOutside = (event) => {
    if (refDropDown.current && !refDropDown.current.contains(event.target)) {
      setIsOpen(false)
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <header
        className={` fixed flex top-0 w-full h-20 backdrop-filter shadow-lg justify-between items-center transition duration-300 z-[20] ${
          path.pathname.includes('/room') === true
            ? 'bg-white'
            : `${header === true ? 'bg-slate-900/70' : 'bg-transparent'}`
        }`}
      >
        <div
          className={`ml-20 -mt-2 text-3xl italic ${
            path.pathname.includes('/room') === true ? 'text-blue-500' : 'text-white'
          }`}
        >
          <Link onClick={() => this.forceUpdate} to='/'>
            tro.vn
          </Link>
        </div>
        <div className='flex ml-80 gap-8 font-poppins-500'>
          {/* {headerItems.map((item) => {
          return (
            <NavLink
              onClick={() => this.forceUpdate}
              key={item.id}
              to={item.path}
              className={`group text-lg transition duration-300 ${
                path.pathname.includes('/room') ? 'text-black' : 'text-white'
              }`}
            >
              {item.name}
              <span
                className={`${
                  path.pathname === item.path
                    ? 'max-w-[80%]'
                    : 'max-w-0 group-hover:max-w-[80%] transition-all duration-500'
                } block rounded-xl mt-[0.5vh] h-[0.1rem] mx-auto ${
                  path.pathname.includes('/room') ? 'bg-black' : 'bg-white'
                }`}
              />
            </NavLink>
          )
        })} */}
          <NavLink
            onClick={() => this.forceUpdate}
            to='/'
            className={`group text-lg transition duration-300 ${
              path.pathname.includes('/room') ? 'text-black' : 'text-white'
            } ${isAuthenticated && 'ml-28'}`}
          >
            Trang chủ
            <span
              className={`${
                path.pathname === '/' ? 'max-w-[80%]' : 'max-w-0 group-hover:max-w-[80%] transition-all duration-500'
              } block rounded-xl mt-[0.5vh] h-[0.1rem] mx-auto ${
                path.pathname.includes('/room') ? 'bg-black' : 'bg-white'
              }`}
            />
          </NavLink>
          {/* <div
            onClick={openModalLogin}
            className={`group cursor-pointer text-lg transition duration-300 ${
              path.pathname.includes('/room') ? 'text-black' : 'text-white'
            }`}
          >
            Đăng nhập
            <span
              className={`${
                path.pathname === '/login'
                  ? 'max-w-[80%]'
                  : 'max-w-0 group-hover:max-w-[80%] transition-all duration-500'
              } block rounded-xl mt-[0.5vh] h-[0.1rem] mx-auto ${
                path.pathname.includes('/room') ? 'bg-black' : 'bg-white'
              }`}
            />
          </div>
          <NavLink
            onClick={() => this.forceUpdate}
            to='/signup'
            className={`group text-lg transition duration-300 ${
              path.pathname.includes('/room') ? 'text-black' : 'text-white'
            }`}
          >
            Đăng ký
            <span
              className={`${
                path.pathname === '/signup'
                  ? 'max-w-[80%]'
                  : 'max-w-0 group-hover:max-w-[80%] transition-all duration-500'
              } block rounded-xl mt-[0.5vh] h-[0.1rem] mx-auto ${
                path.pathname.includes('/room') ? 'bg-black' : 'bg-white'
              }`}
            />
          </NavLink> */}
          <div className={`flex flex-row gap-8 ${isAuthenticated && 'invisible'}`}>
            <div
              onClick={openModalLogin}
              className={`group cursor-pointer text-lg transition duration-300 ${
                path.pathname.includes('/room') ? 'text-black' : 'text-white'
              }`}
            >
              Đăng nhập
              <span
                className={`${
                  path.pathname === '/login'
                    ? 'max-w-[80%]'
                    : 'max-w-0 group-hover:max-w-[80%] transition-all duration-500'
                } block rounded-xl mt-[0.5vh] h-[0.1rem] mx-auto ${
                  path.pathname.includes('/room') ? 'bg-black' : 'bg-white'
                }`}
              />
            </div>
            <NavLink
              onClick={() => this.forceUpdate}
              to='/signup'
              className={`group text-lg transition duration-300 ${
                path.pathname.includes('/room') ? 'text-black' : 'text-white'
              }`}
            >
              Đăng ký
              <span
                className={`${
                  path.pathname === '/signup'
                    ? 'max-w-[80%]'
                    : 'max-w-0 group-hover:max-w-[80%] transition-all duration-500'
                } block rounded-xl mt-[0.5vh] h-[0.1rem] mx-auto ${
                  path.pathname.includes('/room') ? 'bg-black' : 'bg-white'
                }`}
              />
            </NavLink>
          </div>
        </div>
        <div
          className={`relative mr-20 cursor-pointer font-poppins-600 ${!isAuthenticated && 'invisible'}`}
          ref={refDropDown}
        >
          <div onClick={toggleMenu} className='flex items-center gap-2'>
            <div className='bg-gray-300 rounded-full w-[3rem] h-[3rem] flex items-center justify-center'>
              <img src={Pepega} alt='' className='w-[2rem] h-[2rem]' />
            </div>
            <div className={`font-semibold ${path.pathname.includes('/room') ? 'text-black' : 'text-white'}`}>
              {info?.user_name}
            </div>
          </div>
          {isOpen && (
            <div className='absolute z-10 mt-4 w-[10vw] rounded-lg shadow-lg border-[1px] border-black focus:outline-none bg-white/80'>
              <div className='py-1 divide-y-[1px] divide-gray-400'>
                <button className='inline-flex w-full justify-center px-4 py-3 text-lg -mt-0.5'>Tài khoản</button>
                <button
                  onClick={() => {
                    setIsOpen(false)
                    setLogoutModal(true)
                  }}
                  className='inline-flex w-full justify-center text-red-600 px-4 py-3 text-lg mt-0.5'
                >
                  Đăng xuất
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
      {modalLogin && <LoginModal closeModalLogin={closeModalLogin} />}
      <Modal
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)'
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            paddingLeft: '3vw',
            paddingRight: '3vw',
            paddingTop: '2vw',
            paddingBottom: '4vw',
            borderWidth: '0px',
            borderRadius: '1rem'
          }
        }}
        isOpen={logoutModal}
        onRequestClose={() => setLogoutModal(false)}
      >
        {logoutMutation.isPending ? (
          <>
            <div className='text-[#4FA94D] font-dmsans-700 mb-[5vh] text-3xl'>Đang đăng xuất...</div>
            <TailSpin
              height='200'
              width='200'
              color='#4fa94d'
              ariaLabel='tail-spin-loading'
              radius='5'
              visible={true}
              wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
            />
          </>
        ) : (
          <>
            <div className='font-inter-700 text-4xl'>Bạn có muốn đăng xuất?</div>
            <div className='mt-[8vh] flex justify-between'>
              <button
                onClick={handleLogout}
                className='w-[10vw] h-[8vh] flex justify-center items-center bg-[#0366FF] hover:bg-green-700 text-white font-inter-700 rounded-lg text-xl'
              >
                Đăng xuất
              </button>
              <button
                onClick={() => setLogoutModal(false)}
                className='w-[10vw] h-[8vh] flex justify-center items-center bg-[#DD1A1A] hover:bg-red-900 text-white font-inter-700 rounded-lg text-xl'
              >
                Huỷ
              </button>
            </div>
          </>
        )}
      </Modal>
    </>
  )
}
