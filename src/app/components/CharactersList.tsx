import { getCharacters } from '../api'

import Cards from './Cards'

export default async function CharactersList(): Promise<JSX.Element> {
  // const prevPage: PageProps = (currentPage - 1) as unknown as string
  // const nextPage: PageProps =
  //   currentPage === data?.info.pages ? '' : ((currentPage + 1) as unknown as string)
  // const lastPage: PageProps = data?.info.pages
  const characters = await getCharacters()
  const query = ''
  const currentPage = 1

  return (
    <section>
      <Cards characters={characters} currentPage={currentPage} query={query} />
    </section>
  )
}
