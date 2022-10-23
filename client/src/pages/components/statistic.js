const statistic = () =>{
    return(
        <>
           <div class="">
        <div class="flex justify-around lg:flex-row flex-col">
            <div class="flex mt-10 px-7 py-5 rounded lg:mx-0 mx-10 lg:w-1/5" id="box-sta">
                <div class="text-purple-900">
                  <i class="fa fa-users fa-3x" aria-hidden="true"></i>
                </div>
                <div class="ml-4">
                  <span class="font-bold ">les utulisateurs</span> 
                  <p class="font-bold text-xl">11</p>
                </div>
            </div>
            <div class="flex mt-10 px-7 py-5 rounded lg:mx-0 mx-10 lg:w-1/5" id="box-sta">
                <div class="text-green-800">
                  <i class="fa-regular fa-message fa-3x"></i>
                </div>
                <div class="ml-4">
                  <span class="font-bold ">les messages</span> 
                  <p class="font-bold text-xl">30</p>
                </div>
            </div>
            <div class="flex mt-10 px-7 py-5 rounded lg:mx-0 mx-10 lg:w-1/5" id="box-sta">
                <div class="text-blue-800">
                  <i class="fa fa-product-hunt fa-3x" aria-hidden="true"></i>
                </div>
                <div class="ml-4">
                  <span class="font-bold ">les produits</span> 
                  <p class="font-bold text-xl">27</p>
                </div>
            </div>
            <div class="flex mt-10 px-7 py-5 rounded lg:mx-0 mx-10 lg:w-1/5" id="box-sta">
                <div class="text-red-800">
                    <i class="fa fa-first-order fa-3x" aria-hidden="true"></i>
                </div>
                <div class="ml-4">
                  <span class="font-bold ">les ordres</span> 
                  <p class="font-bold text-xl">12</p>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default statistic;