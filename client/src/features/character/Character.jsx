import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharacters } from './characterHandler'
import Cards from '../../components/Cards/Cards'

export default function Character() {
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
