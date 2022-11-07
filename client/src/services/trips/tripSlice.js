import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import res from 'express/lib/response'
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
  async (tripData,{ dispatch, getState }) => {
    try { 
      // console.log(tripData)
      // const token = thunkAPI.getState().auth.user.token
      const res = await tripService.createtrip(tripData)
      dispatch(gettrips())
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
export const updatetrip = createAsyncThunk(
  'trips/update',
  async (id_trip,tripData,{ dispatch, getState }) => {
    try { 
      // const token = thunkAPI.getState().auth.user.token
      
      const res = await tripService.updatetrip(id_trip,tripData)
      dispatch(gettrips())
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

// Get user trips
export const gettrips = createAsyncThunk(
  'trips/getAll',
  async (_, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token
      return await tripService.gettrips()
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
export const getonetrip = createAsyncThunk(
  'trips/getone',
  async (id_trip) => {
    try {
      // const token = thunkAPI.getState().auth.user.token
      return await tripService.getonetrip(id_trip)
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

// Delete user trip
export const deletetrip = createAsyncThunk(
  'trips/delete',
  async (id,{ dispatch, getState }) => {
    try {
      // const token = thunkAPI.getState().auth.user.token
     
    const res = await tripService.deletetrip(id)
    dispatch(gettrips());
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
