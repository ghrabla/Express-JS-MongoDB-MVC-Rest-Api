import Sidebar from "../components/sidebar";
import Statistic from "../components/statistic";
import { useState,useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { reset } from '../services/authAdmin/authSlice'
import { toast } from 'react-toastify'

const User = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { admin, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.authAdmin
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (!admin) {
      navigate('/')
    }

    dispatch(reset())
  }, [admin, isError, isSuccess, message, navigate, dispatch])

  return (
    <>
      <div>
        <Sidebar/>
        <Statistic />
        <div class="container mx-auto px-4 sm:px-8">
          <div class="py-8">
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        full name
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Email
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        joined date
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        password
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="product in products">
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap font-bold">kamal ghrabla</p>
                            
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">kamalghrabla@gmail.com</p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-green-600 whitespace-no-wrap font-bold">
                          11/12/2022
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden
                            class="absolute inset-0 opacity-50 rounded-full"
                          ></span>
                          <span class="relative">hh170073</span>
                        </span>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                        <button
                          v-if="showaction!=product"
                          type="button"
                          class="inline-block text-gray-500 hover:text-gray-700"
                        >
                          <svg
                            class="inline-block h-6 w-6 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                          </svg>
                        </button>
                        {/* <button class="font-bold text-xl" v-if="showaction==product" ><i class="fa-solid fa-xmark"></i></button> */}
                      </td>
                      {/* <div class="flex flex-col gap-3" v-if="showaction==product">
                  <button class="text-green-500 font-bold" ><i class="fas fa-edit" ></i>Update</button>
                  <button class="text-red-500 font-bold" ><i class="fa fa-trash" aria-hidden="true"></i>Delete</button>
              </div>  */}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
