import React from 'react'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'

const MainLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      {/* Header */}
      <div>
        <Header />
      </div>

      {/* Content */}
      <div className='mt-[190px] bg-[#f2f2f2]'>{children}</div>
      <Footer />
    </div>
  )
}

export default MainLayout
