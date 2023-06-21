import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
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
  async (name) => {
    const { data } = await axios.get(`${URL}/character/?name=${name}`)
    return data.results
  }
)

export const fetchCharacterById = createAsyncThunk(
  'character/fetchCharacterById',
  async (id) => {
    const { data } = await axios.get(`${URL}/character/${id}`)
    return data
  }
)

export const fetchCharacterByStatus = createAsyncThunk(
  'character/fetchCharacterByStatus',
  async (status) => {
    const { data } = await axios.get(`${URL}/character/?status=${status}`)
    return data.results
  }
)

export const fetchCharacterBySpecies = createAsyncThunk(
  'character/fetchCharacterBySpecies',
  async (species) => {
    const { data } = await axios.get(`${URL}/character/?species=${species}`)
    return data.results
  }
)

export const cleanDetail = createAction('character/cleanDetail', () => {
  return {}
})
