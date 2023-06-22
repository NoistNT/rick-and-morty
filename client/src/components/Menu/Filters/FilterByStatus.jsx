import { useDispatch } from 'react-redux'
import {
  fetchCharactersByStatus,
  fetchCharacters
} from '../../../features/character/characterHandler'

export default function FilterByStatus() {
  const dispatch = useDispatch()

  const handleFilter = (e) => {
    const selectedFilter = e.target.value
    selectedFilter !== 'all'
      ? dispatch(fetchCharactersByStatus(selectedFilter))
      : dispatch(fetchCharacters())
  }

  return (
    <div>
      <select name='filterByStatus' onChange={handleFilter}>
        <option value='all'>--Status--</option>
        <option value='all'>All</option>
        <option value='alive'>Alive</option>
        <option value='dead'>Dead</option>
        <option value='unknown'>Unknown</option>
      </select>
    </div>
  )
}
