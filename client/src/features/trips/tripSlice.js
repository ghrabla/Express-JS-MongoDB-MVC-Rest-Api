import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import tripService from './tripService'

const initialState = {
  trips: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new trip
export const createtrip = createAsyncThunk(
  'trips/create',
  async (tripData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await tripService.createtrip(tripData, token)
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

// Get user trips
export const gettrips = createAsyncThunk(
  'trips/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await tripService.gettrips(token)
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

// Delete user trip
export const deletetrip = createAsyncThunk(
  'trips/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await tripService.deletetrip(id, token)
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

export const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createtrip.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createtrip.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.trips.push(action.payload)
      })
      .addCase(createtrip.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(gettrips.pending, (state) => {
        state.isLoading = true
      })
      .addCase(gettrips.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.trips = action.payload
      })
      .addCase(gettrips.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deletetrip.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deletetrip.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.trips = state.trips.filter(
          (trip) => trip._id !== action.payload.id
        )
      })
      .addCase(deletetrip.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = tripSlice.actions
export default tripSlice.reducer