import { configureStore } from '@reduxjs/toolkit'
import { characterSlice } from './features/character/characterSlice'
import counterReducer from '@/redux/features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    // character: characterSlice.reducer,
    counter: counterReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch