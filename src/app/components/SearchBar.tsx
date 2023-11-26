'use client'

import { FaMagnifyingGlass } from 'react-icons/fa6'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

export default function SearchBar({ placeholder }: { placeholder: string }): JSX.Element {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = async (term: string) => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }

    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="relative flex w-full max-w-[300px] items-center gap-2 rounded-md border-2 border-white/20 px-2 py-1 shadow-lg transition-all duration-200 ease-in-out hover:border-white/30 md:max-w-sm">
      <input
        className="w-full rounded-md bg-transparent text-center text-[0.95rem] text-neutral-300 placeholder-neutral-500 outline-none transition-all duration-200 ease-in-out placeholder-shown:text-neutral-400 focus:placeholder-shown:text-neutral-700"
        defaultValue={searchParams.get('query')?.toString()}
        placeholder={placeholder}
        type="text"
        onChange={(event) => handleSearch(event.target.value)}
      />
      <FaMagnifyingGlass
        className="absolute right-4 top-1/2 -translate-y-1/2 transform text-neutral-500 transition-all duration-200 ease-in-out hover:text-neutral-700"
        size={20}
      />
    </div>
  )
}
