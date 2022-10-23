const sidebar = () =>{
    return(
        <>
          
		<div class="">
			<div class="absolute flex top-0 h-screen z-20" >
				<button class="w-12 h-10 mt-5  rounded text-white bg-gray-600 text-center focus:outline-none hover:bg-gray-500 transition-color duration-300">
					<span class="block transform origin-center font-bold">
						<i class="fa fa-bars" aria-hidden="true"></i>
					</span>
				</button>
				<div  class="transition-all duration-700 bg-white overflow-hidden flex items-center justify-center" 
				
				id="sidebar" >
					<div class="w-48 ml-5 text-blue-900	 flex flex-col">
                        <a href="javascript:void(0)" class="font-bold text-xl my-5 ">
					
							<i class="fa fa-home" aria-hidden="true"></i> Home
						
						</a>
                        <a href="javascript:void(0)" class="font-bold text-xl my-5 ">
					
							<i class="fas fa-chart-bar"></i> Buses
						
						</a>
                        <a href="javascript:void(0)" class="font-bold text-xl my-5 ">
						
							<i class="fas fa-bell"></i> Trips
						
						</a>
                        <a href="javascript:void(0)" class="font-bold text-xl my-5 ">
					
							<i class="fa fa-user" aria-hidden="true"></i> Users
						
						</a>
                        <a href="javascript:void(0)" class="font-bold text-xl my-5 ">
						
							<i class="fa fa-address-book" aria-hidden="true"></i> Reserved
						
						</a>
                        <a href="javascript:void(0)" class="font-bold text-xl my-5 " >
							<i class="fa fa-sign-out" aria-hidden="true"></i> Logout
						</a> 
					</div>
				</div>
			</div>

			<transition name="fade">
				<div class="flex-1 bg-gray-400 bg-opacity-75 active:outline-none z-10">
		       </div>
			</transition>
		</div>
        </>
    )
}

export default sidebar;