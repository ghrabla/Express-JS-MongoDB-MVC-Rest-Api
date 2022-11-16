import { useState, useEffect } from "react";
import axios from "axios";

const Ticket = () => {
  //   console.log(trips[0])
   const [ticket,setTicket] = useState([])
   useEffect(()=>{
     const gettickets = async ()=>{
         let id_owner = JSON.parse(localStorage.getItem("user"))._id
        //  console.log(id_owner)
        const res = await axios.get(`http://localhost:8090/reservation/owner/${id_owner}`)
        // console.log(res.data)
        setTicket(res.data)
        console.log(ticket)
     }
     gettickets(); 
   },[])
   
  return (
    <div >  
        {ticket.map((one) => (   
          <div id="for-shadow" className="flex justify-between mt-6 mb-8 rounded">
            <div>
              <img
                className="rounded max-w-xs"
                src={process.env.PUBLIC_URL + "/image.jpg"}
                alt=""
              />
            </div>
            <div className="text-black mr-60">
              <span className="font-bold">price: </span>
              <span className="font-bold text-red-600">{one.id_trip[0].price * one.ticket_number}</span>
              <div className="flex flex-col font-bold">
                <div>
                  <span>depart city: </span>
                  <span className="text-green-600">{one.id_trip[0].depart_city}</span>
                </div>
                <div>
                  <span>arrive city: </span>
                  <span className="text-cyan-600">{one.id_trip[0].arrive_city}</span>
                </div>
              </div>
              <div className="font-bold flex flex-col">
                <div>
                <span>depart date: </span>
                <span  className="text-green-600">{one.id_trip[0].depart_date}</span>
                </div>
                <div>
                <span>arrive date: </span>
                <span  className="text-cyan-600">{one.id_trip[0].arrive_date}</span>
                </div>
              </div>
              <div>
              <span className="font-bold">number of tickets: </span>
              <span className="font-bold text-red-600">{one.ticket_number}</span>
              </div>
              <span className="font-bold">car name: </span>
              <span className="font-bold text-red-600">{one.id_bus[0].name}</span>
              <img className="w-20 mt-2" src={process.env.PUBLIC_URL+`images/qr.png`} alt=""/>
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
    </div>
  );
};

export default Ticket;
