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
  console.log(path.pathname)

  window.addEventListener('scroll', changeBackground)

  return (
    <header
      className={`bg-transparent fixed flex top-0 w-full h-20 justify-between items-center transition duration-300 ${
        header ? 'bg-white/90 backdrop-filter shadow-lg' : ''
      }`}
    >
      <div className='pl-20 -mt-2 text-3xl text-[#30B4FF] italic'>
        <Link to='/'>tro.vn</Link>
      </div>
      <div className='flex pl-20 gap-8 font-semibold'>
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
