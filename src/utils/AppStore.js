import { configureStore } from '@reduxjs/toolkit'
import friendReducer from "./FriendSlice"
import userReducer from './UserSlice';
import feedReducer from './FeedSlice';
import requestReducer from "./RequestSlice";

const store = configureStore({
  reducer: {
    friends: friendReducer,
    user: userReducer,
    feed: feedReducer,
    request: requestReducer,
  },
})

export default store;