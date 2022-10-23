const sidebar = () =>{
    return(
        <>   
		<div className="">
			<div className="absolute flex top-0 h-screen z-20" >
				<button className="w-12 h-10 mt-5  rounded text-white bg-gray-600 text-center focus:outline-none hover:bg-gray-500 transition-color duration-300">
					<span className="block transform origin-center font-bold">
						<i className="fa fa-bars" aria-hidden="true"></i>
					</span>
				</button>
				<div  className="transition-all duration-700 bg-white overflow-hidden flex items-center justify-center" 
				
				id="sidebar" >
					<div className="w-48 ml-5 text-blue-900	 flex flex-col">
                        <a href="javascript:void(0)" className="font-bold text-xl my-5 ">
					
							<i className="fa fa-home" aria-hidden="true"></i> Home
						
						</a>
                        <a href="javascript:void(0)" className="font-bold text-xl my-5 ">
					
							<i className="fas fa-chart-bar"></i> Buses
						
						</a>
                        <a href="javascript:void(0)" className="font-bold text-xl my-5 ">
						
							<i className="fas fa-bell"></i> Trips
						
						</a>
                        <a href="javascript:void(0)" className="font-bold text-xl my-5 ">
					
							<i className="fa fa-user" aria-hidden="true"></i> Users
						
						</a>
                        <a href="javascript:void(0)" className="font-bold text-xl my-5 ">
						
							<i className="fa fa-address-book" aria-hidden="true"></i> Reserved
						
						</a>
                        <a href="javascript:void(0)" className="font-bold text-xl my-5 " >
							<i className="fa fa-sign-out" aria-hidden="true"></i> Logout
						</a> 
					</div>
				</div>
			</div>

			<transition name="fade">
				<div className="flex-1 bg-gray-400 bg-opacity-75 active:outline-none z-10">
		       </div>
			</transition>
		</div>
        </>
    )
}

export default sidebar;