import Image from 'next/image'
import Link from 'next/link'

import { getCharacterById } from '../api'

export default async function CharacterDetail({ params }: { params: { id: number } }) {
  const { id } = params
  const character = await getCharacterById(id)

  return (
    <section>
      <Link href="/" prefetch={false}>
        Go back
      </Link>
      <article>
        {character.image ? (
          <Image alt={character.name} height={300} src={character.image} width={300} />
        ) : null}
        <h1>{character.name}</h1>
        <h2>{character.status}</h2>
        <h2>{character.species}</h2>
        <h2>{character.type}</h2>
        <h2>{character.gender}</h2>
        <h2>{character.origin.name}</h2>
        <h2>{character.location.name}</h2>
        <h2>{character.episode.join(', ')}</h2>
      </article>
    </section>
  )
}
