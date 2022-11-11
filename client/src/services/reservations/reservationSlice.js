import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import res from 'express/lib/response'
import reservationService from './reservationService'

const initialState = {
  reservations: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new reservation
export const createreservation = createAsyncThunk(
  'reservations/create',
  async (reservationData,{ dispatch, getState }) => {
    try { 
      // console.log(reservationData)
      // const token = thunkAPI.getState().auth.user.token
      const res = await reservationService.createreservation(reservationData)
      dispatch(getreservations())
      return res;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      // return thunkAPI.rejectWithValue(message)
    }
  }
)
export const updatereservation = createAsyncThunk(
  'reservations/update',
  async (id_reservation,reservationData,{ dispatch, getState }) => {
    try { 
      // const token = thunkAPI.getState().auth.user.token
      
      const res = await reservationService.updatereservation(id_reservation,reservationData)
      dispatch(getreservations())
      return res;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      // return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user reservations
export const getreservations = createAsyncThunk(
  'reservations/getAll',
  async (_, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token
      return await reservationService.getreservations()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)
// Get user reservations
export const getonereservation = createAsyncThunk(
  'reservations/getone',
  async (id_reservation) => {
    try {
      // const token = thunkAPI.getState().auth.user.token
      return await reservationService.getonereservation(id_reservation)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
    }
  }
)

// Delete user reservation
export const deletereservation = createAsyncThunk(
  'reservations/delete',
  async (id,{ dispatch, getState }) => {
    try {
      // const token = thunkAPI.getState().auth.user.token
     
    const res = await reservationService.deletereservation(id)
    dispatch(getreservations());
    return res;
  
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      // return rejectWithValue(message)
    }
  }
)

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createreservation.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createreservation.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.reservations.push(action.payload)
      })
      .addCase(createreservation.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getreservations.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getreservations.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.reservations = action.payload
      })
      .addCase(getreservations.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deletereservation.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deletereservation.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.reservations = state.reservations.filter(
          (reservation) => reservation._id !== action.payload.id
        )
      })
      .addCase(deletereservation.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = reservationSlice.actions
export default reservationSlice.reducer
