'use client'

import { useGetCharactersQuery } from '@/redux/api/characterApi'
import { useState } from 'react'
import Card from '@/components/Card'

export default function Cards() {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, error, isLoading } = useGetCharactersQuery({
    page: currentPage
  })

  const prevPage = data?.info?.prev?.split('=').pop()
  const nextPage = data?.info?.next?.split('=').pop()

  const handlePageChange = (page: number) => {
    console.log(page)
    setCurrentPage(page)
  }

  if (isLoading) {
    return <h2 className='text-xl'>Loading...</h2>
  }

  if (error) {
    return <h2 className='text-xl'>Error</h2>
  }

  return (
    <section>
      <button onClick={() => handlePageChange(Number(prevPage))}>
        Prev Page
      </button>
      <button onClick={() => handlePageChange(Number(nextPage))}>
        Next Page
      </button>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl'>
        {data?.results.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
    </section>
  )
}
