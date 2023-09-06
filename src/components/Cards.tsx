'use client'

import { useGetCharactersQuery } from '@/redux/api/characterApi'
import Card from '@/components/Card'

export default function Cards() {
  const { data, error, isLoading } = useGetCharactersQuery(1)

  if (isLoading) {
    return <h2 className='text-xl'>Loading...</h2>
  }

  if (error) {
    return <h2 className='text-xl'>Error</h2>
  }

  return (
    <section className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl'>
      {data?.results.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </section>
  )
}
