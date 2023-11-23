import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'

import characterReducer from '@/redux/features/character/characterSlice'

import characterApi from './api/characterApi'

export const store = configureStore({
  reducer: {
    character: characterReducer,
    [characterApi.reducerPath]: characterApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(characterApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
