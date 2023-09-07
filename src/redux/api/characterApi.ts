import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CharacterDetail, CharactersResponse } from '@/types'

export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/'
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query<CharactersResponse, number>({
      query: (page = 1) => `character/?page=${page}`
    }),
    getCharacterById: builder.query<CharacterDetail, { id: number }>({
      query: ({ id }) => `character/${id}`
    })
  })
})

export const { useGetCharactersQuery, useGetCharacterByIdQuery, reducerPath } =
  characterApi
export default characterApi
