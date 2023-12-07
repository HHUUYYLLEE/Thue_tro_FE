import { useContext } from 'react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import { AppContext } from '../../contexts/app.context'
// import { useMutation } from '@tanstack/react-query'
// import { logoutAccount } from '../../api/auth.api'
// import classNames from 'classnames'
// import UserAvatar from './UserAvatar'
// import Moving from '../Moving/Moving'

const headerItems = [
  { id: 1, name: 'Trang chủ', path: '/' },
  { id: 2, name: 'Đăng nhập', path: '/login' },
  { id: 3, name: 'Đăng ký', path: '/signup' }
]

export default function Header() {
  //   const { isAuthenticated, setIsAuthenticated, info, setInfo } = useContext(AppContext)
  const [header, setHeader] = useState(false)

  const changeBackground = () => {
    if (window.scrollY > 100) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }

  const path = useLocation()
  console.log(path.pathname)

  window.addEventListener('scroll', changeBackground)
  //   const logoutMutation = useMutation({
  //     mutationFn: logoutAccount,
  //     onSuccess: () => {
  //       setIsAuthenticated(false)
  //       setInfo(null)
  //     }
  //   })

  //   const handleLogout = () => {
  //     logoutMutation.mutate()
  //   }
  //   //console.log(info)
  //   const navigate = useNavigate()

  //   const toggleOpenLogin = () => {
  //     navigate('/login')
  //   }
  //   const toggleOpenRegister = () => {
  //     navigate('/register')
  //   }

  return (
    <header
      className={`bg-transparent fixed flex top-0 w-full h-20 justify-between items-center ${
        header ? 'bg-white/90 backdrop-filter shadow-lg' : ''
      }`}
    >
      <div className='pl-20 -mt-2 text-3xl text-[#30B4FF] italic'>
        <Link to='/'>tro.vn</Link>
      </div>
      <div className='flex pl-20 gap-8 font-semibold'>
        {/* <NavLink to='/' className='group transition duration-300'>
          Trang chủ
          <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600' />
        </NavLink>
        <NavLink to='login' className='group transition duration-300'>
          Đăng nhập
          <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600' />
        </NavLink>
        <NavLink to='signup' className='group transition duration-300'>
          Đăng ký
          <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600' />
        </NavLink> */}
        {headerItems.map((item) => {
          return (
            <NavLink key={item.id} to={item.path} className='group transition duration-300'>
              {item.name}
              <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600' />
            </NavLink>
          )
        })}
      </div>
      <div></div>
    </header>
  )
}
