import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../services/authAdmin/authSlice'



const Sidebar = () =>{

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { admin } = useSelector((state) => state.authAdmin)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
   
	const [isActive, setActive] = useState(false);

    const handleToggle = () => {
      setActive(!isActive);
    };


    return(
        <>   
		<div className="">
			<div className="absolute flex top-0 h-screen z-20" >
				<div className={isActive ? "block" : "hidden"}>
				<div  className="transition-all duration-700 bg-white overflow-hidden flex items-center justify-center h-screen"  
				
				id="sidebar" >
					<div className="w-48 ml-5 text-black flex flex-col">
                        <a href="javascript:void(0)" className="font-bold text-xl my-5 ">
						<Link to="/">
							<i className="fa fa-home" aria-hidden="true"></i> Home						
						</Link>
						</a>
                        <a href="javascript:void(0)" className="font-bold text-xl my-5 ">
						<Link to="/Bus">
							<i className="fas fa-bus"></i> Buses	
						</Link>
						</a>
                        <a href="javascript:void(0)" className="font-bold text-xl my-5 ">
						<Link to="/Trip">
							<i className="fas fa-file"></i> Trips
						</Link>
						</a>
                        <a href="javascript:void(0)" className="font-bold text-xl my-5 ">
						<Link to="/User">
							<i className="fa fa-user" aria-hidden="true"></i> Users
						</Link>
						</a>
                        <a href="javascript:void(0)" className="font-bold text-xl my-5 ">
						<Link to="/Reservation">
							<i className="fa fa-bell" aria-hidden="true"></i> Reserved
						</Link>
						</a>
                        <a href="javascript:void(0)" className="font-bold text-xl my-5 " onClick={onLogout}>
							<i className="fa fa-sign-out" aria-hidden="true"></i> Logout
						</a> 
					</div>
				</div>
				</div>
				<button className="w-12 h-10 mt-20  rounded text-white bg-gray-600 text-center focus:outline-none hover:bg-gray-500 transition-color duration-300" onClick={handleToggle}>
					<span className="block transform origin-center font-bold">
						<i className="fa fa-bars" aria-hidden="true"></i>
					</span>
				</button>
			</div>
		</div>
        </>
    )
}

export default Sidebar;