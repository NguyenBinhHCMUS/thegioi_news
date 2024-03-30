import { Suspense, lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

import path from 'src/constants/path'
import PublicRoutes from './PublicRoutes'
import ProtectedRoutes from './ProtectedRoutes'
import PageLoading from 'src/components/PageLoading'

import MainLayout from 'src/layouts/MainLayout'
import RegisterLayout from 'src/layouts/RegisterLayout'

const NotFoundView = lazy(() => import('src/views/NotFound'))
const LoginView = lazy(() => import('src/views/Login'))
const HomeView = lazy(() => import('src/views/Home'))

const appRoutes: RouteObject[] = [
  {
    path: '',
    element: <ProtectedRoutes />,
    children: [
      {
        path: `${path.home}`,
        element: <MainLayout />,
        children: [
          {
            path: '/',
            element: (
              <Suspense fallback={<PageLoading />}>
                <HomeView />
              </Suspense>
            )
          }
        ]
      }
    ]
  },
  {
    path: '',
    element: <PublicRoutes />,
    children: [
      {
        path: '',
        element: <RegisterLayout />,
        children: [
          {
            path: path.login,
            element: (
              <Suspense fallback={<PageLoading />}>
                <LoginView />
              </Suspense>
            )
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <NotFoundView />
  }
]

export default appRoutes
