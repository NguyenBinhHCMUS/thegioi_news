import { IAppState, useAppSelector } from '../../states'
import { IAuthState } from './auth.slice'

export const useAuth = () =>
  useAppSelector<IAppState, IAuthState>(
    (state) => state.auth,
    (oldState, newState) => {
      if (oldState.authenticateStatus !== newState.authenticateStatus) {
        return false
      }

      if (oldState.userInfo.id !== newState.userInfo.id) {
        return false
      }

      if (oldState.userInfo.username !== newState.userInfo.username) {
        return false
      }

      return true
    }
  )
