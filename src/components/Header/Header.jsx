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

  return <header>This is header</header>
}
