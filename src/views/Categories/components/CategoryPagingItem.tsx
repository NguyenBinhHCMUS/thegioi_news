export interface CategoryPagingItemProps {
  id: string
  image: string
  category: string
  createdAt: string
  title: string
}

function CategoryPagingItem({ id, image, category, createdAt, title }: CategoryPagingItemProps) {
  return (
    <div id={id} className='card !p-0'>
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
  )
}
