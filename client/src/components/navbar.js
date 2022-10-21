// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from "react";
import { Link } from "react-router-dom";


const navbar = () => {
    return(
    <>
     <div className="bg-cyan-600 p-5 flex justify-around">
         <div>
             <img src={`${process.env.PUBLIC_URL}/images/TravelBook.svg`}/>
         </div>
         <div className="text-white font-bold">
             <span><i class="fa fa-envelope" aria-hidden="true"></i> kamalghrabla@gmail.com</span>
             <span className="ml-8"><i class="fa-solid fa-phone " ></i> 0625467800</span>
             <span className="ml-8"><i class="fa fa-map-marker" aria-hidden="true"></i> YOUCODE</span>
         </div>
     </div>
     <div className="flex justify-center gap-28 m-4 uppercase">
      <a href="#"><i class="fa fa-home" aria-hidden="true"></i> Home</a>
      <Link path="/Login" to="/Login" exact>
     <a href="#"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</a>
     </Link>
      <a href="#"><i class="fa-solid fa-registered"></i> Register</a>
      <a href="#"><i class="fa-solid fa-right-from-bracket"></i> Logout</a>
       <a href="#"><i class="fa-solid fa-cart-shopping"></i> Panier</a>
      
     </div>
     </>
    )
}

export default navbar