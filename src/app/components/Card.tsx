import Link from 'next/link'
import Image from 'next/image'
import { Character } from '@/types'

export default function Card({ character }: { character: Character }) {
  return (
    <div className='bg-indigo-800 text-center rounded-md max-w-[300px]'>
      <Link href={`/character/${character.id}`}>
        <Image
          src={character.image}
          alt={character.name}
          width={300}
          height={300}
          className='rounded-t-md'
        />
        <div className='flex flex-col items-center gap-1 py-2'>
          <h2 className='text-xl'>{character.name}</h2>
          <h2>{character.gender}</h2>
          <h2>{character.species}</h2>
        </div>
      </Link>
    </div>
  )
}
