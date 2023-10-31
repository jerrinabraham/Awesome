import { configureStore } from '@reduxjs/toolkit'
import jerrin from '../features/counter/counterSlice'
export const store = configureStore({
  reducer: {
    counters: jerrin,
  },
})