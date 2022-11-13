import axios from 'axios'
import Swal from 'sweetalert2'

const API_URL = 'http://localhost:8090/'

// Create new bus
const createbus = async (busData) => {
 if(busData){
  const response = await axios.post(API_URL+'bus', busData)
  Swal.fire('Saved!', '', 'success')
  return response.data
 }else{
  Swal.fire( 'please fill all feilds !', 'warning')
 }
}

const updatebus = async (id_bus,busData) => {
 if(busData){
  const response = await axios.put(API_URL+'bus/'+id_bus, busData)
  Swal.fire('Updated!', '', 'success')
  return response.data
 }else{
  Swal.fire( 'of course there is a problem !', 'warning')
 }
}
const updateplaces = async (id_bus,busData) => {
 if(busData){
  const response = await axios.put(API_URL+'bus/'+id_bus, busData)
  return response.data
 }else{
  Swal.fire( 'of course there is a problem !', 'warning')
 }
}

// Get user buss
const getbuses = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL+'bus')
  return response.data
}

// get one bus by id 
const getonebus = async (busId) =>{
  const res = await axios.get(API_URL+'bus/'+busId)
  return res.data
}

// Delete user bus
const deletebus = async (busId) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // }
  
      axios.delete(API_URL+'bus/'+busId)
    
  
}

const busService = {
  createbus,
  updatebus,
  getbuses,
  getonebus,
  deletebus,
  updateplaces
}

export default busService
