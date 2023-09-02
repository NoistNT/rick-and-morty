import { createSlice } from '@reduxjs/toolkit'

export const characterSlice = createSlice({
  name: 'character',
  initialState: {
    character: {
      id: 0,
      name: '',
      species: '',
      gender: '',
      image: ''
    }
  },
  reducers: {}
})
