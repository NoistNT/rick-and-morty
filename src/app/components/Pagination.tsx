import type { PaginationProps } from '@/types'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { setCurrentPage, setName } from '@/redux/features/character/characterSlice'

export default function Pagination({ prevPage, nextPage, lastPage }: PaginationProps): JSX.Element {
  const dispatch = useAppDispatch()
  const { name } = useAppSelector((state) => state.character)

  const handlePageChange = (page: number): void => {
    dispatch(setCurrentPage(page))
    dispatch(setName(name))
  }

  return (
    <div className="my-10 flex items-center justify-center gap-4 rounded-md bg-slate-800 py-2 text-white md:gap-7">
      <button
        className={
          !prevPage
            ? 'text-neutral-500 transition-colors'
            : 'opacity-80 transition-colors hover:opacity-100'
        }
        disabled={!prevPage}
        type="button"
        onClick={() => handlePageChange(1)}
      >
        First
      </button>
      <button
        className={
          !prevPage
            ? 'text-neutral-500 transition-colors'
            : 'hover:opacity-00 opacity-80 transition-colors'
        }
        disabled={!prevPage}
        type="button"
        onClick={() => handlePageChange(Number(prevPage))}
      >
        Prev
      </button>
      <button
        className={
          !nextPage
            ? 'text-neutral-500 transition-colors'
            : 'opacity-80 transition-colors hover:opacity-100'
        }
        disabled={!nextPage}
        type="button"
        onClick={() => handlePageChange(Number(nextPage))}
      >
        Next
      </button>
      <button
        className={
          !nextPage
            ? 'text-neutral-500 transition-colors'
            : 'opacity-80 transition-colors hover:opacity-100'
        }
        disabled={!nextPage}
        type="button"
        onClick={() => handlePageChange(Number(lastPage))}
      >
        Last
      </button>
    </div>
  )
}
