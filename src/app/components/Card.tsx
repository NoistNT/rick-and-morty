import type { Character } from '@/types'

import { IoMdFemale, IoMdMale } from 'react-icons/io'
import Link from 'next/link'
import Image from 'next/image'

export default function Card({ character }: { character: Character }) {
  return (
    <article className="max-w-[300px] rounded-md border-2 border-neutral-800 bg-slate-900 bg-opacity-80 text-center shadow-lg transition-all duration-150 ease-in hover:-translate-y-1 hover:bg-slate-900 hover:shadow-neutral-800">
      <Image
        alt={character.name}
        className="rounded-b-sm rounded-t-md"
        height={300}
        src={character.image}
        width={300}
      />
      <div className="flex flex-col items-center justify-center gap-y-6 py-8">
        <Link href={`/${character.id}`}>
          <h2 className="max-w-[300px] truncate px-5 text-[1.6rem] font-bold opacity-80 transition-colors hover:opacity-100">
            {character.name}
          </h2>
        </Link>
        <div className="flex items-center justify-center gap-2">
          {character.gender === 'Female' ? (
            <IoMdFemale className="text-pink-500" size={24} />
          ) : (
            <IoMdMale className="text-blue-500" size={24} />
          )}
          <div className="flex gap-8 opacity-80">
            <p>{character.gender}</p>
            <p>{character.species}</p>
          </div>
        </div>
      </div>
    </article>
  )
}
