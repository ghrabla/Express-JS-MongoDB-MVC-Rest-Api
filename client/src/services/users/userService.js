import axios from 'axios'
import Swal from 'sweetalert2'

const API_URL = 'http://localhost:8090/'

// Create new client
const createclient = async (clientData) => {
 if(clientData){
  const response = await axios.post(API_URL+'client', clientData)
  Swal.fire('Saved!', '', 'success')
  return response.data
 }else{
  Swal.fire( 'please fill all feilds !', 'warning')
 }
}

const updateclient = async (id_client,clientData) => {
 if(clientData){
  const response = await axios.put(API_URL+'client/'+id_client, clientData)
  Swal.fire('Updated!', '', 'success')
  return response.data
 }else{
  Swal.fire( 'of course there is a problem !', 'warning')
 }
}

// Get user clients
const getclients = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL+'client')
  return response.data
}

// get one client by id 
const getoneclient = async (clientId) =>{
  const res = await axios.get(API_URL+'client/'+clientId)
  return res.data
}

// Delete user client
const deleteclient = async (clientId) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // }
  
      axios.delete(API_URL+'client/'+clientId)
    
  
}

const clientService = {
  createclient,
  updateclient,
  getclients,
  getoneclient,
  deleteclient,
}

export default clientService
