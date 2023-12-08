import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const headerItems = [
  { id: 1, name: 'Trang chủ', path: '/' },
  { id: 2, name: 'Đăng nhập', path: '/login' },
  { id: 3, name: 'Đăng ký', path: '/signup' }
]

export default function Header() {
  const [header, setHeader] = useState(false)

  const changeBackground = () => {
    if (window.scrollY > 100) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }

  const path = useLocation()
  // console.log(path.pathname)

  window.addEventListener('scroll', changeBackground)

  return (
    <header
      className={`bg-transparent fixed flex top-0 w-full h-20 backdrop-filter shadow-lg justify-between items-center transition duration-300 z-[999] ${
        path.pathname === '/room' ? '' : `${header ? 'bg-slate-900/50' : ''}`
      }`}
    >
      <div className={`pl-20 -mt-2 text-3xl italic ${path.pathname === '/room' ? 'text-blue-500' : 'text-white'}`}>
        <Link to='/'>tro.vn</Link>
      </div>
      <div className='flex pl-20 gap-8 font-semibold'>
        {headerItems.map((item) => {
          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={`group text-lg transition duration-300 ${
                path.pathname === '/room' ? 'text-black' : 'text-white'
              }`}
            >
              {item.name}
              <span
                className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 ${
                  path.pathname === '/room' ? 'bg-black' : 'bg-white'
                }`}
              />
            </NavLink>
          )
        })}
      </div>
      <div></div>
    </header>
  )
}
