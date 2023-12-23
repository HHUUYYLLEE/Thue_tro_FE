import { Link, NavLink, useLocation } from 'react-router-dom'
import LoginModal from '../LoginModal'
import Pepega from '../../asset/img/pepega.png'
import { AppContext } from '../../contexts/app.context'
import { useEffect, useRef, useState, useContext } from 'react'
import { logoutAccount } from '../../api/auth.api'
import { useMutation } from '@tanstack/react-query'
// const headerItems = [
//   { id: 1, name: 'Trang chủ', path: '/' },
//   { id: 2, name: 'Đăng nhập', path: '/login' },
//   { id: 3, name: 'Đăng ký', path: '/signup' }
// ]

export default function Header() {
  const [header, setHeader] = useState(false)
  const [modalLogin, setModalLogin] = useState(false)
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
        className={` fixed flex top-0 w-full h-20 backdrop-filter shadow-lg justify-between items-center transition duration-300 z-[990] ${
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
        <div className={`relative mr-20 cursor-pointer font-poppins-600 ${!isAuthenticated && 'invisible'}`} ref={refDropDown}>
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
                <button className='inline-flex w-full justify-center px-4 py-3 text-lg -mt-0.5'>
                  Tài khoản
                </button>
                <button className='inline-flex w-full justify-center text-red-600 px-4 py-3 text-lg mt-0.5'>
                  Đăng xuất
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
      {modalLogin && <LoginModal closeModalLogin={closeModalLogin} />}
    </>
  )
}
