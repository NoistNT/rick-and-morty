import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Character {
  id: number
  name: string
  // status: string
  species: string
  // type: string
  gender: string
  // origin: {
  //   name: string
  //   url: string
  // }
  // location: {
  //   name: string
  //   url: string
  // }
  image: string
  // episode: string[]
  // url: string
  // created: string
}

interface CharactersResponse {
  info: {
    count: number
    pages: number
    next: string
    prev: string
  }
  results: Character[]
}

export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/'
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query<CharactersResponse, number>({
      query: (page = 1) => `character/?page=${page}`
    }),
    getCharacterById: builder.query<CharactersResponse, { id: number }>({
      query: ({ id }) => `character/${id}`
    })
  })
})

export const { useGetCharactersQuery, useGetCharacterByIdQuery, reducerPath } =
  characterApi
export default characterApi
