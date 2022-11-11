import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createbus,getbuses } from "../services/buses/busSlice";
import Swal from 'sweetalert2';


const Addform = ({ Addpop, showpop }) => {
  const [formData, setFormData] = useState({
    name: "",
    places: "",
    matrql: ""
  });

  const { name, places, matrql } =
    formData;

  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  
 
  const onSubmit = async (e) => {
    e.preventDefault();
    const busData = {
      name,
      places,
      matrql
     
    };
    if(busData.name!='' && busData.places!='' && busData.matrql!=''){
         dispatch(createbus(busData));
      // const resp = await dispatch(getbuses());
      // return resp;
    }else{
      Swal.fire({
        title : 'please fill all the feilds !',
        type : 'warning'
    })
    }
    // setText("");
  };


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
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-city"
            >
              Name
            </label>
            <input
              name="name"
              class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              onChange={onChange}
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3 mb-6 md:mb-0">
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
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-city"
            >
              Matrql
            </label>
            <input
              name="matrql"
              class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              onChange={onChange}
            />
          </div>
        </div>
        <div class="p-2 w-full">
          <button
            class="flex font-bold mx-auto text-white bg-cyan-600 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-700 rounded text-lg cursor-pointer"
            type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addform;
