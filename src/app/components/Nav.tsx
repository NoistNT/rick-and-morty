import Link from 'next/link'

import SearchBar from '@/app/components/SearchBar'

export default function Nav() {
  return (
    <nav className="flex items-center gap-4 bg-indigo-800 px-3 py-6">
      <Link href="/">
        <h1 className="text-3xl font-bold text-white">Rick and Morty</h1>
      </Link>
      <ul className="flex gap-4">
        <li>
          <Link href="/character">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/counter">Counter</Link>
        </li>
      </ul>
      <SearchBar />
    </nav>
  )
}
