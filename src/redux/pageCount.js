import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1,
}

export const pageCount = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
        if(state.value > 1)
            state.value -= 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = pageCount.actions

export default pageCount.reducer