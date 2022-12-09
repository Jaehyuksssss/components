import { createSlice } from '@reduxjs/toolkit'
type stateType = {
  title: { name: string; content: number }
}

const initialState: stateType = {
  title: { name: 'ttttt', content: 0 },
}
export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: { addTodo: (state, action) => {} },
})
