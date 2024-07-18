import { configureStore } from '@reduxjs/toolkit'
import adminSlice from './adminslice'
import taskslice from './taskslice'
export const store = configureStore({
    reducer: {
      admincounter:adminSlice,
      task:taskslice

    },
  })