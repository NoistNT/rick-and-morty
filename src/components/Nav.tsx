import Link from 'next/link'
import SearchBar from '@/components/SearchBar'

export default function Nav() {
  return (
    <nav className='flex py-6 px-3 items-center gap-4 bg-indigo-800'>
      <Link href='/'>
        <h1 className='text-3xl font-bold text-white'>Rick and Morty</h1>
      </Link>
      <ul className='flex gap-4'>
        <li>
          <Link href='/character'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/counter'>Counter</Link>
        </li>
      </ul>
      <SearchBar />
    </nav>
  )
}
