import axios from 'axios'
import Swal from 'sweetalert2'

const API_URL = 'http://localhost:8090/'

// Create new reservation
const createreservation = async (reservationData) => {
 if(reservationData){
  const response = await axios.post(API_URL+'reservation', reservationData)
  Swal.fire('Saved!', '', 'success')
  return response.data
 }else{
  Swal.fire( 'please fill all feilds !', 'warning')
 }
}

const updatereservation = async (id_reservation,reservationData) => {
 if(reservationData){
  const response = await axios.put(API_URL+'reservation/'+id_reservation, reservationData)
  Swal.fire('Updated!', '', 'success')
  return response.data
 }else{
  Swal.fire( 'of course there is a problem !', 'warning')
 }
}

// Get user reservations
const getreservations = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL+'reservation')
  return response.data
}

// get one reservation by id 
const getonereservation = async (reservationId) =>{
  const res = await axios.get(API_URL+'reservation/'+reservationId)
  return res.data
}

// Delete user reservation
const deletereservation = async (reservationId) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // }
  
      axios.delete(API_URL+'reservation/'+reservationId)
    
  
}

const reservationService = {
  createreservation,
  updatereservation,
  getreservations,
  getonereservation,
  deletereservation,
}

export default reservationService
