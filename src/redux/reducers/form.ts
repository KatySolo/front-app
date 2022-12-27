import { createSlice } from '@reduxjs/toolkit'

interface FormState {
  counter: number
}
const initialState: FormState = {
  counter: 0
}

const slice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    increaseCounter (state) {
      state.counter = state.counter + 1
    }
  }
})
export const {
  increaseCounter
} = slice.actions
export default slice.reducer
