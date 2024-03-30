import moment from 'moment'

const TopBar = () => {
  return (
    <div className='flex items-center justify-between px-4 lg:px-6 bg-white'>
      <div className='flex space-x-6 items-center'>
        <button className='bg-[#ed1c23] text-white px-3 h-12 rounded-none font-light'>Tranding</button>
        <div className='flex items-center space-x-3 py-2'>
          <button className='bg-white border border-[#dee2e6] rounded-none h-8 w-8 flex items-center justify-center'>
            <svg
              className='h-5 w-5 text-[#dee2e6]'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
          <button className='bg-white border border-[#dee2e6] rounded-none h-8 w-8 flex items-center justify-center'>
            <svg
              className='h-5 w-5 text-[#dee2e6]'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
        <h3 className='line-clamp-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
      </div>
      <div className='hidden lg:block'>{moment().format('dddd, MMMM DD, YYYY')}</div>
    </div>
  )
}

export default TopBar
