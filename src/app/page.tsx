import CharactersList from './components/CharactersList'

export default function Home({ searchParams }: { searchParams: { query?: string } }) {
  const params = new URLSearchParams(searchParams)

  const query = params.get('query')?.toString()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <CharactersList query={query} />
    </main>
  )
}
