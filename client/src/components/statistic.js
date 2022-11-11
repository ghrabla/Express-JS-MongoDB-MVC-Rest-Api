import Profile from "./profile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { gettrips } from "../services/trips/tripSlice";
import { getbuses } from "../services/buses/busSlice";
import { getreservations } from "../services/reservations/reservationSlice";
import { getclients } from "../services/users/userSlice";
const Statistic = () =>{
  const dispatch = useDispatch()
  const trips = useSelector((state) => state.trips) 
  const buses = useSelector((state) => state.buses) 
  const reservations = useSelector((state) => state.reservations) 
  const clients = useSelector((state) => state.users) 
  useEffect(()=>{
    dispatch(gettrips()) 
    dispatch(getbuses()) 
    dispatch(getreservations())
    dispatch(getclients()) 
  },[])
    // console.log()

    return(
        <>
           <Profile/>
           <div className="">
        <div className="flex justify-around lg:flex-row flex-col">
            <div className="flex mt-10 px-7 py-5 rounded lg:mx-0 mx-10 lg:w-1/5 shadow-2xl" id="box-sta">
                <div className="text-purple-900">
                  <i className="fa fa-users fa-3x" aria-hidden="true"></i>
                </div>
                <div className="ml-4">
                  <span className="font-bold ">total users</span> 
                  <p className="font-bold text-xl">{clients.clients.length}</p>
                </div>
            </div>
            <div className="flex mt-10 px-7 py-5 rounded lg:mx-0 mx-10 lg:w-1/5 shadow-2xl" id="box-sta">
                <div className="text-red-800">
                <i className="fa fa-bus fa-3x" aria-hidden="true"></i>
                </div>
                <div className="ml-4">
                  <span className="font-bold ">total buses</span> 
                  <p className="font-bold text-xl">{buses.buses.length}</p>
                </div>
            </div>
            <div className="flex mt-10 px-7 py-5 rounded lg:mx-0 mx-10 lg:w-1/5 shadow-2xl" id="box-sta">
                <div className="text-blue-800">
                <i className="fa fa-file fa-3x" aria-hidden="true"></i>
                </div>
                <div className="ml-4">
                  <span className="font-bold ">total trips</span> 
                  <p className="font-bold text-xl">{trips.trips.length}</p>
                </div>
            </div>
            <div className="flex mt-10 px-7 py-5 rounded lg:mx-0 mx-10 lg:w-1/5 shadow-2xl" id="box-sta">
                <div className="text-green-800">
                <i className="fa fa-check fa-3x" aria-hidden="true"></i>
                </div>
                <div className="ml-4">
                  <span className="font-bold ">total reserved</span> 
                  <p className="font-bold text-xl">{reservations.reservations.length}</p>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Statistic;