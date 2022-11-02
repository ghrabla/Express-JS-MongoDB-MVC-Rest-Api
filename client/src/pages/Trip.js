import Sidebar from "../components/sidebar";
import Statistic from "../components/statistic";
import Addform from "../components/add";
import Updateform from "../components/update";
import { useState,useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { reset } from '../features/authAdmin/authSlice'
import { toast } from 'react-toastify'
import { gettrips } from "../features/trips/tripSlice";


const Trip = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch() 

  const { admin, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.authAdmin 
  )

  const { trips } = useSelector((state) => state.trips)
  

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (!admin) {
      navigate('/')
    }

    dispatch(reset())

    dispatch(gettrips())

    return () => {
      dispatch(reset())
    }
  }, [admin, isError, isSuccess, message, navigate, dispatch])
  
  const [Addpop,setAddpop] = useState(false);
  const [action,setaction] = useState(false);
  const [showupdate,setshowupdate] = useState(false);

  const showpop = () =>{
     setAddpop(!Addpop)
  }
  const showaction = () =>{
     setaction(!action)
  }
  const funshowupdate = () =>{
    setshowupdate(!showupdate)
  }

  return (
    <>
      <div>
        <Sidebar/>
        <Addform Addpop={Addpop} showpop={showpop}/>
        <Updateform showupdate={showupdate} funshowupdate={funshowupdate}/>
        <Statistic/>
        <div class="container mx-auto px-4 sm:px-8">
          <div class="py-8">
            <div>
              <p class="text-xl font-semibold leading-tight flex lg:justify-end justify-center">
                <button class="bg-transparent hover:bg-blue-500 text-cyan-600 font-semibold hover:text-white py-2 px-4 border border-cyan-600 hover:border-transparent rounded" onClick={showpop}>
                  <i class="fa fa-plus" aria-hidden="true"></i> Add trip
                </button>
              </p>
            </div>
            <div>
             <div>
                  <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                  <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                    <table class="min-w-full leading-normal">
                      <thead>
                        <tr>
                          <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Depart/Arrive city
                          </th>
                          <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Price
                          </th>
                          <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Depart/Arrive date
                          </th>
                          <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Bus
                          </th>
                          <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                        </tr>
                      </thead>
               {trips.map((one)=>(
                      <tbody>
                        <tr v-for="product in products">
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div class="flex">
                              <div class="ml-3">
                                <p class="text-red-900 whitespace-no-wrap ">{one.depart_city}</p>
                                <p class="text-green-700 whitespace-no-wrap font-bold">
                                {one.arrive_city}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">{one.price}</p>
                            <p class="text-gray-600 whitespace-no-wrap">DH</p>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-red-900 whitespace-no-wrap">
                            {one.depart_date}
                            </p>
                            <p class="text-green-600 whitespace-no-wrap font-bold">
                            {one.arrive_date}
                            </p>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                aria-hidden
                                class="absolute inset-0 opacity-50 rounded-full"
                              ></span>
                              <span class="relative">ACHKID</span>
                            </span>
                          </td>
                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                            <div className={action ? "hidden" : "block"}>
                            <button
                              onClick={showaction}
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
                            <div className={action ? "block" : "hidden"}>
                            <button onClick={showaction} class="font-bold text-xl" ><i class="fa-solid fa-xmark"></i></button>
                            </div>
                          </td>
                          <div className={action ? "block" : "hidden"}>
                          <div class="flex flex-col gap-3" >
                      <button  class="text-green-500 font-bold" onClick={funshowupdate}><i class="fas fa-edit" ></i>Update</button>
                      <button class="text-red-500 font-bold" ><i class="fa fa-trash" aria-hidden="true"></i>Delete</button>
                  </div> 
                  </div>
                        </tr>
                      </tbody>
                    ))}
                    </table>
                  </div>
                </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trip;
