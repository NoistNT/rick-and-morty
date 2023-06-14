import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCharactersByName } from '../../features/character/characterHandler'

export default function SearchBar() {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    query.trim() ? dispatch(fetchCharactersByName(query)) : null
    setQuery((e.target.value = ''))
  }

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleKeyDown = (e) => {
    e.key === 'Enter' ? handleSearch(e) : null
  }

  return (
    <div>
      <input
        type='text'
        placeholder='Search character'
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      ></input>
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}
