import { useEffect, useState } from 'react'
import { Fragment } from 'react/jsx-runtime'
import Breadcrumb from 'src/components/Breadcrumb'
import { INewsAllResponse, INewsModel } from 'src/controller/news/types'
import { CategoryPaging } from './components'
import { Link, createSearchParams, useNavigate } from 'react-router-dom'
import useQueryCategoriesConfig from 'src/controller/category/categories.hook'
import { useResolver } from 'src/cores/di-container.core'
import { TokenNewsController } from 'src/controller/news/news.controller'
import moment from 'moment'

export default function Categories() {
  const navigator = useNavigate()
  const queryConfig = useQueryCategoriesConfig()
  const newsController = useResolver(TokenNewsController)

  const [newsTranding, setNewsTranding] = useState<INewsModel[]>([])
  const [news, setNews] = useState<INewsAllResponse | undefined>()

  useEffect(() => {
    ;(async () => {
      const response = await newsController.getNewsAll({ limit: 4, page: 0 })
      setNewsTranding(response?.docs || [])
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      const response = await newsController.getNewsAll({ limit: queryConfig.limit, page: queryConfig.page })
      setNews(response)
    })()
  }, [queryConfig.page, queryConfig.limit])

  const handleChangePage = (newPageIndex: number, newPageSize: number) => {
    navigator({
      pathname: `/categories`,
      search: createSearchParams({
        ...queryConfig,
        page: newPageIndex.toString(),
        limit: newPageSize.toString()
      }).toString()
    })
  }

  return (
    <Fragment>
      <div className='section-container'>
        <div className='py-4'>
          <Breadcrumb paths={[{ title: 'Category', url: '/category' }, { title: 'Technology' }]} />
        </div>
        <div className='pb-4'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <div className='col-span-1 lg:col-span-2'>
              <div className='card'>
                <div className='flex items-center justify-between'>
                  <h5 className='card-title'>Technology</h5>
                  <a href='#' className='text-sm font-medium text-black hover:underline dark:text-blue-500'>
                    View all
                  </a>
                </div>
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4'>
                {newsTranding.map((item) => (
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
                      <div
                        className='mb-3 font-normal text-gray-700 line-clamp-3'
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      ></div>
                    </div>
                  </div>
                ))}

                <div className='col-span-1 lg:col-span-2'>
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

              <CategoryPaging
                data={news?.docs || []}
                totalRows={news?.totalDocs || 0}
                page={Number(queryConfig.page) || 1}
                limit={Number(queryConfig.limit) || 10}
                onChangePage={handleChangePage}
              />
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
                          <svg className='h-5 w-5 text-white' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repellat ex architecto, cupiditate
                  quaerat porro!
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
    </Fragment>
  )
}
