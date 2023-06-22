import { useDispatch } from 'react-redux'
import {
  fetchCharactersBySpecies,
  fetchCharacters
} from '../../../features/character/characterHandler'

export default function FilterBySpecies() {
  const dispatch = useDispatch()

  const handleFilter = (e) => {
    const selectedFilter = e.target.value
    selectedFilter !== 'all'
      ? dispatch(fetchCharactersBySpecies(selectedFilter))
      : dispatch(fetchCharacters())
  }

  return (
    <div>
      <select name='filterBySpecies' onChange={handleFilter}>
        <option value='all'>--Species--</option>
        <option value='all'>All</option>
        <option value='alien'>Alien</option>
        <option value='animal'>Animal</option>
        <option value='cronenberg'>Cronenberg</option>
        <option value='human'>Human</option>
        <option value='humanoid'>Humanoid</option>
        <option value='mythological creature'>Mythological Creature</option>
        <option value='robot'>Robot</option>
      </select>
    </div>
  )
}
