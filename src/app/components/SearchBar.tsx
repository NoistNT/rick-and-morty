'use client'

import { useState } from 'react'
import { useGetCharactersQuery } from '@/redux/api/characterApi'
import { useAppDispatch } from '@/redux/hooks'
import {
  setCharacters,
  setName
} from '@/redux/features/character/characterSlice'

export default function SearchBar(): JSX.Element {
  const dispatch = useAppDispatch()
  const [query, setQuery] = useState('')
  const { data, error, isLoading } = useGetCharactersQuery({
    page: 1,
    name: query
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value)
    if (data) {
      dispatch(setCharacters(data?.results))
      dispatch(setName(e.target.value))
    }
  }

  return (
    <div>
      <input
        name='query'
        value={query}
        onChange={handleChange}
        type='text'
        placeholder='Search character'
        className='px-2 py-1 rounded-md text-gray-900 outline-none bg-gray-100 placeholder-gray-500 text-center'
      />
    </div>
  )
}
