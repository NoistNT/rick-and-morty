import { Character, CharacterDetail } from '@/types'

import { CHARACTERS_LIST } from '../constants'

export const getCharacters = async (name?: string): Promise<Character[]> => {
  if (name) {
    return await getCharacterByName(name)
  }

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
