import { useAppDispatch } from '@/redux/hooks'
import { setCurrentPage } from '@/redux/features/character/characterSlice'
import { PaginationProps } from '@/types'

export default function Paginate({
  prevPage,
  nextPage,
  lastPage
}: PaginationProps): JSX.Element {
  const dispatch = useAppDispatch()

  const handlePageChange = (page: number): void => {
    dispatch(setCurrentPage(page))
  }

  return (
    <div className='flex justify-center items-center gap-4 bg-slate-600 py-2 my-4'>
      <button disabled={!prevPage} onClick={() => handlePageChange(1)}>
        First
      </button>
      <button
        disabled={!prevPage}
        onClick={() => handlePageChange(Number(prevPage))}
      >
        Prev
      </button>
      <button
        disabled={!nextPage}
        onClick={() => handlePageChange(Number(nextPage))}
      >
        Next
      </button>
      <button
        disabled={!nextPage}
        onClick={() => handlePageChange(Number(lastPage))}
      >
        Last
      </button>
    </div>
  )
}
