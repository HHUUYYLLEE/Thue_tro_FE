import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import RegisterLayout from './layout/RegisterLayout'

import { useContext } from 'react'
import { AppContext } from './contexts/app.context'

import Bejeweled from './pages/Bejeweled/Bejeweled'
import Error404NotFound from './pages/Error404NotFound/Error404NotFound'
function ProtectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

function RejectedRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

function RoleProtectedRouter() {
  const { info } = useContext(AppContext)
  const check = Boolean(info.roles === 1)
  //  console.log(check)
  return check ? <Outlet /> : <Navigate to='/' />
}

function RoleProtectedRouter2() {
  const { info } = useContext(AppContext)
  const check = Boolean(info.roles === 2)
  // console.log(check)
  return check ? <Outlet /> : <Navigate to='/' />
}

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: '/',
      index: true,
      element: <MainLayout></MainLayout>
    },

    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: 'login',
          element: <RegisterLayout></RegisterLayout>
        },
        {
          path: 'register',
          element: <RegisterLayout></RegisterLayout>
        }
      ]
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: '',
          element: <RoleProtectedRouter2 />,
          children: [
            {
              path: 'employeeprofile',
              element: <MainLayout></MainLayout>
            },
            {
              path: 'listofavailablejobs',
              element: <MainLayout></MainLayout>
            },
            {
              path: 'listofavailablejobs/:id',
              element: <MainLayout></MainLayout>
            },
            {
              path: 'userrequestslist',
              element: <MainLayout></MainLayout>
            },
            {
              path: 'EmployeeAcceptedJobs',
              element: <MainLayout></MainLayout>
            }
          ]
        }
      ]
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: '',
          element: <RoleProtectedRouter />,
          children: [
            {
              path: 'employeelist',
              index: true,
              element: <MainLayout></MainLayout>
            },
            {
              path: 'employeelist/:id',
              index: true,
              element: <MainLayout></MainLayout>
            },
            {
              path: 'userprofile',
              element: <MainLayout></MainLayout>
            },
            {
              path: 'createjob',
              element: <MainLayout></MainLayout>
            },
            {
              path: 'usercreatedjobs',
              element: <MainLayout></MainLayout>
            },
            {
              path: 'usercreatedjobs/:id',
              element: <MainLayout></MainLayout>
            },
            {
              path: 'employeeapplyinglist/:id',
              element: <MainLayout></MainLayout>
            },
            {
              path: 'requestslist',
              element: <MainLayout></MainLayout>
            },
            {
              path: 'contractedjobslist',
              element: <MainLayout></MainLayout>
            },
            {
              path: 'payment/:id',
              element: <MainLayout></MainLayout>
            },
            {
              path: 'paymentsuccess',
              element: <MainLayout></MainLayout>
            }
          ]
        }
      ]
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
      path: 'bejeweled',
      element: (
        // <MainLayout>
        <Bejeweled />
        // </MainLayout>
      )
    }
  ])
  return routeElement
}
