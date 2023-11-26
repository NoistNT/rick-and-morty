import type { PaginationProps } from '@/types'

export default function Pagination({ prevPage, nextPage, lastPage }: PaginationProps): JSX.Element {
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
      >
        Last
      </button>
    </div>
  )
}
