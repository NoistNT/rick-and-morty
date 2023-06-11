import { configureStore } from '@reduxjs/toolkit'
import characterReducer from '../features/character/characterSlice'
import episodeReducer from '../features/episode/episodeSlice'
import locationReducer from '../features/location/locationSlice'

export default configureStore({
  reducer: {
    characters: characterReducer,
    episodes: episodeReducer,
    locations: locationReducer
  }
})
