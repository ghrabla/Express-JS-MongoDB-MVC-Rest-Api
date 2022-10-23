import Sidebar from "./components/sidebar";
import Statistic from "./components/statistic";

const Trip = () =>{
    return(
        <>
          <div>
              <Statistic/>
              <div >			
 {/* <div  class="bg-gray-700 w-full h-full absolute"></div> */}

{/* <form  class="w-full max-w-lg absolute bg-gray-500 rounded  p-10 mx-auto ml:0 lg:ml-80 shadow-md z-50	absolute" v-if="showupdate">
   <a href="#"  class="text-white font-bold flex justify-end text-xl mb-5"><i class="fa-solid fa-xmark"></i></a>
   <div class="text-center text-white font-bold mb-4">Update Product</div> 
  <div class="flex flex-wrap -mx-3 mb-6 ">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
        Produit Nom
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
      <p class="text-red-500 text-xs italic">Please fill out this field.</p> 
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
        Produit Prix
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
        Description
      </label>
      <textarea class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password"  ></textarea>
      <p class="text-white text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
   <div class="flex flex-wrap -mx-3 mb-6">
  <div class="w-full px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
        Image lien
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text"  />
    </div>
  <div class="w-full px-3 my-6 md:mb-0">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
        la marque
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" />
    </div>
  </div>
  <div class="flex -mx-3 mb-2">
    
    <div class="w-full px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-state">
        Type
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 bordeblackder-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" >
           <option>solar</option>
          <option>chouveux</option>
          <option>battery</option>
          <option>panneaux</option>
          <option>onduleurs</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-zip">
        Quantity
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
    </div>
  </div>
  <div class="p-2 w-full">
    <a class="flex mx-auto text-white bg-blue-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer" >Editer</a>
  </div>
</form> */}

  <div class="container mx-auto px-4 sm:px-8">
  <div class="py-8">
    <div>
      <p class="text-xl font-semibold leading-tight flex lg:justify-end justify-center">
          <button   class="bg-transparent hover:bg-blue-500 text-cyan-600 font-semibold hover:text-white py-2 px-4 border border-cyan-600 hover:border-transparent rounded">
         <i class="fa fa-plus" aria-hidden="true" ></i> Add trip
         </button>
      </p>
    </div>
    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div
        class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
      >
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Depart/Arrive city
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Price
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Depart/Arrive date
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Bus
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr  v-for="product in products" >
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex">
                  <div class="ml-3">
                    <p class="text-red-900 whitespace-no-wrap ">
                     Safi
                    </p>
                    <p class="text-green-700 whitespace-no-wrap font-bold">
                     Rabat
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">55.00</p>
                <p class="text-gray-600 whitespace-no-wrap">DH</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-red-900 whitespace-no-wrap">09/12/2022</p>
                <p class="text-green-600 whitespace-no-wrap font-bold">11/12/2022</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span
                  class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                >
                  <span
                    aria-hidden
                    class="absolute inset-0 opacity-50 rounded-full"
                  ></span>
                  <span class="relative">ACHKID</span>
                </span>
              </td>
              <td
                class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
              >
                <button  v-if="showaction!=product"
                  type="button"
                  class="inline-block text-gray-500 hover:text-gray-700"
                >
                  <svg
                    class="inline-block h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                    />
                  </svg>
                </button>
                <button class="font-bold text-xl" v-if="showaction==product" ><i class="fa-solid fa-xmark"></i></button>
              </td>
              <div class="flex flex-col gap-3" v-if="showaction==product">
                  <button class="text-green-500 font-bold" ><i class="fas fa-edit" ></i>Update</button>
                  <button class="text-red-500 font-bold" ><i class="fa fa-trash" aria-hidden="true"></i>Delete</button>
              </div> 
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>



</div>
          </div>
        </>
    )
}

export default Trip;