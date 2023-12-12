import type { Character } from '@/types'

import { Suspense } from 'react'

import Card from './Card'
import CardSkeleton from './Skeletons/CardSkeleton'

export default function Cards({ characters }: { characters: Character[] }): JSX.Element {
  return (
    <div className="grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {characters.map((character: Character) => (
        <Suspense key={character.id} fallback={<CardSkeleton />}>
          <Card key={character.id} character={character} />
        </Suspense>
      ))}
    </div>
  )
}
