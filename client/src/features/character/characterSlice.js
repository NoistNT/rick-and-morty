import { createSlice } from '@reduxjs/toolkit'
import { fetchCharacters } from './characterHandler'

const initialState = {
  allChacters: [],
  characters: [],
  character: {},
  isLoading: false,
  error: ''
}

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.isLoading = false
      state.allChacters = action.payload
      state.characters = action.payload
      state.error = ''
    })
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.isLoading = false
      state.allChacters = []
      state.characters = []
      state.error = action.error.message
    })
  }
})

export default characterSlice.reducer
