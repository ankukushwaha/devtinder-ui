import { configureStore } from '@reduxjs/toolkit'
import friendReducer from "./FriendSlice"
import userReducer from './UserSlice';
import feedReducer from './FeedSlice';

const store = configureStore({
  reducer: {
    friends: friendReducer,
    user: userReducer,
    feed: feedReducer
  },
})

export default store;