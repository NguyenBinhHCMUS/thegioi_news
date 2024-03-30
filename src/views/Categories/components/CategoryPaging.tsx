import moment from 'moment'
import { Link } from 'react-router-dom'
import { Fragment } from 'react/jsx-runtime'
import Pagination from 'src/components/Pagination'
import { INewsModel } from 'src/controller/news/types'

export interface CategoryPagingProps {
  data: INewsModel[]
  page: number
  limit: number
  totalRows: number
  onChangePage: (newPageIndex: number, newPageSize: number) => void
}

function CategoryPaging({ data, totalRows, page = 1, limit = 10, onChangePage }: CategoryPagingProps) {
  return (
    <Fragment>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4'>
        {data.map((news: INewsModel, index: number) => (
          <div key={index} className='col-span-1'>
            <Link to={`/news/${news.id}`} className='card !p-0'>
              <div className='flex items-center'>
                <div className='flex-shrink-0'>
                  <img className='w-28 h-28 object-cover' src={news.avatar} alt={news.avatar_desc} />
                </div>
                <div className='flex-1 min-w-0 ms-4'>
                  <p className='mb-2 text-sm tracking-tight text-gray-900'>
                    <span className='text-[#ed1c23]'>Technology</span> /
                    {moment(news.scraped_time).format('MMMM DD, YYYY')}
                  </p>
                  <p className='pb-0 line-clamp-2 text-black'>{news.title}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className='py-6'>
        {totalRows > 0 && (
          <Pagination pageIndex={page} pageSize={limit} totalRows={totalRows} onChangePage={onChangePage} />
        )}
      </div>
    </Fragment>
  )
}

export default CategoryPaging
