import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

import Home from './pages/Home'
import Bejeweled from './pages/Bejeweled'
import Error404NotFound from './pages/Error404NotFound/Error404NotFound'
import RoomProfile from './pages/RoomProfile'
import HostRoomProfile from './pages/HostRoomProfile'
import AdminLayout from './layouts/AdminLayout'
import AdminDashboard from './pages/AdminDashboard'
import HostHome from './pages/HostHome'
import { useContext } from 'react'
import { AppContext } from './contexts/app.context'
import FlashGame from './pages/FlashGame/FlashGame'

// eslint-disable-next-line react-refresh/only-export-components
function AdminProtectedRouter() {
  const { info } = useContext(AppContext)
  const check = Boolean(info?.roles === 2)
  return check ? <Outlet /> : <Navigate to='/' />
}
// eslint-disable-next-line react-refresh/only-export-components
function HostProtectedRouter() {
  const { info } = useContext(AppContext)
  const check = Boolean(info?.roles === 1)
  return check ? <Outlet /> : <Navigate to='/' />
}

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: '/',
      index: true,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
    {
      path: '',
      element: <HostProtectedRouter />,
      children: [
        {
          path: '/host/room/:id',
          index: true,
          element: (
            <MainLayout>
              <HostRoomProfile />
            </MainLayout>
          )
        },
        {
          path: '/host',
          index: true,
          element: (
            <MainLayout>
              <HostHome />
            </MainLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <AdminProtectedRouter />,
      children: [
        {
          path: '/admin/dashboard',
          index: true,
          element: (
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          )
        }
      ]
    },
    {
      path: '/room/:id',
      index: true,
      element: (
        <MainLayout>
          <RoomProfile />
        </MainLayout>
      )
    },

    {
      path: 'bejeweled',
      element: (
        // <MainLayout>
        <Bejeweled />
        // </MainLayout>
      )
    },
    {
      path: 'flashgame',
      element: (
        // <MainLayout>
        <FlashGame />
        // </MainLayout>
      )
    },
    {
      path: '*',
      element: (
        // <MainLayout>
        <Error404NotFound />
        // </MainLayout>
      )
    }
  ])
  return routeElement
}
