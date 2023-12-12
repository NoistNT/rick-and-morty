import { getCharacters, getApiInfo } from './api'
import Cards from './components/Cards'
import Pagination from './components/Pagination'

export default async function Home({
  searchParams
}: {
  searchParams?: { name?: string; page?: string }
}): Promise<JSX.Element> {
  const name = searchParams?.name || ''
  const page = Number(searchParams?.page) || 1

  const { pages } = await getApiInfo(name)
  const characters = await getCharacters(name, page)

  return (
    <main className="m-auto flex min-h-screen max-w-max flex-col items-center justify-center">
      <Pagination page={page} pages={pages} />
      <Cards characters={characters} />
      <Pagination page={page} pages={pages} />
    </main>
  )
}
