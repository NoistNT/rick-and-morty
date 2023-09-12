'use client'

import { Character } from '@/types'
import Card from './Card'

export default function Cards({
  characters
}: {
  characters: Character[]
}): JSX.Element {
  return (
    <section className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl'>
      {characters?.map((character: Character) => (
        <Card key={character.id} character={character} />
      ))}
    </section>
  )
}
