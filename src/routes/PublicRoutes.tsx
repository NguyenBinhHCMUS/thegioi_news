import React, { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import FileUpload from 'src/views/Upload/FileUpload.view'

const LoginView = lazy(() => import('src/views/Login'))

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginView />} />
      <Route path='/upload' element={<FileUpload />} />
      <Route path='/auth/twitter/success' element={<LoginView />} />
      <Route path='*' element={<Navigate to='/login' replace />} />
    </Routes>
  )
}

export default PublicRoutes
