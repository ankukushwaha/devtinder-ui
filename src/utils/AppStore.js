import { configureStore } from '@reduxjs/toolkit'
import connectionReducer from "./ConnectionSlice"
import userReducer from './UserSlice';
import feedReducer from './FeedSlice';

const store = configureStore({
  reducer: {
    connections: connectionReducer,
    user: userReducer,
    feed: feedReducer
  },
})

export default store;