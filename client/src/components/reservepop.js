import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { createreservation } from "../services/reservations/reservationSlice";
import Swal from 'sweetalert2';
import tripService from "../services/trips/tripService";

const Reservepop = ({ Addpop, showpop, trips }) => {
  //   console.log(trips[0])
  const [number,setNumber] = useState(1);
  const navigate = useNavigate();
  const increment = (num) => {
      if(number<num){
        setNumber(number+1)
      }else{
        return
      }
  }
  const decrement = () => {
    if(number>1){
      setNumber(number-1)
    }else{
      return
    }
   
    
  }
  const dispatch = useDispatch();
  const user = localStorage.getItem('user')
  
  const clientreserve = async (ticket_number,price,id_trip,bus,trip) => {
    const loggedin = localStorage.getItem("user");
    if(loggedin){
   
   let user_number = ticket_number;
   let user_price = price * user_number;
   let user_id = JSON.parse(user)._id;
   let user_trip = id_trip;
   let user_bus = bus._id;
    const reservationData = {
     ticket_number: user_number,
     price : user_price,
     id_owner : user_id,
     id_trip : user_trip,
     id_bus : user_bus,

    }
      dispatch(createreservation(reservationData))
      let newplaces = trip.places - user_number;
      const tripupdate = {
       depart_city: trip.depart_city,
       arrive_city: trip.arrive_city,
       depart_date: trip.depart_date,
       arrive_date: trip.arrive_date,
       price: trip.price,
       places: newplaces,
       id_bus: trip.id_bus[0]._id,
      }
      tripService.updateplaces(id_trip,tripupdate)
      showpop()
      navigate("Ticket")

    }else{
      Swal.fire("please login if you wanna reserve");
    }
    // console.log(reservationData)
  }
  return (
    <div className={Addpop ? "block" : "hidden"}>
      <form
      class="w-full max-w-4xl max-h-96 overflow-scroll overflow-x-hidden fixed bg-cyan-600 rounded p-10 mx-auto ml:0 lg:ml-36 shadow-md z-50 mt-6">
        <a
          href="javascript:void(0)"
          class="text-white font-bold flex justify-end text-xl mb-5"
          onClick={showpop}
        >
          <i class="fa-solid fa-xmark"></i>
        </a>
        {trips.map((one) => (
          <div className="flex justify-between bg-white mt-6 rounded" key={one._id}>
            <div>
              <img
                className="rounded max-w-xs"
                src={process.env.PUBLIC_URL + "/image.jpg"}
                alt=""
              />
            </div>
            <div className="text-black mr-32">
              <span className="font-bold">price: </span>
              <span className="font-bold text-red-600">{one.price}</span>
              <div className="flex flex-col font-bold">
                <div>
                  <span>depart city: </span>
                  <span className="text-green-600"> {one.depart_city}</span>
                </div>
                <div>
                  <span>arrive city: </span>
                  <span className="text-cyan-600"> {one.arrive_city}</span>
                </div>
              </div>
              <div className="font-bold flex flex-col">
                <div>
                <span>depart date: </span>
                <span  className="text-green-600">{one.depart_date}</span>
                </div>
                <div>
                <span>arrive date: </span>
                <span  className="text-cyan-600">{one.arrive_date}</span>
                </div>
              </div>
              <span className="font-bold">car name: </span>
              <span className="font-bold text-red-600">
                
                {one.id_bus[0].name}
              </span>
              <div className="flex justify-between p-2 w-full ml-50 mt-4">
                  <div className="flex justify-around">
                    <a href="javascrip:void(0)" className="bg-cyan-600 text-white font-bold rounded-full px-3 py-2" onClick={()=>increment(one.places)}>+</a>
                    <div className="px-8 text-lg font-bold">{number}</div>
                    <a href="javascrip:void(0)" className="bg-cyan-600 text-white font-bold rounded-full px-3 py-2" onClick={()=>decrement()}>-</a>
                  </div>                
                  <a href="javascript:void(0)"
                  onClick={()=>{clientreserve(number,one.price,one._id,one.id_bus[0],one)}}
                  className="font-bold text-white  bg-cyan-600 border-0 py-2 px-8 text-center focus:outline-none hover:bg-cyan-700 rounded text-lg cursor-pointer"
                  id="btn-reserve">
                  Reserve
                </a >
              </div>
            </div>
          </div>
        ))}

        {/* <div class="p-2 w-full">
          <button
            class="flex font-bold mx-auto text-white bg-cyan-600 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-700 rounded text-lg cursor-pointer"
            type="submit">
            Add
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default Reservepop;
