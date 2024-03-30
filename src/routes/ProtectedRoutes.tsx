import React, { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from 'src/layouts/MainLayout'
import Categories from 'src/views/Categories'
import Home from 'src/views/Home'
import News from 'src/views/News'

const ProtectedRoutes: React.FC = (props) => {
  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news/:id' element={<News />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </MainLayout>
  )
}

export default ProtectedRoutes
