import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createreservation } from "../services/reservations/reservationSlice";
import Swal from 'sweetalert2';
import tripService from "../services/trips/tripService";

const Ticket = () => {
  //   console.log(trips[0])

   
  return (
    <div >  
        {/* {trips.map((one) => ( */}   
          <div className="flex justify-between bg-white mt-6 rounded">
            <div>
              <img
                className="rounded max-w-xs"
                src={process.env.PUBLIC_URL + "/image.jpg"}
                alt=""
              />
            </div>
            <div className="text-black mr-32">
              <span className="font-bold">price: </span>
              <span className="font-bold text-red-600"></span>
              <div className="flex flex-col font-bold">
                <div>
                  <span>depart city: </span>
                  <span className="text-green-600"> </span>
                </div>
                <div>
                  <span>arrive city: </span>
                  <span className="text-cyan-600"> </span>
                </div>
              </div>
              <div className="font-bold flex flex-col">
                <div>
                <span>depart date: </span>
                <span  className="text-green-600"></span>
                </div>
                <div>
                <span>arrive date: </span>
                <span  className="text-cyan-600"></span>
                </div>
              </div>
              <span className="font-bold">car name: </span>
              <span className="font-bold text-red-600">
                
                
              </span>
         
            </div>
          </div>
        {/* ))} */}

        {/* <div class="p-2 w-full">
          <button
            class="flex font-bold mx-auto text-white bg-cyan-600 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-700 rounded text-lg cursor-pointer"
            type="submit">
            Add
          </button>
        </div> */}
    </div>
  );
};

export default Ticket;
