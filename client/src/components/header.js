import React from "react";
import { useState,useEffect } from "react";
import tripService from "../services/trips/tripService";

const Header = () => {
  const [formData,setDepart] = useState()
  const {depart_city,arrive_city} = formData;
  const checkthetrip = async (formData) =>{
   const res = await tripService.checktrip(formData);
  }
  const [city,setcity] = useState([]) 
      useEffect(()=>{
        const fetchcities = async () =>{
          const res = await fetch('http://localhost:3000/city.json')
          const data = await res.json()
          setcity(data)
        }
        fetchcities();  
      },[])
      
    return (
      <div
        className="text-center text-white bg-cover bg-no-repeat bg-fixed h-screen"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/image.jpg"})`,
        }}
      >
        <div>
          <h1 className="text-2xl pt-36">let's take you to your</h1>
          <h1 className="text-4xl font-bold ">OWN DREAM CITY TOO MUCH FAST</h1>
          <div className="flex mt-5 mx-10 justify-center">
          <select
            name="depart_city"
            id="large"
            class="cursor-pointer block py-3 px-2  text-base text-gray-900 bg-gray-50 rounded-l-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected disabled>Choose a city</option>
            {city.map((one) => (
          <option value={one.ville}>{one.ville}</option>
        ))}
          </select>
          <select
            name="arrive_city"
            id="large"
            class="cursor-pointer block py-3 px-2 text-base text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected disabled>Choose a city</option>
            {city.map((one) => (
          <option value={one.ville}>{one.ville}</option>
        ))}
          </select>
          <button className="block py-3 px-20  text-base text-red bg-cyan-700 font-bold rounded-r-lg border border-gray-300 ">FIND TRIP</button>
          </div>
          
        </div>
        <div></div>
      </div>
    );
}

export default Header;