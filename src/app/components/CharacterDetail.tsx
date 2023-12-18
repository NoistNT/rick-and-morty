'use client'

import Image from 'next/image'

import {  CharacterDetail } from '@/types'
import { useRouter } from 'next/navigation'

export default function CharacterDetail({
  character
}: {
  character: CharacterDetail
}) {
  const router = useRouter()

  return (
    <section className="m-auto flex min-h-screen max-w-max flex-col items-center justify-center gap-3">
      <div className="w-full rounded-md border-2 border-neutral-800 bg-slate-800/80 px-4 py-1.5 text-center transition-colors duration-150 ease-in-out hover:border-white/10 hover:bg-slate-800 hover:bg-opacity-90">
        <button onClick={() => router.back()}> Go Back</button>
      </div>
      <article className="max-w-[300px] rounded-md border-2 border-neutral-800 bg-slate-900 bg-opacity-80 text-center">
        {character.image ? (
          <Image
            alt={character.name}
            className="rounded-b-sm rounded-t-md"
            height={300}
            src={character.image}
            width={300}
          />
        ) : null}
        <div className="flex flex-col items-center justify-center">
          <div className="flex w-full items-center justify-center py-8">
            <h1 className="max-w-[300px] px-5 text-[1.6rem] font-bold opacity-80">
              {character.name}
            </h1>
          </div>
          <div className="flex w-full flex-col gap-4 px-2 pb-3">
            <div className="flex justify-between rounded-md bg-neutral-700/50 px-2 py-1">
              Status: <h2 className={character.status === 'Alive' ? 'text-green-500' : character.status === 'Dead' ? 'text-red-500' : 'text-orange-500'}>{character.status}</h2>
            </div>
            <div className="flex justify-between rounded-md bg-neutral-600/20 px-2 py-1">
              Specie: <h2 className='text-gray-400'>{character.species}</h2>
            </div>
            <div className="flex justify-between rounded-md bg-neutral-700/50 px-2 py-1">
              Type: <h2 className={ character.type === '' || character.type === null || character.type === undefined ? 'text-orange-500' : 'text-gray-400'}>{character.type || 'Unknown'}</h2>
            </div>
            <div className="flex justify-between rounded-md bg-neutral-600/20 px-2 py-1">
              Gender: <h2 className={character.gender === 'Male' ? 'text-blue-500' : character.gender === 'Female' ? 'text-pink-500' : 'text-orange-500'}>{character.gender[0].toUpperCase() + character.gender.slice(1)}</h2>
            </div>
            <div className="flex justify-between rounded-md bg-neutral-700/50 px-2 py-1">
              Origin: <h2 className={ character.origin.name === 'unknown' ? 'text-orange-500' : 'text-gray-400'}>{character.origin.name[0].toUpperCase() + character.origin.name.slice(1)}</h2>
            </div>
            <div className="flex justify-between rounded-md bg-neutral-600/20 px-2 py-1">
              Location: <h2 className={ character.location.name === 'unknown' ? 'text-orange-500' : 'text-gray-400'}>{character.location.name[0].toUpperCase() + character.location.name.slice(1)}</h2>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
