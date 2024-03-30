import Ads from 'src/components/Ads'
import { TopSlider } from './components'
import MainCarousel from 'src/components/MainCarousel'
import { useEffect, useState } from 'react'
import { useResolver } from 'src/cores/di-container.core'
import { TokenNewsController } from 'src/controller/news/news.controller'
import { INewsModel } from 'src/controller/news/types'
import moment from 'moment'
import { Link } from 'react-router-dom'

export default function Home() {
  const newsController = useResolver(TokenNewsController)
  const [newsTopSlider, setNewsTopSlider] = useState<INewsModel[]>([])
  const [newsBannerSlider, setBannerSlider] = useState<INewsModel[]>([])
  const [newsFeatures, setNewFeatures] = useState<INewsModel[]>([])
  const [newsBusiness, setNewsBusiness] = useState<INewsModel[]>([])
  const [newsTechnology, setNewsTechnology] = useState<INewsModel[]>([])
  const [newsEntertainment, setNewsEntertainment] = useState<INewsModel[]>([])
  const [newsSport, setNewsSport] = useState<INewsModel[]>([])
  const [newsPopular, setNewsPopular] = useState<INewsModel[]>([])
  const [newsLatest, setNewsLatest] = useState<INewsModel[]>([])
  const [newsTranding, setNewsTranding] = useState<INewsModel[]>([])

  useEffect(() => {
    ;(async () => {
      const newsTopSliderResponse = await newsController.getNewsAll({ limit: 4, page: 0 })
      setNewsTopSlider(newsTopSliderResponse?.docs || [])
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      const response = await newsController.getNewsAll({ limit: 5, page: 3 })
      setBannerSlider(response?.docs || [])
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      const response = await newsController.getNewsAll({ limit: 10, page: 4 })
      setNewFeatures(response?.docs || [])
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      const response = await newsController.getNewsAll({ limit: 10, page: 6 })
      setNewsBusiness(response?.docs || [])
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      const response = await newsController.getNewsAll({ limit: 10, page: 4 })
      setNewsTechnology(response?.docs || [])
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      const response = await newsController.getNewsAll({ limit: 10, page: 7 })
      setNewsEntertainment(response?.docs || [])
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      const response = await newsController.getNewsAll({ limit: 3, page: 2 })
      setNewsSport(response?.docs || [])
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      const response = await newsController.getNewsAll({ limit: 10, page: 4 })
      setNewsPopular(response?.docs || [])
    })()
  }, [])

  return (
    <div>
      <div className='py-8'>
        <div className='section-container'>
          <div className='w-full'>
            <TopSlider news={newsTopSlider} />
          </div>

          <div className='py-4'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 h-[700px] lg:h-[400px]'>
              <div className='col-span-1 lg:col-span-2'>
                <MainCarousel
                  settings={{
                    dots: false,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }}
                >
                  {newsBannerSlider.map((item) => (
                    <div className='relative h-[400px]'>
                      <div className='absolute top-0 left-0 w-full h-full'>
                        <img className='w-full h-full object-cover' src={item.avatar} alt='' />
                        <div className='absolute bottom-0 left-0 w-full text-white px-6 pb-4'>
                          <p>Technology / {moment(item.scraped_time).format('MMMM DD, YYYY')}</p>
                          <Link to={`/news/${item.id}`} className='text-2xl font-bold line-clamp-2 text-white'>
                            {item.title}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </MainCarousel>
              </div>
              <div className='col-span-1 h-full flex flex-col'>
                <div className='card flex-none'>
                  <div className='flex items-center justify-between'>
                    <h5 className='card-title'>Categories</h5>
                    <a href='#' className='text-sm font-medium hover:underline text-black'>
                      View all
                    </a>
                  </div>
                </div>
                <div className='grow overflow-y-auto h-[200px]'>
                  <ul className='mt-4 flex flex-col gap-2'>
                    {['Business', 'Technology', 'Entertainment', 'Sports', 'Education', 'Music'].map((item) => (
                      <li className='h-[60px] w-full relative'>
                        <Link to='/categories'>
                          <img
                            className='absolute top-0 left-0 w-full h-full object-cover'
                            src='https://picsum.photos/id/237/200/300'
                            alt=''
                          />
                          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <span className='text-white text-2xl'>{item}</span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='py-4'>
            <div className='grid grid-cols-1 lg:grid-cols-4'>
              <div className='col-span-1 lg:col-span-4'>
                <div className='card'>
                  <div className='flex items-center justify-between'>
                    <h5 className='card-title'>Featured</h5>
                    <a href='#' className='text-sm font-medium text-black hover:underline dark:text-blue-500'>
                      View all
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-span-1 lg:col-span-4 mt-4'>
                <MainCarousel settings={{ dots: false, slidesToShow: 4 }}>
                  {newsFeatures.map((item) => (
                    <Link to={`/news/${item.id}`} className='relative h-[300px]'>
                      <div className='absolute top-0 left-0 w-full h-full'>
                        <img className='w-full h-full object-cover' src={item.avatar} alt={item.avatar_desc} />
                        <div className='absolute bottom-0 left-0 w-full text-white px-6 pb-4'>
                          <p>Featured / {moment(item.scraped_time).format('MMMM DD, YYYY')}</p>
                          <p className='text-2xl font-bold line-clamp-2 '>{item.title}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </MainCarousel>
              </div>
            </div>
          </div>
          <div className='py-4'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
              <div className='col-span-1'>
                <div className='card'>
                  <div className='flex items-center justify-between'>
                    <h5 className='card-title'>Business</h5>
                    <div className='flex items-center space-x-3'>
                      <button className='bg-white border border-[#dee2e6] rounded-none h-5 w-5 flex items-center justify-center'>
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
                      <button className='bg-white border border-[#dee2e6] rounded-none h-5 w-5 flex items-center justify-center'>
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
                  </div>
                </div>
                <div className='mt-4'>
                  <MainCarousel
                    settings={{
                      slidesToShow: 2,
                      dots: false,
                      slidesToScroll: 1,
                      responsive: [
                        {
                          breakpoint: 1024,
                          settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                          }
                        },
                        {
                          breakpoint: 600,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            initialSlide: 2
                          }
                        },
                        {
                          breakpoint: 480,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                          }
                        }
                      ]
                    }}
                  >
                    {newsBusiness.map((item) => (
                      <div className='card !p-0'>
                        <Link to={`/news/${item.id}`}>
                          <img className='w-full h-40' src={item.avatar} alt={item.avatar_desc} />
                        </Link>
                        <div className='p-5'>
                          <Link to={`/news/${item.id}`}>
                            <p className='mb-2 text-sm tracking-tight text-gray-900'>
                              <span className='text-[#ed1c23]'>Business</span> /{' '}
                              {moment(item.scraped_time).format('MMMM DD, YYYY')}
                            </p>
                          </Link>
                          <Link to={`/news/${item.id}`}>
                            <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 line-clamp-2'>
                              {item.title}
                            </h5>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </MainCarousel>
                </div>
              </div>
              <div className='col-span-1'>
                <div className='card'>
                  <div className='flex items-center justify-between'>
                    <h5 className='card-title'>Technology</h5>
                    <div className='flex items-center space-x-3'>
                      <button className='bg-white border border-[#dee2e6] rounded-none h-5 w-5 flex items-center justify-center'>
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
                      <button className='bg-white border border-[#dee2e6] rounded-none h-5 w-5 flex items-center justify-center'>
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
                  </div>
                </div>
                <div className='mt-4'>
                  <MainCarousel
                    settings={{
                      slidesToShow: 2,
                      dots: false,
                      slidesToScroll: 1,
                      responsive: [
                        {
                          breakpoint: 1024,
                          settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                          }
                        },
                        {
                          breakpoint: 600,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            initialSlide: 2
                          }
                        },
                        {
                          breakpoint: 480,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                          }
                        }
                      ]
                    }}
                  >
                    {newsTechnology.map((item) => (
                      <div className='card !p-0'>
                        <Link to={`/news/${item.id}`}>
                          <img className='w-full h-40' src={item.avatar} alt={item.avatar_desc} />
                        </Link>
                        <div className='p-5'>
                          <Link to={`/news/${item.id}`}>
                            <p className='mb-2 text-sm tracking-tight text-gray-900'>
                              <span className='text-[#ed1c23]'>Technology</span> /{' '}
                              {moment(item.scraped_time).format('MMMM DD, YYYY')}
                            </p>
                          </Link>
                          <Link to={`/news/${item.id}`}>
                            <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 line-clamp-2'>
                              {item.title}
                            </h5>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </MainCarousel>
                </div>
              </div>
            </div>
          </div>
          <div className='py-4'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
              <div className='col-span-1'>
                <div className='card'>
                  <div className='flex items-center justify-between'>
                    <h5 className='card-title'>Entertainment</h5>
                    <div className='flex items-center space-x-3'>
                      <button className='bg-white border border-[#dee2e6] rounded-none h-5 w-5 flex items-center justify-center'>
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
                      <button className='bg-white border border-[#dee2e6] rounded-none h-5 w-5 flex items-center justify-center'>
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
                  </div>
                </div>
                <div className='mt-4'>
                  <MainCarousel
                    settings={{
                      slidesToShow: 2,
                      dots: false,
                      slidesToScroll: 1,
                      responsive: [
                        {
                          breakpoint: 1024,
                          settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                          }
                        },
                        {
                          breakpoint: 600,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            initialSlide: 2
                          }
                        },
                        {
                          breakpoint: 480,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                          }
                        }
                      ]
                    }}
                  >
                    {newsEntertainment.map((item) => (
                      <div className='card !p-0'>
                        <Link to={`/news/${item.id}`}>
                          <img className='w-full h-40' src={item.avatar} alt={item.avatar_desc} />
                        </Link>
                        <div className='p-5'>
                          <Link to={`/news/${item.id}`}>
                            <p className='mb-2 text-sm tracking-tight text-gray-900'>
                              <span className='text-[#ed1c23]'>Entertainment</span> /{' '}
                              {moment(item.scraped_time).format('MMMM DD, YYYY')}
                            </p>
                          </Link>
                          <Link to={`/news/${item.id}`}>
                            <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 line-clamp-2'>
                              {item.title}
                            </h5>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </MainCarousel>
                </div>
              </div>
              <div className='col-span-1'>
                <div className='card'>
                  <div className='flex items-center justify-between'>
                    <h5 className='card-title'>Sports</h5>
                    <div className='flex items-center space-x-3'>
                      <button className='bg-white border border-[#dee2e6] rounded-none h-5 w-5 flex items-center justify-center'>
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
                      <button className='bg-white border border-[#dee2e6] rounded-none h-5 w-5 flex items-center justify-center'>
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
                  </div>
                </div>
                <div className='mt-4'>
                  <MainCarousel
                    settings={{
                      slidesToShow: 2,
                      dots: false,
                      slidesToScroll: 1,
                      responsive: [
                        {
                          breakpoint: 1024,
                          settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                          }
                        },
                        {
                          breakpoint: 600,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            initialSlide: 2
                          }
                        },
                        {
                          breakpoint: 480,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                          }
                        }
                      ]
                    }}
                  >
                    {newsSport.map((item) => (
                      <div className='card !p-0'>
                        <Link to={`/news/${item.id}`}>
                          <img className='w-full h-40' src={item.avatar} alt={item.avatar_desc} />
                        </Link>
                        <div className='p-5'>
                          <Link to={`/news/${item.id}`}>
                            <p className='mb-2 text-sm tracking-tight text-gray-900'>
                              <span className='text-[#ed1c23]'>Sports</span> /{' '}
                              {moment(item.scraped_time).format('MMMM DD, YYYY')}
                            </p>
                          </Link>
                          <Link to={`/news/${item.id}`}>
                            <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 line-clamp-2'>
                              {item.title}
                            </h5>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </MainCarousel>
                </div>
              </div>
            </div>
          </div>
          <div className='py-4'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
              <div className='col-span-1 lg:col-span-2'>
                <div className='card'>
                  <div className='flex items-center justify-between'>
                    <h5 className='card-title'>Popular</h5>
                    <a href='#' className='text-sm font-medium text-black hover:underline'>
                      View all
                    </a>
                  </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4'>
                  {[1, 2].map((item) => (
                    <div className='card !p-0'>
                      <a href='#'>
                        <img className='w-full h-40' src='https://picsum.photos/seed/picsum/200/300' alt='' />
                      </a>
                      <div className='p-5'>
                        <a href='#'>
                          <p className='mb-2 text-sm tracking-tight text-gray-900'>
                            <span className='text-[#ed1c23]'>Technology</span> / Jan 01, 2025
                          </p>
                        </a>
                        <a href='#'>
                          <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900'>
                            Noteworthy technology acquisitions 2021
                          </h5>
                        </a>
                        <p className='mb-3 font-normal text-gray-700 line-clamp-3'>
                          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
                          chronological order.
                        </p>
                      </div>
                    </div>
                  ))}
                  {[1, 2, 3, 4].map((item) => (
                    <div className='col-span-1'>
                      <div className='card !p-0'>
                        <div className='flex items-center'>
                          <div className='flex-shrink-0'>
                            <img className='w-28 h-28 object-cover' src='https://picsum.photos/id/237/200/300' alt='' />
                          </div>
                          <div className='flex-1 min-w-0 ms-4'>
                            <p className='mb-2 text-sm tracking-tight text-gray-900'>
                              <span className='text-[#ed1c23]'>Technology</span> / Jan 01, 2025
                            </p>
                            <p className='pb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className='col-span-1 lg:col-span-2 mt-4'>
                    <div className='flex items-center justify-between'>
                      <div className='bg-black h-[70px] w-full flex items-center justify-between text-white'>
                        <div className='grow flex items-center justify-center'>HTML</div>
                        <div className='flex items-center'>|</div>
                        <div className='grow flex items-center justify-center'>ADS 700x70px</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Latest */}
                <div className='card mt-8'>
                  <div className='flex items-center justify-between'>
                    <h5 className='card-title'>Latest</h5>
                    <a href='#' className='text-sm font-medium text-blue-600 hover:underline dark:text-blue-500'>
                      View all
                    </a>
                  </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4'>
                  {[1, 2].map((item) => (
                    <div className='card !p-0'>
                      <a href='#'>
                        <img className='w-full h-40' src='https://picsum.photos/seed/picsum/200/300' alt='' />
                      </a>
                      <div className='p-5'>
                        <a href='#'>
                          <p className='mb-2 text-sm tracking-tight text-gray-900'>
                            <span className='text-[#ed1c23]'>Technology</span> / Jan 01, 2025
                          </p>
                        </a>
                        <a href='#'>
                          <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900'>
                            Noteworthy technology acquisitions 2021
                          </h5>
                        </a>
                        <p className='mb-3 font-normal text-gray-700 line-clamp-3'>
                          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
                          chronological order.
                        </p>
                      </div>
                    </div>
                  ))}
                  {[1, 2, 3, 4].map((item) => (
                    <div className='col-span-1'>
                      <div className='card !p-0'>
                        <div className='flex items-center'>
                          <div className='flex-shrink-0'>
                            <img className='w-28 h-28 object-cover' src='https://picsum.photos/id/237/200/300' alt='' />
                          </div>
                          <div className='flex-1 min-w-0 ms-4'>
                            <p className='mb-2 text-sm tracking-tight text-gray-900'>
                              <span className='text-[#ed1c23]'>Technology</span> / Jan 01, 2025
                            </p>
                            <p className='pb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='col-span-1'>
                <div className='card'>
                  <h5 className='card-title'>Follow Us</h5>
                </div>
                <div className='mt-4'>
                  <div className='grid grid-cols-2 gap-4'>
                    {[1, 2, 3, 4].map((item) => (
                      <a href='https://www.facebook.com' target='_blank' rel='noreferrer' className=' card !p-0 '>
                        <div className='flex gap-1 items-center bg-blue-600 p-2'>
                          <div className=''>
                            <svg
                              className='h-5 w-5 text-white'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 512 512'
                            >
                              <path d='M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z' />
                            </svg>
                          </div>
                          <div className='text-white'>Facebook</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
                <div className='card mt-8'>
                  <h5 className='card-title'>Newsletter</h5>
                </div>
                <div className='card mt-4'>
                  <p className='text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repellat ex architecto,
                    cupiditate quaerat porro!
                  </p>
                  <form className='pt-4 w-full'>
                    <div className='flex w-full'>
                      <input
                        type='text'
                        placeholder='Keyword'
                        className='h-10 bg-white border border-gray-300 px-2 flex-auto'
                      />
                      <button className='h-10 border bg-[#ed1c23] px-2 flex items-center justify-center border-gray-300 text-white flex-none'>
                        Sign Up
                      </button>
                    </div>
                  </form>
                  <p className='text-center text-sm'>Lorem, ipsum dolor sit amet</p>
                </div>
                <div className='card mt-8'>
                  <h5 className='card-title'>Tranding</h5>
                </div>
                <ul className='flex flex-col gap-4 mt-4'>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <li className='card !p-0'>
                      <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                          <img className='w-28 h-28 object-cover' src='https://picsum.photos/id/237/200/300' alt='' />
                        </div>
                        <div className='flex-1 min-w-0 ms-4'>
                          <p className='mb-2 text-sm tracking-tight text-gray-900'>
                            <span className='text-[#ed1c23]'>Technology</span> / Jan 01, 2025
                          </p>
                          <p className='pb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                {/* Tag */}
                <div className='card mt-8'>
                  <h5 className='card-title'>Tags</h5>
                </div>
                <div className='flex items-center flex-wrap -m-1 mt-4'>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
