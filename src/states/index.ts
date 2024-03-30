import { configureStore } from '@reduxjs/toolkit'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { useDispatch, useSelector } from 'react-redux'
import { DiContainer } from 'src/cores/di-container.core'
import { authReducer, IAuthState } from '../controller/auth/auth.slice'

export interface IAppState {
  auth: IAuthState
}

const globalStore = configureStore<IAppState>({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: { auth: authReducer }
})

export type IAppDispatch = typeof globalStore.dispatch
export const useAppSelector = useSelector
export const useAppDispatch = () => useDispatch<IAppDispatch>()
export const dispatch = globalStore.dispatch

export type TypeGlobalStore = ToolkitStore<IAppState>
export const TokenGlobalStore = DiContainer.defineToken<TypeGlobalStore>('global-store')
DiContainer.container.registerInstance(TokenGlobalStore, globalStore)

export default globalStore
