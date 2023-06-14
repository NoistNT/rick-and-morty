import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/character'>Characters</Link>
        </li>
        <li>
          <Link to='/episode'>Episodes</Link>
        </li>
        <li>
          <Link to='/location'>Locations</Link>
        </li>
      </ul>
      <SearchBar />
    </nav>
  )
}
