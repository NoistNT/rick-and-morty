'use client'

import { useGetCharacterByIdQuery } from '@/redux/api/characterApi'
import Image from 'next/image'

export default function CharacterDetail({
  params
}: {
  params: { id: number }
}) {
  const { data, error, isLoading } = useGetCharacterByIdQuery(params)

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <h1>Something went wrong, please try again</h1>
      </div>
    )
  }

  return (
    <div>
      {data?.image && (
        <Image src={data.image} alt={data.name} width={300} height={300} />
      )}
      <h1>{`${data?.name}`}</h1>
      <h2>{`${data?.status}`}</h2>
      <h2>{`${data?.species}`}</h2>
      <h2>{`${data?.type}`}</h2>
      <h2>{`${data?.gender}`}</h2>
      <h2>{`${data?.origin?.name}`}</h2>
      <h2>{`${data?.location?.name}`}</h2>
      <h2>{`${data?.episode.join(', ')}`}</h2>
    </div>
  )
}
