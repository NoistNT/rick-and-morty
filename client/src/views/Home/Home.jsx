import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharacters } from '../../features/character/characterHandler'
import { Cards } from '../../components/index'

export default function Home() {
  const dispatch = useDispatch()
  const { characters } = useSelector((state) => state.characters)

  useEffect(() => {
    dispatch(fetchCharacters())
  }, [dispatch])

  return (
    <div>
      <Cards characters={characters} />
    </div>
  )
}
