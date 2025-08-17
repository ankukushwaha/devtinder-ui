import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const connectionSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addConnection: (state, count) => {
      action.payload
    },
    removeConnection: () => null,
  },
})

export const { addConnection, removeConnection } = connectionSlice.actions

export default connectionSlice.reducer