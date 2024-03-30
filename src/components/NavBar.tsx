import { Link, useLocation } from 'react-router-dom'
import clsx from 'classnames'

const NavBar = () => {
  const pathname = useLocation().pathname
  return (
    <div className='flex items-center justify-between px-4 lg:px-6 bg-white'>
      <div className='flex items-center'>
        <Link
          to='/'
          className={clsx(
            '  px-3 h-14 rounded-none font-light flex items-center hover:bg-[#ed1c23] hover:text-white transition-all',
            { 'bg-[#ed1c23] text-white': pathname === '/', 'bg-white text-black': pathname !== '/' }
          )}
        >
          Tranding
        </Link>
        <Link
          to='/categories'
          className={clsx(
            '  px-3 h-14 rounded-none font-light flex items-center hover:bg-[#ed1c23] hover:text-white transition-all',
            { 'bg-[#ed1c23] text-white': pathname === '/categories', 'bg-white text-black': pathname !== '/categories' }
          )}
        >
          Category
        </Link>
        <Link
          to='/news/6606828450b865a45bae5691'
          className={clsx(
            '  px-3 h-14 rounded-none font-light flex items-center hover:bg-[#ed1c23] hover:text-white transition-all',
            {
              'bg-[#ed1c23] text-white': pathname.includes('/news'),
              'bg-white text-black': !pathname.includes('/news')
            }
          )}
        >
          SingleNews
        </Link>
        <Link
          to='/'
          className='bg-[#fff] text-black px-3 h-14 rounded-none font-light flex items-center hover:bg-[#ed1c23] hover:text-white transition-all'
        >
          Dropdown
        </Link>
        <Link
          to='/'
          className='bg-[#fff] text-black px-3 h-14 rounded-none font-light flex items-center hover:bg-[#ed1c23] hover:text-white transition-all'
        >
          Contact
        </Link>
      </div>
      <form>
        <div className='flex'>
          <input type='text' placeholder='Keyword' className='h-10 bg-white border border-gray-300 px-2' />
          <button className='h-10 border bg-gray-200 w-10 flex items-center justify-center border-gray-300'>
            <svg className='h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
              <path d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z' />
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}

export default NavBar
