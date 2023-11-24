import Link from 'next/link'
import Image from 'next/image'

import SearchBar from '@/app/components/SearchBar'

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex flex-col items-center justify-between gap-4 bg-slate-950 bg-opacity-80 p-3 backdrop-blur-sm backdrop-filter sm:flex-row lg:p-6">
      <Link className="transition-opacity hover:opacity-80" href="/">
        <Image alt="Rick and Morty Logo" height={100} src="/rickandmortylogo.webp" width={150} />
      </Link>
      <SearchBar />
    </nav>
  )
}
