import React from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import tripService from "../services/trips/tripService";
import Reservepop from "./reservepop";

const Header = () => {
  const [formData, setData] = useState({
    depart_city: "",
    arrive_city: "",
  });
  const [city, setcity] = useState([]);
  const [trips, setTrips] = useState([]);
  const [Addpop, setAddpop] = useState(false);
  const { depart_city, arrive_city } = formData;
  const onChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const showpop = ()=>{
    setAddpop(false)
  }
  const checkthetrip = async (e) => {
    e.preventDefault();
    const checkData = {
      depart_city,
      arrive_city,
    };
    if (checkData.arrive_city != "" && checkData.depart_city != "") {
      if (checkData.arrive_city != checkData.depart_city) {
        const res = await tripService.checktrip(checkData);
        if (res != "") {
          console.log(res);
          setTrips(res)
          setAddpop(true)
        } else {
          Swal.fire("ohh sorry that trip not available yet");
        }
      } else {
        Swal.fire("depart and arrive city are the same");
      }
    } else {
      Swal.fire("please fill all the feilds", "warning");
    }
  };
  useEffect(() => {
    const fetchcities = async () => {
      const res = await fetch("http://localhost:3000/city.json");
      const data = await res.json();
      setcity(data);
    };
    fetchcities();
  }, []);

  return (
    <>
      <Reservepop Addpop={Addpop} showpop={showpop} trips={trips}/>
      <form
        onSubmit={checkthetrip}
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
              onChange={onChange}
              name="depart_city"
              id="large"
              className="cursor-pointer block py-3 px-2  text-base text-gray-900 bg-gray-50 rounded-l-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected disabled>
                Choose a city
              </option>
              {city.map((one) => (
                <option value={one.ville}>{one.ville}</option>
              ))}
            </select>
            <select
              onChange={onChange}
              name="arrive_city"
              id="large"
              className="cursor-pointer block py-3 px-2 text-base text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected disabled>
                Choose a city
              </option>
              {city.map((one) => (
                <option value={one.ville}>{one.ville}</option>
              ))}
            </select>
            <button
              className="block py-3 px-20  text-base text-red bg-cyan-700 font-bold rounded-r-lg border border-gray-300 "
              type="submit"
            >
              FIND TRIP
            </button>
          </div>
        </div>
        <div></div>
      </form>
    </>
  );
};

export default Header;
