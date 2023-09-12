'use client'

import { useGetCharactersQuery } from '@/redux/api/characterApi'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { setCharacters } from '@/redux/features/character/characterSlice'
import { PageProps } from '@/types'
import { useEffect } from 'react'
import Paginate from './Paginate'
import Cards from './Cards'

export default function Characters(): JSX.Element {
  const dispatch = useAppDispatch()
  const { characters, currentPage, name } = useAppSelector(
    (state) => state.character
  )
  const { data, error, isLoading } = useGetCharactersQuery({
    page: currentPage,
    name: name
  })

  useEffect(() => {
    if (data) {
      dispatch(setCharacters(data.results))
    }
  }, [data, dispatch])

  const prevPage: PageProps = data?.info?.prev?.split('=').pop()
  const nextPage: PageProps = data?.info?.next?.split('=').pop()
  const lastPage: PageProps = data?.info?.pages

  console.log(lastPage)
  console.log('next', nextPage)
  console.log('nextPage', data?.info?.next)

  if (isLoading) {
    return <h2 className='text-xl'>Loading...</h2>
  }

  if (error) {
    return <h2 className='text-xl'>Error</h2>
  }

  return (
    <main>
      <Paginate prevPage={prevPage} nextPage={nextPage} lastPage={lastPage} />
      {data && <Cards characters={characters} />}
      <Paginate prevPage={prevPage} nextPage={nextPage} lastPage={lastPage} />
    </main>
  )
}
