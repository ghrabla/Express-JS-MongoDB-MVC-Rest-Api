import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import res from 'express/lib/response'
import busService from './busService'

const initialState = {
  buses: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new bus
export const createbus = createAsyncThunk(
  'buss/create',
  async (busData,{ dispatch, getState }) => {
    try { 
      // console.log(busData)
      // const token = thunkAPI.getState().auth.user.token
      const res = await busService.createbus(busData)
      dispatch(getbuses())
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
export const updatebus = createAsyncThunk(
  'buss/update',
  async (id_bus,busData,{ dispatch }) => {
    try { 
      // const token = thunkAPI.getState().auth.user.token
      
      const res = await busService.updatebus(id_bus,busData)
      dispatch(getbuses())
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

// Get user buss
export const getbuses = createAsyncThunk(
  'buss/getAll',
  async (_, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token
      return await busService.getbuses()
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
// Get user buss
export const getonebus = createAsyncThunk(
  'buss/getone',
  async (id_bus) => {
    try {
      // const token = thunkAPI.getState().auth.user.token
      return await busService.getonebus(id_bus)
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

// Delete user bus
export const deletebus = createAsyncThunk(
  'buss/delete',
  async (id,{ dispatch, getState }) => {
    try {
      // const token = thunkAPI.getState().auth.user.token
     
    const res = await busService.deletebus(id)
    dispatch(getbuses());
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

export const busSlice = createSlice({
  name: 'bus',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createbus.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createbus.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.buses.push(action.payload)
      })
      .addCase(createbus.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getbuses.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getbuses.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.buses = action.payload
      })
      .addCase(getbuses.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deletebus.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deletebus.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.buses = state.buses.filter(
          (bus) => bus._id !== action.payload.id
        )
      })
      .addCase(deletebus.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = busSlice.actions
export default busSlice.reducer
