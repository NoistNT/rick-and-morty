import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import charactersReducer from './features/character/characterSlice'
import episodeReducer from './features/episode/episodeSlice'
import locationReducer from './features/location/locationSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    characters: charactersReducer,
    episodes: episodeReducer,
    locations: locationReducer
  }
})
