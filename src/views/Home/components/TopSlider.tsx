import { Link } from 'react-router-dom'
import { Fragment } from 'react/jsx-runtime'
import MainCarousel from 'src/components/MainCarousel'
import { INewsModel } from 'src/controller/news/types'

export interface TopSliderProps {
  news: INewsModel[]
}

export default function TopSlider({ news = [] }: TopSliderProps) {
  return (
    <Fragment>
      <MainCarousel
        settings={{
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
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
        {news.map((item) => (
          <Link to={`/news/${item.id}`} className='card !p-0'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <img className='w-20 h-20 object-cover' src={item.avatar} alt={item.avatar_desc} />
              </div>
              <div className='flex-1 min-w-0 ms-4'>
                <p className='pb-0 pr-2 line-clamp-2 text-black'>{item.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </MainCarousel>
    </Fragment>
  )
}
