import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URL = 'http://localhost:3001'

export const fetchCharacters = createAsyncThunk(
  'character/fetchCharacters',
  async () => {
    const { data } = await axios.get(`${URL}/character`)
    return data.results
  }
)

export const fetchCharactersByName = createAsyncThunk(
  'character/fetchCharactersByName',
  async () => {
    const { data } = await axios.get(`${URL}/character/?name=${name}`)
    return data.results
  }
)
