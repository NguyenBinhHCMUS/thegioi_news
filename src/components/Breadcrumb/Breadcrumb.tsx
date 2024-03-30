import { Link } from 'react-router-dom'

export interface BreadcrumbProps {
  paths: Array<{ title: string; url?: string }>
}

function Breadcrumb({ paths }: BreadcrumbProps) {
  return (
    <nav className='flex' aria-label='Breadcrumb'>
      <ol className='inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse'>
        <Link to='/' className='inline-flex items-center'>
          <a
            href='#'
            className='inline-flex items-center text-sm font-medium text-[#ed1c23] hover:text-blue-600 dark:text-gray-400'
          >
            Home
          </a>
        </Link>
        {paths.map((path: { title: string; url?: string }, index: number) =>
          index !== paths.length - 1 ? (
            <li>
              <div className='flex items-center'>
                <span className='text-gray-400'> / </span>
                <a href='#' className='ms-1 text-sm font-medium text-[#ed1c23] hover:text-blue-600 md:ms-2'>
                  {path.title}
                </a>
              </div>
            </li>
          ) : (
            <li aria-current='page'>
              <div className='flex items-center'>
                <span className='text-gray-400'> / </span>
                <span className='ms-1 text-sm font-medium text-gray-500 md:ms-2 line-clamp-1'>{path.title}</span>
              </div>
            </li>
          )
        )}
      </ol>
    </nav>
  )
}

export default Breadcrumb
