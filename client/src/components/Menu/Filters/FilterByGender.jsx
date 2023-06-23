import { useDispatch } from 'react-redux'
import {
  fetchCharactersByGender,
  fetchCharacters
} from '../../../features/character/characterHandler'

export default function FilterByGender() {
  const dispatch = useDispatch()

  const handleFilter = (e) => {
    const selectedFilter = e.target.value
    selectedFilter !== 'all'
      ? dispatch(fetchCharactersByGender(selectedFilter))
      : dispatch(fetchCharacters())
  }

  return (
    <div>
      <select name='filterByGender' onChange={handleFilter}>
        <option value='all'>--Gender--</option>
        <option value='all'>All</option>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
        <option value='genderless'>Genderless</option>
        <option value='unknown'>Unknown</option>
      </select>
    </div>
  )
}
