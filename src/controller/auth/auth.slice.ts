import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DiContainer } from 'src/cores/di-container.core'
import { TokenLoggerFactory } from 'src/cores/logger.core'
import { IUserModel } from './types'

const Logger = DiContainer.container.resolve(TokenLoggerFactory).createLogger('auth-slice')

export enum AUTHENTICATE_STATUS {
  UNAUTHENTICATE = 'UNAUTHENTICATE',
  AUTHENTICATING = 'AUTHENTICATING',
  AUTHENTICATED = 'AUTHENTICATED'
}

export interface IAuthState {
  authenticateStatus: AUTHENTICATE_STATUS
  userInfo: IUserModel
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authenticateStatus: AUTHENTICATE_STATUS.UNAUTHENTICATE,
    userInfo: { id: -1, username: '', token: '' }
  },
  reducers: {
    unauthenticate: (state) => {
      Logger.log('unauthenticate action')
      return { ...state, authenticateStatus: AUTHENTICATE_STATUS.UNAUTHENTICATE }
    },
    authenticating: (state) => {
      Logger.log('authenticating action')
      return { ...state, authenticateStatus: AUTHENTICATE_STATUS.AUTHENTICATING }
    },
    authenticated: (state, action: PayloadAction<IUserModel>) => {
      Logger.log('authenticated action')
      return { ...state, authenticateStatus: AUTHENTICATE_STATUS.AUTHENTICATED, userInfo: { ...action.payload } }
    }
  }
})

export const authReducer = authSlice.reducer
export const authActions = authSlice.actions
