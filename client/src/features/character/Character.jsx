import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharacters } from './characterHandler'
import { cleanCharacter } from './characterSlice'
import { Cards, Menu } from '../../components/index'

export default function Character() {
  const dispatch = useDispatch()
  const { characters } = useSelector((state) => state.characters)

  useEffect(() => {
    dispatch(fetchCharacters())
    return () => dispatch(cleanCharacter())
  }, [dispatch])

  return (
    <div>
      <Menu />
      <Cards characters={characters} />
    </div>
  )
}
