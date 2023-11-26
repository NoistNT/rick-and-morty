import { getCharacters } from '../api'

import Cards from './Cards'

export default async function CharactersList({ query }: { query?: string }): Promise<JSX.Element> {
  const characters = await getCharacters(query)

  return (
    <section>
      <Cards characters={characters} />
    </section>
  )
}
