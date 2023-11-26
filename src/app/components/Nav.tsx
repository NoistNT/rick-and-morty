import Link from 'next/link'
import Image from 'next/image'

import SearchBar from '@/app/components/SearchBar'

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex flex-col items-center justify-between gap-2 bg-slate-900/50 py-2 backdrop-blur-md sm:flex-row sm:px-6 md:px-8 md:pb-0 md:pt-2">
      <Link className="transform transition-transform hover:scale-105" href="/">
        <Image alt="Rick and Morty Logo" height={67} src="/rickandmortylogo.webp" width={200} />
      </Link>
      <SearchBar placeholder="Search character" />
    </nav>
  )
}
