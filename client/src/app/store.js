import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import authAdminReducer from '../features/authAdmin/authSlice'
import tripReducer from '../features/trips/tripSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    authAdmin: authAdminReducer,
    trips: tripReducer,
    
  },
})
