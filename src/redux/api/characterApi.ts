import type { CharacterDetail, CharactersResponse } from '@/types'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/'
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query<CharactersResponse, { page?: number; name?: string }>({
      query: ({ page = 1, name }) => `character/?page=${page}&name=${name}`
    }),
    getCharacterById: builder.query<CharacterDetail, { id: number }>({
      query: ({ id }) => `character/${id}`
    })
  })
})

export const { useGetCharactersQuery, useGetCharacterByIdQuery, reducerPath } = characterApi

export default characterApi
