import { ApiInfoResponse, Character, CharacterDetail, PaginationInfo } from '@/types'

const API_INFO = 'https://rickandmortyapi.com/api/character'

export const getApiInfo = async (name?: string): Promise<PaginationInfo> => {
  const res = await fetch(`${API_INFO}?name=${name}`, { cache: 'no-store' })
  const data = (await res.json()) as ApiInfoResponse

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.info
}

export const getCharacters = async (
  name?: string,
  page?: number | string
): Promise<Character[]> => {
  if (name) return await getCharacterByName(name, page)

  const res = await fetch(`${API_INFO}?page=${page}`, { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = (await res.json()) as ApiInfoResponse
  const characters = data.results.map((character: Character) => {
    return {
      id: character.id,
      name: character.name,
      species: character.species,
      gender: character.gender,
      image: character.image
    }
  })

  return characters
}

export const getCharacterById = async (id: number): Promise<CharacterDetail> => {
  const res = await fetch(`${API_INFO}/${id}`, { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const character = (await res.json()) as CharacterDetail

  return character
}

export const getCharacterByName = async (
  name: string,
  page?: number | string
): Promise<Character[]> => {
  const res = await fetch(`${API_INFO}?page=${page}&name=${name}`, { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = (await res.json()) as ApiInfoResponse
  const character = data.results

  return character
}
