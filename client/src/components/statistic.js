import Profile from "./profile";
import { useSelector } from "react-redux";
import { useState } from "react";
const Statistic = () =>{
  
  const trips = useSelector((state) => state.trips) 
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
                  <p className="font-bold text-xl">11</p>
                </div>
            </div>
            <div className="flex mt-10 px-7 py-5 rounded lg:mx-0 mx-10 lg:w-1/5 shadow-2xl" id="box-sta">
                <div className="text-red-800">
                <i className="fa fa-bus fa-3x" aria-hidden="true"></i>
                </div>
                <div className="ml-4">
                  <span className="font-bold ">total buses</span> 
                  <p className="font-bold text-xl">30</p>
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
                  <p className="font-bold text-xl">12</p>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Statistic;