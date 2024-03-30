import { ReactNode } from 'react'
import Slider from 'react-slick'
import clsx from 'classnames'

export interface MainCarouselProps {
  children: ReactNode
  settings?: any
}

function CustomNextArrow(props: any) {
  const { className, style, onClick } = props
  return (
    <div
      className={clsx(className, 'bg-transparent hover:bg-gray-50 text-white hover:text-black transition-all')}
      style={{
        ...style,
        position: 'absolute',
        right: '10px',
        width: '28px',
        height: '28px',
        border: '1px solid #fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onClick={onClick}
    >
      <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
          clipRule='evenodd'
        ></path>
      </svg>
    </div>
  )
}

function CustomPrevArrow(props: any) {
  const { className, style, onClick } = props
  return (
    <div
      className={clsx(className, 'bg-transparent hover:bg-gray-50 text-white hover:text-black transition-all')}
      style={{
        ...style,
        position: 'absolute',
        left: '10px',
        width: '28px',
        height: '28px',
        border: '1px solid #fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1
      }}
      onClick={onClick}
    >
      <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
          clipRule='evenodd'
        ></path>
      </svg>
    </div>
  )
}

function MainCarousel({ children, settings }: MainCarouselProps) {
  const defaultSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    ...settings
  }
  return (
    <div className='slider-container'>
      <Slider {...defaultSettings}>{children}</Slider>
    </div>
  )
}

export default MainCarousel
