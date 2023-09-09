'use client'

import { useGetCharactersQuery } from '@/redux/api/characterApi'
import { useAppSelector } from '@/redux/hooks'
import { Character, PageProps } from '@/types'
import Card from './Card'
import Paginate from './Paginate'

export default function Cards(): JSX.Element {
  const { currentPage } = useAppSelector((state) => state.character)
  const { data, error, isLoading } = useGetCharactersQuery({
    page: currentPage
  })

  const prevPage: PageProps = data?.info?.prev?.split('=').pop()
  const nextPage: PageProps = data?.info?.next?.split('=').pop()

  if (isLoading) {
    return <h2 className='text-xl'>Loading...</h2>
  }

  if (error) {
    return <h2 className='text-xl'>Error</h2>
  }

  return (
    <section>
      <Paginate prevPage={prevPage} nextPage={nextPage} />
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl'>
        {data?.results.map((character: Character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
      <Paginate prevPage={prevPage} nextPage={nextPage} />
    </section>
  )
}
