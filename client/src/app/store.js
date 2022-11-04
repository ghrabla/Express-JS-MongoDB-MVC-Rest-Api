import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../services/auth/authSlice'
import authAdminReducer from '../services/authAdmin/authSlice'
import tripReducer from '../services/trips/tripSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    authAdmin: authAdminReducer,
    trips: tripReducer,
    
  },
})
