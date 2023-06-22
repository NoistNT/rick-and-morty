import FilterByGender from './Filters/FilterByGender'
import FilterBySpecies from './Filters/FilterBySpecies'
import FilterByStatus from './Filters/FilterByStatus'

export default function Menu() {
  return (
    <div>
      <FilterByGender />
      <FilterBySpecies />
      <FilterByStatus />
    </div>
  )
}
