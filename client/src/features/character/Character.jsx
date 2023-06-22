import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharacters } from './characterHandler'
import { Cards, Menu } from '../../components/index'

export default function Character() {
  const dispatch = useDispatch()
  const { characters } = useSelector((state) => state.characters)

  useEffect(() => {
    dispatch(fetchCharacters())
  }, [dispatch])

  return (
    <div>
      <Menu />
      <Cards characters={characters} />
    </div>
  )
}
