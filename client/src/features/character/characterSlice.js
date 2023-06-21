import { createSlice } from '@reduxjs/toolkit'
import {
  fetchCharacters,
  fetchCharactersByName,
  fetchCharacterByStatus,
  fetchCharacterBySpecies,
  fetchCharacterById
} from './characterHandler'

const initialState = {
  allChacters: [],
  characters: [],
  character: {},
  isLoading: false,
  error: '',
  filter: ''
}

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  extraReducers: (builder) => {
    // Fetch characters
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

    // Fetch characters by name
    builder.addCase(fetchCharactersByName.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchCharactersByName.fulfilled, (state, action) => {
      state.isLoading = false
      state.characters = action.payload
      state.error = ''
    })
    builder.addCase(fetchCharactersByName.rejected, (state, action) => {
      state.isLoading = false
      state.characters = []
      state.error = action.error.message
    })

    // Fetch characters by status
    builder.addCase(fetchCharacterByStatus.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchCharacterByStatus.fulfilled, (state, action) => {
      state.isLoading = false
      state.characters = action.payload
      state.filter = 'status'
      state.error = ''
    })
    builder.addCase(fetchCharacterByStatus.rejected, (state, action) => {
      state.isLoading = false
      state.characters = action.payload
      state.error = action.error.message
    })

    // Fetch characters by Species
    builder.addCase(fetchCharacterBySpecies.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchCharacterBySpecies.fulfilled, (state, action) => {
      state.isLoading = false
      state.characters = action.payload
      state.filter = 'species'
      state.error = ''
    })
    builder.addCase(fetchCharacterBySpecies.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })

    // Fetch characters by ID
    builder.addCase(fetchCharacterById.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchCharacterById.fulfilled, (state, action) => {
      state.isLoading = false
      state.character = action.payload
      state.error = ''
    })
    builder.addCase(fetchCharacterById.rejected, (state, action) => {
      state.isLoading = false
      state.character = {}
      state.error = action.error.message
    })
  }
})

export default characterSlice.reducer
