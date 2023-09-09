import { useAppDispatch } from '@/redux/hooks'
import { setCurrentPage } from '@/redux/features/character/characterSlice'
import { PaginationProps } from '@/types'

export default function Paginate({
  prevPage,
  nextPage
}: PaginationProps): JSX.Element {
  const dispatch = useAppDispatch()

  const handlePageChange = (page: number): void => {
    dispatch(setCurrentPage(page))
  }

  return (
    <div>
      <button onClick={() => handlePageChange(Number(prevPage))}>
        Prev Page
      </button>
      <button onClick={() => handlePageChange(Number(nextPage))}>
        Next Page
      </button>
    </div>
  )
}
