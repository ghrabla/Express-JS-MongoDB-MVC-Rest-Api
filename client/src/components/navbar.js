// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../services/auth/authSlice'


const Navbar = () => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }


    return(
    <>
     <div className="bg-cyan-600 p-5 flex justify-around">
         <div>
             <img src={`${process.env.PUBLIC_URL}/images/TravelBook.svg`}/>
         </div>
         <div className="text-white font-bold">
             <span><i className="fa fa-envelope" aria-hidden="true"></i> kamalghrabla@gmail.com</span>
             <span className="ml-8"><i className="fa-solid fa-phone " ></i> 0625467800</span>
             <span className="ml-8"><i className="fa fa-map-marker" aria-hidden="true"></i> YOUCODE</span>
         </div>
     </div>
     <div className="flex justify-center gap-28 m-4 uppercase">
     <Link path="/home" to="/" exact>
      <a href="#"><i className="fa fa-home" aria-hidden="true"></i> Home</a>
      </Link>
      {user ?(
         <>
           <a href="javascript:void(0)" onClick={onLogout}><i className="fa-solid fa-right-from-bracket"></i> Logout</a>
      
      <Link path="/Ticket" to="/Ticket">
       <a href="#"><i className="fa fa-ticket" aria-hidden="true"></i> Ticket</a>
       </Link>
         </>
        )
      :(
         <>
            <Link path="/Login" to="/Login" exact>
          <a href="#"><i className="fa fa-sign-in" aria-hidden="true"></i> Login</a>
          </Link>
          <Link path="/Register" to="/Register" exact>
           <a href="#"><i className="fa-solid fa-registered"></i> Register</a>
          </Link>
         </>
      )}
      
     </div>
     </>
    )
}

export default Navbar