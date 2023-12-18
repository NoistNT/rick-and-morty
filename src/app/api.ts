import { Character, CharacterDetail, PaginationInfo } from '@/types'

import { API_INFO } from '../../constants'

export const getApiInfo = async (name?: string): Promise<PaginationInfo> => {
  const res = await fetch(`${API_INFO}?name=${name}`, { cache: 'no-store' })
  const data = await res.json()

  if (!res.ok) {
    throw new Error('Failed to fetch data', data.error)
  }

  return data.info
}

export const getCharacters = async (name?: string, page?: number | string): Promise<Character[]> => {
  if (name) {
    return await getCharacterByName(name, page)
  }

  const res = await fetch(`${API_INFO}?page=${page}`, { cache: 'no-store' })
  const data = await res.json()

  if (!res.ok) {
    throw new Error('Failed to fetch data', data.error)
  }

  return data.results
}

export const getCharacterById = async (id: number): Promise<CharacterDetail> => {
  const res = await fetch(`${API_INFO}/${id}`, { cache: 'no-store' })
  const data = await res.json()

  if (!res.ok) {
    throw new Error('Failed to fetch data', data.error)
  }

  return data
}

export const getCharacterByName = async (name: string, page?: number | string): Promise<Character[]> => {
  const res = await fetch(`${API_INFO}?page=${page}&name=${name}`, { cache: 'no-store' })
  const data = await res.json()

  if (!res.ok) {
    throw new Error('Failed to fetch data', data.error)
  }

  return data.results
}
