'use client'

import { useSearchParams } from 'next/navigation'

import CharactersList from './components/CharactersList'

export default function Home() {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)

  const query = params.get('query')?.toString()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <CharactersList query={query} />
    </main>
  )
}
