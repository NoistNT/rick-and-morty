export interface Character {
  id: number
  name: string
  species: string
  gender: string
  image: string
}

export interface CharacterDetail {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  url: string
  created: string
}

export interface ApiInfo {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: Character[]
}

export type PageProps = string | number | undefined

export interface CharacterState {
  characters: Character[]
  currentPage: number
  name: string
}
