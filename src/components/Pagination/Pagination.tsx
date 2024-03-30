import classNames from 'classnames'

interface Props {
  // queryConfig: QueryConfig
  pageSize?: number
  pageIndex?: number
  totalRows?: number
  onChangePage?: (pageIndex: number, pageSize: number) => void
}

/**
Với range = 2 áp dụng cho khoảng cách đầu, cuối và xung quanh current_page

[1] 2 3 ... 19 20
1 [2] 3 4 ... 19 20 
1 2 [3] 4 5 ... 19 20
1 2 3 [4] 5 6 ... 19 20
1 2 3 4 [5] 6 7 ... 19 20

1 2 ... 4 5 [6] 8 9 ... 19 20

1 2 ...13 14 [15] 16 17 ... 19 20


1 2 ... 14 15 [16] 17 18 19 20
1 2 ... 15 16 [17] 18 19 20
1 2 ... 16 17 [18] 19 20
1 2 ... 17 18 [19] 20
1 2 ... 18 19 [20]
 */

const RANGE = 2

const Pagination: React.FC<Props> = ({ pageIndex = 1, pageSize = 0, totalRows = 0, onChangePage }: Props) => {
  const totalPages = Math.ceil(totalRows / pageSize)
  const rangeItem = [
    (pageIndex - 1) * pageSize + 1,
    totalRows < pageIndex * pageSize ? totalRows : pageIndex * pageSize
  ]

  const renderPagination = () => {
    let dotAfter = false
    let dotBefore = false
    const renderDotBefore = (index: number) => {
      if (!dotBefore) {
        dotBefore = true
        return (
          <span key={index} className='mx-1 rounded shadow-sm'>
            ...
          </span>
        )
      }
      return null
    }
    const renderDotAfter = (index: number) => {
      if (!dotAfter) {
        dotAfter = true
        return (
          <span key={index} className='mx-1 rounded shadow-sm'>
            ...
          </span>
        )
      }
      return null
    }
    return Array(totalPages)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1

        // Điều kiện để return về ...
        if (pageIndex <= RANGE * 2 + 1 && pageNumber > pageIndex + RANGE && pageNumber < totalPages - RANGE + 1) {
          return renderDotAfter(index)
        } else if (pageIndex > RANGE * 2 + 1 && pageIndex < totalPages - RANGE * 2) {
          if (pageNumber < pageIndex - RANGE && pageNumber > RANGE) {
            return renderDotBefore(index)
          } else if (pageNumber > pageIndex + RANGE && pageNumber < totalPages - RANGE + 1) {
            return renderDotAfter(index)
          }
        } else if (pageIndex >= totalPages - RANGE * 2 && pageNumber > RANGE && pageNumber < pageIndex - RANGE) {
          return renderDotBefore(index)
        }

        return (
          <button
            key={index}
            disabled={pageIndex === pageNumber}
            onClick={() => hangdleChangePage(pageNumber, pageSize)}
            className={classNames('flex h-8 w-8 items-center justify-center border border-gray-300 shadow-sm', {
              'cursor-not-allowed border border-gray-300 text-white bg-[#ed1c23] hover:border-gray-300':
                pageNumber === pageIndex,
              'border border-gray-300 text-[#ed1c23] hover:bg-[#ed1c23] hover:text-white hover:border-gray-300':
                pageNumber !== pageIndex
            })}
          >
            {pageNumber}
          </button>
        )
      })
  }

  const hangdleChangePage = (newPageIndex: number, newPageSize: number) => {
    onChangePage && onChangePage(newPageIndex, newPageSize)
  }

  return (
    <div className='relative w-full'>
      <div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center'>
        <button
          disabled={pageIndex === 1}
          onClick={() => hangdleChangePage(pageIndex - 1, pageSize)}
          className={classNames(
            'flex h-8 w-8 items-center justify-center rounded-sm text-[#ed1c23] hover:bg-[#ed1c23] border hover:text-white border-gray-300 hover:border-gray-300',
            {
              'cursor-not-allowed text-black hover:bg-white': pageIndex === 1
            }
          )}
        >
          <svg className='h-3 w-3' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
            <path d='M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z' />
          </svg>
        </button>
        {renderPagination()}
        <button
          disabled={pageIndex === totalPages}
          onClick={() => hangdleChangePage(pageIndex + 1, pageSize)}
          className={classNames(
            'flex h-8 w-8 items-center justify-center rounded-sm text-[#ed1c23] hover:bg-[#ed1c23] border hover:text-white border-gray-300 hover:border-gray-300',
            {
              'cursor-not-allowed text-black hover:bg-white hover:text-black': pageIndex === totalPages
            }
          )}
        >
          <svg className='h-3 w-3' fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
            <path d='M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z' />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Pagination
