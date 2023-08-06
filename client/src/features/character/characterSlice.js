// Push commit message = Add clean character detail

import { createSlice } from '@reduxjs/toolkit'
import {
  fetchCharacters,
  fetchCharactersByName,
  fetchCharactersByGender,
  fetchCharactersBySpecies,
  fetchCharactersByStatus,
  fetchCharacterById
} from './characterHandler'

const initialState = {
  characters: [],
  character: {},
  isLoading: false,
  error: ''
}

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    // Clean character details
    cleanCharacter: (state) => {
      state.character = {}
    }
  },
  extraReducers: (builder) => {
    // Fetch characters
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchCharacters.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.characters = payload
        state.error = ''
      })
      .addCase(fetchCharacters.rejected, (state, { error }) => {
        state.isLoading = false
        state.characters = []
        state.error = error.message
      })

      // Fetch characters by name
      .addCase(fetchCharactersByName.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchCharactersByName.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.characters = payload
        state.error = ''
      })
      .addCase(fetchCharactersByName.rejected, (state, { error }) => {
        state.isLoading = false
        state.characters = []
        state.error = error.message
      })

      // Fetch characters by gender
      .addCase(fetchCharactersByGender.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchCharactersByGender.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.characters = payload
        state.error = ''
      })
      .addCase(fetchCharactersByGender.rejected, (state, { error }) => {
        state.isLoading = false
        state.characters = []
        state.error = error.message
      })

      // Fetch characters by species
      .addCase(fetchCharactersBySpecies.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchCharactersBySpecies.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.characters = payload
        state.error = ''
      })
      .addCase(fetchCharactersBySpecies.rejected, (state, { error }) => {
        state.isLoading = false
        state.error = error.message
      })

      // Fetch characters by status
      .addCase(fetchCharactersByStatus.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchCharactersByStatus.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.characters = payload
        state.error = ''
      })
      .addCase(fetchCharactersByStatus.rejected, (state, { error }) => {
        state.isLoading = false
        state.error = error.message
      })

      // Fetch characters by ID
      .addCase(fetchCharacterById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchCharacterById.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.character = payload
        state.error = ''
      })
      .addCase(fetchCharacterById.rejected, (state, { error }) => {
        state.isLoading = false
        state.error = error.message
      })
  }
})

export const { cleanCharacter } = characterSlice.actions
export default characterSlice.reducer
