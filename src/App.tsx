import React, { useCallback, useEffect } from 'react'
import { TokenAuthController } from './controller/auth/auth.controller'
import { useAuth } from './controller/auth/auth.hook'
import { authActions, AUTHENTICATE_STATUS } from './controller/auth/auth.slice'
import { useResolver } from './cores/di-container.core'
import ProtectedRoutes from './routes/ProtectedRoutes'
import PublicRoutes from './routes/PublicRoutes'
import { useAppDispatch } from './states'

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const { authenticateStatus } = useAuth()
  const authController = useResolver(TokenAuthController)

  const autoLogin = useCallback(async () => {
    try {
      dispatch(authActions.authenticating())

      const userInfo = await authController.getUserInfo()
      if (userInfo) {
        dispatch(authActions.authenticated(userInfo))
      } else {
        dispatch(authActions.unauthenticate())
      }
    } catch (error) {
      dispatch(authActions.unauthenticate())
    }
  }, [dispatch, authController])

  useEffect(() => {
    autoLogin()
  }, [autoLogin])

  switch (authenticateStatus) {
    case AUTHENTICATE_STATUS.AUTHENTICATED:
      return <ProtectedRoutes />
    case AUTHENTICATE_STATUS.UNAUTHENTICATE:
      return <ProtectedRoutes />
    case AUTHENTICATE_STATUS.AUTHENTICATING:
    default:
      return <div>loading</div>
  }
}

export default App
