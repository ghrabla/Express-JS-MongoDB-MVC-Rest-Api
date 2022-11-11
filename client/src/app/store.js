import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../services/auth/authSlice'
import authAdminReducer from '../services/authAdmin/authSlice'
import tripReducer from '../services/trips/tripSlice'
import busReducer from '../services/buses/busSlice'
import resevationReducer from '../services/reservations/reservationSlice'
import userReducer from '../services/users/userSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    authAdmin: authAdminReducer,
    trips: tripReducer,
    buses: busReducer,
    reservations: resevationReducer,
    users: userReducer
    
  },
})
