import { useRoutes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

import Home from './pages/Home'
import Bejeweled from './pages/Bejeweled'
import Error404NotFound from './pages/Error404NotFound/Error404NotFound'
import RoomProfile from './pages/RoomProfile'
import AdminLayout from './layouts/AdminLayout'
import AdminDashboard from './pages/AdminDashboard'
import HostHome from './pages/HostHome'
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
      path: '/host',
      index: true,
      element: (
        <MainLayout>
          <HostHome />
        </MainLayout>
      )
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
      path: '/admin/dashboard',
      index: true,
      element: (
        <AdminLayout>
          <AdminDashboard />
        </AdminLayout>
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
