import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URL = 'https://ricknmortyback.onrender.com'

export const fetchCharacters = createAsyncThunk(
  'character/fetchCharacters',
  async () => {
    try {
      const { data } = await axios.get(`${URL}/character`)
      return data.results
    } catch (error) {
      throw new Error('Failed to fetch characters', error.message)
    }
  }
)

export const fetchCharactersByName = createAsyncThunk(
  'character/fetchCharactersByName',
  async (name) => {
    try {
      const { data } = await axios.get(`${URL}/character/?name=${name}`)
      return data.results
    } catch (error) {
      throw new Error('Failed to fetch characters by name', error.message)
    }
  }
)

export const fetchCharactersByGender = createAsyncThunk(
  'character/fetchCharactersByGender',
  async (gender) => {
    try {
      const { data } = await axios.get(`${URL}/character/?gender=${gender}`)
      return data.results
    } catch (error) {
      throw new Error('Failed to fetch characters by gender', error.message)
    }
  }
)

export const fetchCharactersBySpecies = createAsyncThunk(
  'character/fetchCharactersBySpecies',
  async (species) => {
    try {
      const { data } = await axios.get(`${URL}/character/?species=${species}`)
      return data.results
    } catch (error) {
      throw new Error('Failed to fetch characters by species', error.message)
    }
  }
)

export const fetchCharactersByStatus = createAsyncThunk(
  'character/fetchCharactersByStatus',
  async (status) => {
    try {
      const { data } = await axios.get(`${URL}/character/?status=${status}`)
      return data.results
    } catch (error) {
      throw new Error('Failed to fetch characters by status', error.message)
    }
  }
)

export const fetchCharacterById = createAsyncThunk(
  'character/fetchCharacterById',
  async (id) => {
    try {
      const { data } = await axios.get(`${URL}/character/${id}`)
      return data
    } catch (error) {
      throw new Error('Failed to fetch character by ID', error.message)
    }
  }
)
