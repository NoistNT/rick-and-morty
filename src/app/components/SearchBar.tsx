'use client'

import type { ChangeEvent } from 'react'

import { useState } from 'react'

import { useGetCharactersQuery } from '@/redux/api/characterApi'
import { useAppDispatch } from '@/redux/hooks'
import { setCharacters, setCurrentPage, setName } from '@/redux/features/character/characterSlice'

export default function SearchBar(): JSX.Element {
  const dispatch = useAppDispatch()
  const [query, setQuery] = useState('')
  const { data } = useGetCharactersQuery({
    page: 1,
    name: query
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (data) {
      setQuery(e.target.value)
      dispatch(setCharacters(data.results))
      dispatch(setCurrentPage(1))
      dispatch(setName(e.target.value))
    }
  }

  return (
    <input
      className="rounded-md bg-neutral-800 bg-opacity-60 px-2 py-1 text-center text-neutral-50 placeholder-neutral-500 outline-none transition-all duration-200 ease-in-out placeholder-shown:text-neutral-400 focus:bg-opacity-80 focus:placeholder-shown:text-neutral-700"
      id="query"
      name="query"
      placeholder="Search character"
      type="text"
      value={query}
      onChange={handleChange}
    />
  )
}
