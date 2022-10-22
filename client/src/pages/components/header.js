import React from "react";


const header = () => {
    return (
      <div
        className="text-center text-white bg-cover bg-no-repeat bg-fixed h-screen"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/image.jpg"})`,
        }}
      >
        <div>
          <h1 className="text-2xl pt-20">let's take you to your</h1>
          <h1 className="text-4xl font-bold ">OWN DREAM CITY TOO MUCH FAST</h1>
          <div className="flex mt-5 mx-10 justify-center">
          <select
            id="large"
            class="cursor-pointer block py-3 px-20  text-base text-gray-900 bg-gray-50 rounded-l-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <select
            id="large"
            class="cursor-pointer block py-3 px-20 text-base text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <button className="block py-3 px-20  text-base text-red bg-cyan-700 font-bold rounded-r-lg border border-gray-300 ">FIND TRIP</button>
          </div>
          
        </div>
        <div></div>
      </div>
    );
}

export default header