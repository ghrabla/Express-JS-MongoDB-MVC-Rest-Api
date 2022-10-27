import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { createTrip } from "../../actions/trips";

const Addform = ({Addpop,showpop}) => {

  const initialtripState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [trip, settrip] = useState(initialtripState);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    settrip({ ...trip, [name]: value });
  };

  const savetrip = () => {
    const { title, description } = trip;

    dispatch(createTrip(title, description))
      .then(data => {
        settrip({
          id: data.id,
          title: data.title,
          description: data.description,
          published: data.published
        });
        setSubmitted(true);

        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newtrip = () => {
    settrip(initialtripState);
    setSubmitted(false);
  };

    const [city,setcity] = useState([]) 
    // const [date,setdate] = useState([]) 
    const current = new Date();
    const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;

    useEffect(()=>{
      const fetchcities = async () =>{
        const res = await fetch('http://localhost:3000/city.json')
        const data = await res.json()
        setcity(data)
      }
      fetchcities();  
    },[])

  return (
    <div className={Addpop ? "block" : "hidden"}>
      <form class="w-full max-w-lg absolute bg-gray-500 rounded  p-10 mx-auto ml:0 lg:ml-80 shadow-md z-50	absolute ">
        <a href="javascript:void(0)" class="text-white font-bold flex justify-end text-xl mb-5" onClick={showpop}>
          <i class="fa-solid fa-xmark"></i>
        </a>
        <div class="flex flex-wrap -mx-3 mb-6 ">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Depart city
            </label>
            <select
            id="large"
            class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option selected disabled>Choose a city</option>
            {city.map((one) => (
          <option value={one.ville}>{one.ville}</option>
        ))}
          </select>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Arrive city
            </label>
            <select
            id="large"
            class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option selected disabled>Choose a city</option>
            {city.map((one) => (
          <option value={one.ville}>{one.ville}</option>
        ))}
          </select>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6 ">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Depart date
            </label>
            <input type="date" min={date}
            id="large"
            class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
            
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Arrive date
            </label>
            <input type="date" min={date}
            id="large"
            class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-city"
            >
              Price
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
            />
          </div>
          <div class="w-full px-3 my-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-city"
            >
              Bus name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
            />
          </div>
        </div>
        <div class="p-2 w-full">
          <a class="flex font-bold mx-auto text-white bg-cyan-600 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-700 rounded text-lg cursor-pointer">
            Add
          </a>
        </div>
      </form>
    </div>
  );
};

export default Addform;
