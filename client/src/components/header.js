import React from "react"


const header = () => {
    return(
     <div className="text-center text-white bg-cover bg-no-repeat bg-fixed h-screen" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/image.jpg'})`}}>
        <div>
        <h1 className="text-2xl pt-20">let's take you to your</h1>
        <h1 className="text-4xl font-bold ">OWN DREAM CITY TOO MUCH FAST</h1>
        </div>
        <div>

        </div>
     </div>
    )
}

export default header