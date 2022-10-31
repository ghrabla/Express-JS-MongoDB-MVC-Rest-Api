import axios from 'axios'

const API_URL = 'http://localhost:8090/'

// Create new trip
const createtrip = async (tripData) => {
  

  const response = await axios.post(API_URL+'trip', tripData)

  return response.data
}

// Get user trips
const gettrips = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user trip
const deletetrip = async (tripId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + tripId, config)

  return response.data
}

const tripService = {
  createtrip,
  gettrips,
  deletetrip,
}

export default tripService
