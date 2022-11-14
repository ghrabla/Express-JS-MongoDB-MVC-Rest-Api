import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createtrip,gettrips } from "../services/trips/tripSlice";
import axios from "axios";
import Swal from 'sweetalert2'


const Addform = ({ Addpop, showpop }) => {
  const [formData, setFormData] = useState({ 
    depart_city: "",
    arrive_city: "",
    depart_date: "",
    arrive_date: "",
    price: "",
    places: "",
    id_bus: "",
  });

  const { depart_city, arrive_city, depart_date, arrive_date, price,places, id_bus } =
    formData;

  const dispatch = useDispatch();
  const [city, setcity] = useState([]);
  const [bus, setbus] = useState([]);
  const current = new Date();
  const date = `${current.getFullYear()}-${current.getMonth() + 1}-0${current.getDate()} ${current.getHours()}:${current.getMinutes()}`;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  
  const checkdate = () =>{
     if(formData.depart_date === ''){
      Swal.fire({
        title : 'enter depart date first',
        type : 'warning'
      })
     }
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    const tripData = {
      depart_city,
      arrive_city,
      depart_date,
      arrive_date,
      price,
      places,
      id_bus,
    };
    if(tripData.depart_city!='' && tripData.arrive_city!='' && tripData.depart_date!='' && tripData.arrive_date!='' && tripData.places!='' && tripData.price!='' && tripData.id_bus!=''){
       if(tripData.depart_city === tripData.arrive_city){
        Swal.fire({
          title : 'depart and arrive city are the same !',
          type : 'warning'
      })
       }else{
         dispatch(createtrip(tripData));
       }
      // const resp = await dispatch(gettrips());
      // return resp;

    }else{
      Swal.fire({
        title : 'please fill all the feilds !',
        type : 'warning'
    })
    }
    // setText("");
  };

  useEffect(() => {
    const fetchcities = async () => {
      const res = await fetch("http://localhost:3000/city.json");
      const data = await res.json();
      setcity(data);
    };
    fetchcities();
    const fetchbus = async () => {
      const res = await axios.get("http://localhost:8090/bus");
      const bus = await res.data;
      setbus(bus);
    };
    fetchbus();
  }, []);

  return (
    <div className={Addpop ? "block" : "hidden"}>
      <form
        class="w-full max-w-lg absolute bg-gray-500 rounded  p-10 mx-auto ml:0 lg:ml-80 shadow-md z-50	absolute "
        onSubmit={onSubmit}
      >
        <a
          href="javascript:void(0)"
          class="text-white font-bold flex justify-end text-xl mb-5"
          onClick={showpop}
        >
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
              name="depart_city"
              id="large"
              onChange={onChange}
              class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option selected disabled>
                Choose a city
              </option>
              {city.map((one) => (
                <option value={one.ville} name="depart_city">
                  {one.ville}
                </option>
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
              name="arrive_city"
              id="large"
              onChange={onChange}
              class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option selected disabled>
                Choose a city
              </option>
              {city.map((one) => (
                <option value={one.ville} name="arrive_city">
                  {one.ville}
                </option>
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
            <input
              type="datetime-local"
              min={date}
              name="depart_date"
              id="large"
              onChange={onChange}
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
            <input
              type="datetime-local"
              min={formData.depart_date} 
              name="arrive_date"
              id="large"
              onClick={checkdate}
              onChange={onChange}
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
              name="price"
              class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              onChange={onChange}
            />
          </div>
          <div class="w-full px-3 mt-5 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-city"
            >
              Places
            </label>
            <input
              name="places"
              class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              onChange={onChange}
            />
          </div>
          <div class="w-full px-3 my-6 md:mb-0">
            {/* <div class="w-full md:w-1/2 px-3"> */}
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Trip Bus
            </label>
            <select
              name="id_bus"
              id="large"
              onChange={onChange}
              class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option selected disabled>
                Choose a bus
              </option>
              {bus.map((ones) => (
                <option value={ones._id} name="id_bus">
                  {ones.name}
                </option>
              ))}
            </select>
            {/* </div> */}
          </div>
        </div>
        <div class="p-2 w-full">
          <button
            class="flex font-bold mx-auto text-white bg-cyan-600 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-700 rounded text-lg cursor-pointer"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addform;
