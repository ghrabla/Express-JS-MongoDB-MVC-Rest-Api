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
const checktrip = async (formData) => {
 if(formData){
  const response = await axios.post(API_URL+'trip/check', formData)
  return response.data
  // if(response.data){
  //   Swal.fire('Yeah there is!', '', 'success')
  // }
 }else{
  Swal.fire( 'please fill all feilds !', 'warning')
 }
}

const updatetrip = async (id_trip,tripData) => {
 if(tripData){
  const response = await axios.put(API_URL+'trip/'+id_trip, tripData)
  Swal.fire('Updated!', '', 'success')
  return response.data
 }else{
  Swal.fire( 'of course there is a problem !', 'warning')
 }
}

const updateplaces = async (id_trip,tripData) => {
  if(tripData){
   const response = await axios.put(API_URL+'trip/'+id_trip, tripData)
   return response.data
  }else{
   Swal.fire( 'of course there is a problem !', 'warning')
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

// get one trip by id 
const getonetrip = async (tripId) =>{
  const res = await axios.get(API_URL+'trip/'+tripId)
  return res.data
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
  updatetrip,
  gettrips,
  getonetrip,
  deletetrip,
  checktrip,
  updateplaces
}

export default tripService
