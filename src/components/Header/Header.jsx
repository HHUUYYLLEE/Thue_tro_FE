import { useContext } from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import { AppContext } from '../../contexts/app.context'
// import { useMutation } from '@tanstack/react-query'
// import { logoutAccount } from '../../api/auth.api'
// import classNames from 'classnames'
// import UserAvatar from './UserAvatar'
// import Moving from '../Moving/Moving'

export default function Header() {
  //   const { isAuthenticated, setIsAuthenticated, info, setInfo } = useContext(AppContext)

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
    <header className='bg-gray-100 fixed flex top-0 w-full h-20 justify-between items-center'>
      <div className='pl-20 -mt-2 text-3xl text-[#30B4FF] italic'>
        <a href="#default">tro.vn</a>
      </div>
      <div className='flex pl-20 gap-8 font-semibold'>
        <a href="#default" class="group transition duration-300">
          Trang chủ
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </a>
        <a href="#login" class="group transition duration-300">
          Đăng nhập
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </a>
        <a href="#signup" class="group transition duration-300">
          Đăng ký
          <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </a>
      </div>
      <div>
      </div>
    </header>
  )
}
