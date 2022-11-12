// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { createbus,getbuses } from "../services/buses/busSlice";
// import Swal from 'sweetalert2';

const Reservepop = ({ Addpop, showpop, trips }) => {
  //   console.log(trips[0])
  return (
    <div className={Addpop ? "block" : "hidden"}>
      <form
      class="w-full max-w-4xl max-h-96 overflow-scroll overflow-x-hidden absolute bg-gray-500 rounded  p-10 mx-auto ml:0 lg:ml-36 shadow-md z-50 absolute mt-6">
        <a
          href="javascript:void(0)"
          class="text-white font-bold flex justify-end text-xl mb-5"
          onClick={showpop}
        >
          <i class="fa-solid fa-xmark"></i>
        </a>
        {trips.map((one) => (
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
              <div class="p-2 w-full ml-40 mt-4">
                <button
                  class="flex font-bold mx-auto text-white bg-cyan-600 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-700 rounded text-lg cursor-pointer"
                  type="submit"
                >
                  Reserve
                </button>
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
