import type { PaginationProps } from '@/types'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { setCurrentPage, setName } from '@/redux/features/character/characterSlice'

export default function Paginate({ prevPage, nextPage, lastPage }: PaginationProps): JSX.Element {
  const dispatch = useAppDispatch()
  const { name } = useAppSelector((state) => state.character)

  const handlePageChange = (page: number): void => {
    dispatch(setCurrentPage(page))
    dispatch(setName(name))
  }

  return (
    <div className="my-4 flex items-center justify-center gap-4 rounded-md bg-slate-600 py-2">
      <button disabled={!prevPage} type="button" onClick={() => handlePageChange(1)}>
        First
      </button>
      <button disabled={!prevPage} type="button" onClick={() => handlePageChange(Number(prevPage))}>
        Prev
      </button>
      <button disabled={!nextPage} type="button" onClick={() => handlePageChange(Number(nextPage))}>
        Next
      </button>
      <button disabled={!nextPage} type="button" onClick={() => handlePageChange(Number(lastPage))}>
        Last
      </button>
    </div>
  )
}
