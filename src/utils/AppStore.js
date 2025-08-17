import { configureStore } from '@reduxjs/toolkit'
import connectionReducer from "./ConnectionSlice"
import userReducer from './UserSlice';

const store = configureStore({
  reducer: {
    connections: connectionReducer,
    user: userReducer
  },
})

export default store;