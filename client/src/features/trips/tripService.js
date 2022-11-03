import axios from 'axios'
import Swal from 'sweetalert2'

const API_URL = 'http://localhost:8090/'

// Create new trip
const createtrip = async (tripData) => {
 if(tripData){
  const response = await axios.post(API_URL+'trip', tripData)
  Swal.fire('Saved!', '', 'success')
  return response.data
 }else{
  Swal.fire( 'please fill all feilds !', 'warning')
 }
}

// Get user trips
const gettrips = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL+'trip')
  return response.data
}

// Delete user trip
const deletetrip = async (tripId) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // }
  
      axios.delete(API_URL+'trip/'+tripId)
    
  
}

const tripService = {
  createtrip,
  gettrips,
  deletetrip,
}

export default tripService
