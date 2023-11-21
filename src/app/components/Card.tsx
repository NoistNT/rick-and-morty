import type { Character } from '@/types'

import Link from 'next/link'
import Image from 'next/image'

export default function Card({ character }: { character: Character }) {
  return (
    <article className="max-w-[300px] rounded-md bg-indigo-800 text-center">
      <Link href={`/character/${character.id}`}>
        <Image
          alt={character.name}
          className="rounded-t-md"
          height={300}
          src={character.image}
          width={300}
        />
        <div className="flex flex-col items-center gap-1 py-2">
          <h2 className="text-xl">{character.name}</h2>
          <h2>{character.gender}</h2>
          <h2>{character.species}</h2>
        </div>
      </Link>
    </article>
  )
}
