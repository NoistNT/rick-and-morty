import { Character, CharacterDetail } from '@/types'
import { API_INFO, CHARACTERS_LIST } from '../constants'

export const getAPIInfo = async () : Promise<string> => {
  const res = await fetch(API_INFO)
  const data = await res.json()

  if (!res.ok) {
    throw new Error('Failed to fetch data', data.error)
  }

  return data.info
}

export const getCharacters = async (): Promise<Character[]> => {
  const res = await fetch(CHARACTERS_LIST)
  const data = await res.json()

  if (!res.ok) {
    throw new Error('Failed to fetch data', data.error)
  }
  
  return data.results
}

export const getCharacterById = async (id: number): Promise<CharacterDetail> => {
  const res = await fetch(`${CHARACTERS_LIST}/${id}`)
  const data = await res.json()

  if (!res.ok) {
    throw new Error('Failed to fetch data', data.error)
  }

  return data
}

export const getCharacterByName = async (name: string): Promise<Character[]> => {
  const res = await fetch(`${CHARACTERS_LIST}?name=${name}`)
  const data = await res.json()

  if (!res.ok) {
    throw new Error('Failed to fetch data', data.error)
  }

  return data.results
}
