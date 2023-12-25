import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

import Home from './pages/Home'
import Bejeweled from './pages/Bejeweled'
import Error404NotFound from './pages/Error404NotFound/Error404NotFound'
import RoomProfile from './pages/RoomProfile'
import AdminLayout from './layouts/AdminLayout'
import AdminDashboard from './pages/AdminDashboard'
import { useContext } from 'react'
import { AppContext } from './contexts/app.context'

// eslint-disable-next-line react-refresh/only-export-components
function RoleProtectedRouter() {
  const { info } = useContext(AppContext)
  const check = Boolean(info.roles === 2)
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
      element: <RoleProtectedRouter />,
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
