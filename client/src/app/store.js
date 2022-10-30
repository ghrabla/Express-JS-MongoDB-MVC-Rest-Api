import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import tripReducer from '../features/trips/tripSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    trips: tripReducer,
  },
})
