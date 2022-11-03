import axios from 'axios'
import Swal from 'sweetalert2'

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
  Swal.fire({
    title: "Are you sure ?",
    text: "You are going to delete this trip",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "black",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
    cancelButtonText: "Cancel",
  }).then((result)=>{
    if(result.value){
      axios.delete(API_URL+'trip/'+tripId)
    }
  })
  
}

const tripService = {
  createtrip,
  gettrips,
  deletetrip,
}

export default tripService
