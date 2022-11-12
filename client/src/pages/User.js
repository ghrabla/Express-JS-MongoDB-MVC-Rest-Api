import Sidebar from "../components/sidebar";
import Statistic from "../components/statistic";
import { useState,useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { reset } from '../services/authAdmin/authSlice'
import { toast } from 'react-toastify'
import clientService from "../services/users/userService";
import { deleteclient, getclients } from "../services/users/userSlice";
import Swal from "sweetalert2";
import Updateform from "../components/updateuser";

const User = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { admin, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.authAdmin
  )
  const { clients } = useSelector((state) => state.users)

 const [action,setaction] = useState(false);
  const [id_client,setid_client] = useState(false);
  const [showupdate,setshowupdate] = useState(false); 
  const [oneclient,setOneclient] = useState([])
 
 const showaction = (num) =>{
    setaction(num)
 }
 const funshowupdate = () =>{
  setshowupdate(!showupdate)
 }
 const funshowupdateandid = (_idclient) =>{
  setid_client(_idclient)
  setshowupdate(!showupdate)
  const getclient = async (id_client) => {  
   const res = await clientService.getoneclient(id_client)
   setOneclient(res)
  //  console.log(res)
 }
 getclient(_idclient);
 
 }
 const Deleteone = (id) =>{
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
      dispatch(deleteclient(id))
  }
  })
}
  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (!admin) {
      navigate('/')
    }
    dispatch(getclients())
    dispatch(reset())
  }, [admin, isError, isSuccess, message, navigate, dispatch])

  return (
    <>
      <div>
        <Sidebar/>
        <Statistic />
        <Updateform showupdate={showupdate} funshowupdate={funshowupdate} id_client={id_client} oneclient={oneclient}/>
        <div class="container mx-auto px-4 sm:px-8">
          <div class="py-8">
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        full name
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Email
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        joined date
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        status
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                    </tr>
                  </thead>
                  <tbody>
                  {clients.map((one)=>(
                    <tr>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap font-bold">{one.fullname}</p>
                            
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">{one.email}</p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-green-600 whitespace-no-wrap font-bold">
                          {one.createdAt.replace("T"," ").split("").splice(0,16)}
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight ">
                          <span
                            aria-hidden
                            class="absolute inset-0 opacity-50 rounded-full"
                          ></span>
                          <span class="relative">active</span>
                        </span>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                      <div className={action===one ? "hidden" : "block"}>
                            <button
                              onClick={() => showaction(one)}
                              type="button"
                              class="inline-block text-gray-500 hover:text-gray-700"
                            >
                              <svg
                                class="inline-block h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                              </svg>
                            </button>
                            </div>
                        <div className={action===one ? "block" : "hidden"}>
                            <button onClick={showaction} class="font-bold text-xl" ><i class="fa-solid fa-xmark"></i></button>
                            </div> 
                            </td>
                      <div className={action===one ? "block" : "hidden"}>
                          <div class="flex flex-col gap-3" >
                      <button  class="text-green-500 font-bold" onClick={()=>{funshowupdateandid(one._id)}}><i class="fas fa-edit" ></i>Update</button>
                      <button class="text-red-500 font-bold" onClick={() => Deleteone(one._id)}><i class="fa fa-trash" aria-hidden="true"></i>Delete</button>
                  </div> 
                  </div>
                    </tr>
                     ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
