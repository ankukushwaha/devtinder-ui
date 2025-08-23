import { createSlice } from "@reduxjs/toolkit";

const RequestSlice = createSlice({
    name: "request",
    initialState: null, 
    reducers: {
        addRequest: (state, action) => {
            return action.payload
        },
        removeRequest: (state, action) => {
            const remainingUsers = state.filter(item => item._id !== action.payload);
            return remainingUsers;
        },
    }
})

export const {addRequest, removeRequest} = RequestSlice.actions;
export default RequestSlice.reducer;