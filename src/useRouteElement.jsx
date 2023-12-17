import { useRoutes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

import Home from './pages/Home'
import Bejeweled from './pages/Bejeweled'
import Error404NotFound from './pages/Error404NotFound/Error404NotFound'
import RoomProfile from './pages/RoomProfile'
import Admin from './pages/Admin'

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
    },
    {
      path: '/admin',
      element: (
        <Admin />
      )
    }
  ])
  return routeElement
}
