'use client'

import { usePathname, useSearchParams, useRouter } from 'next/navigation'

export default function Pagination({ page, pages }: { page: number; pages: number }): JSX.Element {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const params: URLSearchParams = new URLSearchParams(searchParams)

  const handlePageChange = (page: number): void => {
    params.set('page', page.toString())

    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="my-10 flex w-full items-center justify-center gap-4 rounded-md bg-slate-800 py-2 text-white md:gap-7">
      <button
        className={
          page === 1
            ? 'text-neutral-500 transition-colors'
            : 'opacity-80 transition-colors hover:opacity-100'
        }
        disabled={page === 1}
        type="button"
        onClick={() => handlePageChange(1)}
      >
        First
      </button>
      <button
        className={
          page === 1
            ? 'text-neutral-500 transition-colors'
            : 'opacity-80 transition-colors hover:opacity-100'
        }
        disabled={page === 1}
        type="button"
        onClick={() => handlePageChange(Number(params.get('page')) - 1)}
      >
        Prev
      </button>
      <button
        className={
          page === pages
            ? 'text-neutral-500 transition-colors'
            : 'opacity-80 transition-colors hover:opacity-100'
        }
        disabled={page === pages}
        type="button"
        onClick={() => handlePageChange(Number(params.get('page')) + 1)}
      >
        Next
      </button>
      <button
        className={
          page === pages
            ? 'text-neutral-500 transition-colors'
            : 'opacity-80 transition-colors hover:opacity-100'
        }
        disabled={page === pages}
        type="button"
        onClick={() => handlePageChange(pages)}
      >
        Last
      </button>
    </div>
  )
}
