'use client'

import { useState, ChangeEvent } from 'react'
import { useGetCharactersQuery } from '@/redux/api/characterApi'
import { useAppDispatch } from '@/redux/hooks'
import {
  setCharacters,
  setCurrentPage,
  setName
} from '@/redux/features/character/characterSlice'

export default function SearchBar(): JSX.Element {
  const dispatch = useAppDispatch()
  const [query, setQuery] = useState('')
  const { data, error, isLoading } = useGetCharactersQuery({
    page: 1,
    name: query
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (data) {
      setQuery(e.target.value)
      dispatch(setCharacters(data.results))
      dispatch(setCurrentPage(1))
      dispatch(setName(e.target.value))
    }
  }

  // const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
  //   if (data) {
  //     dispatch(setCharacters(data.results))
  //     dispatch(setCurrentPage(1))
  //     dispatch(setName(e.target.value))
  //     setQuery('')
  //   }
  // }

  // const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
  //   if (e.key === 'Enter') {
  //     const changeEvent = {
  //       target: e.target as HTMLInputElement
  //     } as ChangeEvent<HTMLInputElement>
  //     handleSearch(changeEvent)
  //   }
  // }

  const handleClick = (): void => {
    dispatch(setCurrentPage(1))
    dispatch(setName(''))
    setQuery('')
  }

  return (
    <div className='flex justify-center items-center gap-4'>
      <input
        name='query'
        value={query}
        onChange={handleChange}
        // onKeyDown={handleKeyDown}
        type='text'
        placeholder='Search character'
        className='px-2 py-1 rounded-md text-gray-900 outline-none bg-gray-100 placeholder-gray-500 text-center'
      />
      <button
        onClick={handleClick}
        className='px-2 py-1 rounded-md text-gray-900 outline-none bg-gray-100 placeholder-gray-500 text-center'
      >
        All characters
      </button>
    </div>
  )
}
