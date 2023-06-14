import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharacterById } from '../../features/character/characterHandler'

export default function Detail() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { character } = useSelector((state) => state.characters)
  const {
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    image,
    episode
  } = character

  useEffect(() => {
    dispatch(fetchCharacterById(id))
  }, [dispatch, id])

  return (
    <div>
      <h1>Character detail</h1>
      <img src={image} alt={name} />
      <div>
        <h2>Name: {name}</h2>
      </div>
      <h4>Status: {status}</h4>
      <h4>Species: {species}</h4>
      <h4>Type: {type || 'Unknown'}</h4>
      <h4>Gender: {gender}</h4>
      <h4>Origin: {origin?.name}</h4>
      <h4>Location: {location?.name}</h4>
      <h4>Episodes: {episode?.length}</h4>
    </div>
  )
}
