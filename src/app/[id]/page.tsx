import CharacterDetail from '../components/CharacterDetail'
import { getCharacterById } from '../api'

export default async function ({ params }: { params: { id: number } }) {
  const { id } = params
  const character = await getCharacterById(id)

  return <CharacterDetail character={character} />
}
