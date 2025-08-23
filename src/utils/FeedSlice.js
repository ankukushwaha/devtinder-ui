import { createSlice } from "@reduxjs/toolkit";


const FeedSlice = createSlice({
    name: 'feed',
    initialState: null,
    reducers: {
        addFeed: (state, action) => {
            return action.payload;
        },
        removeFeed: (state, action) => {
            // const originalState = state;
            const remainingUser = state.filter(item => item._id !== action.payload);
            // if(remainingUser === originalState) return null;
            return remainingUser;
        },
    },
})

export const {addFeed, removeFeed} = FeedSlice.actions;
export default FeedSlice.reducer;