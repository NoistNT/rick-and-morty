import { Character, CharacterState } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: CharacterState = {
  characters: [],
  currentPage: 1,
  name: ''
}

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setCharacters: (state, action: PayloadAction<Character[]>) => {
      state.characters = action.payload
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    }
  }
})

export const { setCurrentPage, setCharacters, setName } = characterSlice.actions
export default characterSlice.reducer
