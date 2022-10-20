

const navbar = () => {
    return(
    <>
     <div className="bg-cyan-600 p-5 flex justify-around">
         <div>
             <img src={`${process.env.PUBLIC_URL}/images/TravelBook.svg`}  />
         </div>
         <div className="text-white font-bold">
             <span><i class="fa fa-envelope" aria-hidden="true"></i> kamalghrabla@gmail.com</span>
             <span className="ml-8"><i class="fa-solid fa-phone " ></i> 0625467800</span>
         </div>
     </div>
     <div className="flex justify-center gap-40 m-4 font-bold uppercase">
      <a href="#"><i class="fa fa-home" aria-hidden="true"></i> Home</a>
      <a href="#"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</a>
      <a href="#"><i class="fa-solid fa-registered"></i> Register</a>
      <a href="#"><i class="fa-solid fa-right-from-bracket"></i> Logout</a>
      <a href="#"><i class="fa-solid fa-cart-shopping"></i> Panier</a>
     </div>
     </>
    )
}

export default navbar