import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './slices/List'

export  const store = configureStore({
  reducer: {
    cart : CartSlice
  },
})