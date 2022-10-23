const Register = () =>{
    return(
        <>
           <div class="m-8 bg-gray"> 
        <div class="lg:flex flex-row-reverse">
            <div class="lg:w-1/2 xl:max-w-screen-sm">
                <div class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                    <h2 class="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold">S'inscrire</h2>
                    <div class="mt-12">
                        
                            <div>
                                <div class="text-sm font-bold text-gray-700 tracking-wide">complete Nom</div>
                                <input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="Adnane elgotabi" v-model="form.name" />
                               
                            </div>
                            <div class="mt-8">
                                <div class="text-sm font-bold text-gray-700 tracking-wide">Adresse Email </div>
                                <input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="mike@gmail.com" v-model="form.email" />
                              
                            </div>
                            <div class="mt-8">
                                <div class="flex justify-between items-center">
                                    <div class="text-sm font-bold text-gray-700 tracking-wide">
                                        mot de pass
                                    </div>
                                    
                                </div>
                                <input class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="Entre votre mot de pass" v-model="form.password" />
                               
                            </div>
                            <div class="mt-10">
                                <button class="bg-blue-700 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-blue-700
                                shadow-lg" >
                                    s'inscrire
                                </button>
                            </div>
                       
                        <div class="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                            Tu as un compte ?  <a class="cursor-pointer text-blue-700 hover:text-indigo-800">Connexion</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen">
                <div class="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
                    <img src="../assets/staticimg/20944201.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Register;