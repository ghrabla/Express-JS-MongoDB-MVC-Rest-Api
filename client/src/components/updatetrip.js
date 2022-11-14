import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatetrip,gettrips,getonetrip } from "../services/trips/tripSlice";
import tripService from "../services/trips/tripService";
import axios from "axios";
import Swal from 'sweetalert2';



const Updateform = ({showupdate,funshowupdate,id_trip,onetrip}) => {
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

    const [city,setcity] = useState([]) 
    const [bus, setbus] = useState([]);
    const current = new Date();
    const date = `${current.getFullYear()}-${current.getMonth() + 1}-0${current.getDate()} ${current.getHours()}:${current.getMinutes()}`;
    // console.log(onetrip)
    const onChange = (e) => { 
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
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
      if(tripData.depart_city!='' && tripData.arrive_city!='' && tripData.depart_date!='' && tripData.arrive_date!='' && tripData.price!='' && tripData.places!='' && tripData.id_bus!=''){
         if(tripData.depart_city === tripData.arrive_city){
          Swal.fire({
            title : 'depart and arrive city are the same !',
            type : 'warning'
        })
         }else{
           const thetripid = id_trip;
          //  console.log(tripData)
           tripService.updatetrip(thetripid,tripData)
           dispatch(gettrips())
          // dispatch(updatetrip(thetripid,tripData,uuu));
         }
        // const resp = await dispatch(gettrips());
        // return resp;
  
      }else{
        Swal.fire( 'please fill all the feilds !'
      )
      }
      // setText("");
    };

    useEffect(()=>{
      const fetchcities = async () =>{
        const res = await fetch('http://localhost:3000/city.json')
        const data = await res.json()
        setcity(data)
      }
      fetchcities();  
      const fetchbus = async () => {
        const res = await axios.get("http://localhost:8090/bus");
        const bus = await res.data;
        setbus(bus);
      };
      fetchbus();
    },[])

  return (
    <div className={showupdate ? "block" : "hidden"}>
      <form class="w-full max-w-lg absolute bg-gray-500 rounded  p-10 mx-auto ml:0 lg:ml-80 shadow-md z-50	absolute " onSubmit={onSubmit}>
        <a href="javascript:void(0)" class="text-white font-bold flex justify-end text-xl mb-5" onClick={funshowupdate}>
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
            value={onetrip.depart_city}
            onChange={onChange}
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
            name="arrive_city"
            // value={onetrip.arrive_city}
            onChange={onChange}
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
            <input type="datetime-local" min={date}
            // value={onetrip.depart_date}
            name="depart_date"
            onChange={onChange}
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
            <input type="datetime-local" min={formData.depart_date}
            // value={onetrip.arrive_date}
            name="arrive_date"
            onChange={onChange}
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
              // value={onetrip.price}
              name="price"
              onChange={onChange}
              type="text"
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
              class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              // value={onetrip.price}
              name="places"
              onChange={onChange}
              type="text"
            />
          </div>
          <div class="w-full px-3 my-6 md:mb-0">
            {/* <div class="w-full md:w-1/2 px-3"> */}
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Bus name
            </label>
            <select
              name="id_bus"          
              // value={onetrip.id_bus}
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
          <button class="flex font-bold mx-auto text-white bg-cyan-600 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-700 rounded text-lg cursor-pointer" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Updateform;
