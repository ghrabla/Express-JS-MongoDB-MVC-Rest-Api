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

const updatetrip = async (tripData) => {
 if(tripData){
  const response = await axios.put(API_URL+'trip/6367e87e87787deccc246388', tripData)
  Swal.fire('Updated!', '', 'success')
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

// get one trip by id 
const getonetrip = async (tripId) =>{
    axios.get(API_URL+'trip/'+tripId).then((data) =>{
      console.log(data)
    })
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
}

export default tripService
