import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import Header from 'src/components/Header'
import config from 'src/constants/config'
interface Props {
  children?: React.ReactNode
}
function RegisterLayoutInner({ children }: Props) {
  return (
    <div className='relative'>
      <Header />
      {children}
      <Outlet />
      <div className='absolute bottom-2 right-2 bg-transparent text-sm text-gray-400'>{config.version}</div>
    </div>
  )
}

const RegisterLayout = memo(RegisterLayoutInner)
export default RegisterLayout
