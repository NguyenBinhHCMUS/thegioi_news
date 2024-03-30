import NavBar from './NavBar'
import TopAds from './TopAds'
import TopBar from './TopBar'

const Footer = () => {
  return (
    <footer>
      <div className='grid grid-cols-1 lg:grid-cols-4 py-6 px-6 bg-white gap-10 lg:gap-4'>
        <div className='col-span-1'>
          <div className='flex flex-col space-y-3'>
            <h3 className='uppercase font-bold text-xl'>
              <span className='text-[#ed1c23]'>News</span>room
            </h3>
            <p className='text-[#979fa4]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate provident dolorum, officiis recusandae
              perspiciatis, non voluptatibus fuga ex natus eos nihil.
            </p>
            <div className='flex space-x-2'>
              <a
                href='https://www.facebook.com'
                target='_blank'
                rel='noreferrer'
                className='bg-white border border-[#dee2e6] rounded-none h-8 w-8 flex items-center justify-center'
              >
                <svg className='h-5 w-5 text-[#dee2e6]' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                  <path d='M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z' />
                </svg>
              </a>
              <a
                href='https://www.facebook.com'
                target='_blank'
                rel='noreferrer'
                className='bg-white border border-[#dee2e6] rounded-none h-8 w-8 flex items-center justify-center'
              >
                <svg className='h-4 w-4 text-[#dee2e6]' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'>
                  <path d='M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z' />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className='col-span-1'>
          <h3 className='font-bold text-xl pb-4'>Categories</h3>
          <div className='flex items-center flex-wrap -m-1'>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noreferrer'
              className='bg-white border border-[#949aa0] text-[#949aa0] rounded-none h-8 px-1 flex items-center justify-center m-1'
            >
              Politics
            </a>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noreferrer'
              className='bg-white border border-[#949aa0] text-[#949aa0] rounded-none h-8 px-1 flex items-center justify-center m-1'
            >
              Business
            </a>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noreferrer'
              className='bg-white border border-[#949aa0] text-[#949aa0] rounded-none h-8 px-1 flex items-center justify-center m-1'
            >
              Sports
            </a>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noreferrer'
              className='bg-white border border-[#949aa0] text-[#949aa0] rounded-none h-8 px-1 flex items-center justify-center m-1'
            >
              Health
            </a>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noreferrer'
              className='bg-white border border-[#949aa0] text-[#949aa0] rounded-none h-8 px-1 flex items-center justify-center m-1'
            >
              Education
            </a>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noreferrer'
              className='bg-white border border-[#949aa0] text-[#949aa0] rounded-none h-8 px-1 flex items-center justify-center m-1'
            >
              Science
            </a>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noreferrer'
              className='bg-white border border-[#949aa0] text-[#949aa0] rounded-none h-8 px-1 flex items-center justify-center m-1'
            >
              Technology
            </a>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noreferrer'
              className='bg-white border border-[#949aa0] text-[#949aa0] rounded-none h-8 px-1 flex items-center justify-center m-1'
            >
              Foods
            </a>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noreferrer'
              className='bg-white border border-[#949aa0] text-[#949aa0] rounded-none h-8 px-1 flex items-center justify-center m-1'
            >
              Travel
            </a>
          </div>
        </div>
        <div className='col-span-1'>
          <h3 className='font-bold text-xl pb-4'>Tags</h3>
          <div className='flex items-center flex-wrap -m-1'>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noreferrer'
              className='bg-white border border-[#949aa0] text-[#949aa0] rounded-none h-8 px-1 flex items-center justify-center m-1'
            >
              Politics
            </a>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noreferrer'
              className='bg-white border border-[#949aa0] text-[#949aa0] rounded-none h-8 px-1 flex items-center justify-center m-1'
            >
              Business
            </a>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noreferrer'
              className='bg-white border border-[#949aa0] text-[#949aa0] rounded-none h-8 px-1 flex items-center justify-center m-1'
            >
              Sports
            </a>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noreferrer'
              className='bg-white border border-[#949aa0] text-[#949aa0] rounded-none h-8 px-1 flex items-center justify-center m-1'
            >
              Health
            </a>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noreferrer'
              className='bg-white border border-[#949aa0] text-[#949aa0] rounded-none h-8 px-1 flex items-center justify-center m-1'
            >
              Education
            </a>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noreferrer'
              className='bg-white border border-[#949aa0] text-[#949aa0] rounded-none h-8 px-1 flex items-center justify-center m-1'
            >
              Science
            </a>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noreferrer'
              className='bg-white border border-[#949aa0] text-[#949aa0] rounded-none h-8 px-1 flex items-center justify-center m-1'
            >
              Technology
            </a>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noreferrer'
              className='bg-white border border-[#949aa0] text-[#949aa0] rounded-none h-8 px-1 flex items-center justify-center m-1'
            >
              Foods
            </a>
            <a
              href='https://www.facebook.com'
              target='_blank'
              rel='noreferrer'
              className='bg-white border border-[#949aa0] text-[#949aa0] rounded-none h-8 px-1 flex items-center justify-center m-1'
            >
              Travel
            </a>
          </div>
        </div>
        <div className='col-span-1'>
          <h3 className='font-bold text-xl pb-3'>Quick Links</h3>
          <ul>
            <li>
              <span className='text-[#949aa0]'>About</span>
            </li>
            <li>
              <span className='text-[#949aa0]'>Advertise</span>
            </li>
            <li>
              <span className='text-[#949aa0]'>About</span>
            </li>
            <li>
              <span className='text-[#949aa0]'>About</span>
            </li>
            <li>
              <span className='text-[#949aa0]'>About</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex items-center justify-center py-4 bg-[#f2f2f2]'>
        <div className='text-[#949aa0]'>
          ©<span className='text-[#ed1c23] font-bold'>Your Site Name</span>. All Rights Reverved. Designed by{' '}
          <span className='text-[#ed1c23] font-bold'>HTML Codex</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
