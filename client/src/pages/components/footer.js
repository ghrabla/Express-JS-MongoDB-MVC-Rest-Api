const footer = () => {
    return(
     <div className="text-white bg-cyan-600">
         <div className=" flex justify-center gap-20 py-10 uppercase">
            <a href="#" className="font-bold">home</a>
            <a href="#" className="font-bold px-8 border-y border-solid border-2">register</a>
            <a href="#" className="font-bold">login</a>
         </div>
         <div>
             <p className="font-bold text-center underline">this is last version of book now Copyright © 2022 kamal ghrabla Labs Inc.</p>
             <div className="flex justify-center gap-10 text-3xl py-5">
             <a href="#"><i class="fa-brands fa-facebook"></i></a>
             <a href="#"><i class="fa-brands fa-instagram"></i></a>
             <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
             <a href="#"><i class="fa-brands fa-twitter"></i></a>
             <a href="#"><i class="fa fa-telegram" aria-hidden="true"></i></a>
             </div>
         </div>
     </div>
    )
}

export default footer