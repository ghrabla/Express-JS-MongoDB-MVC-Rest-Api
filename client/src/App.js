import React from "react";
import {Routes, Route } from "react-router-dom";
import Navbar from "./pages/components/navbar";
import Footer from "./pages/components/footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Trip from "./pages/Trip";
import Bus from "./pages/Bus";
import User from "./pages/User";
import Reservation from "./pages/Reservation";
import Loginadmin from "./pages/Loginadmin";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Loginadmin' element={<Loginadmin/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Trip' element={<Trip/>}/>
          <Route path='/Bus' element={<Bus/>}/>
          <Route path='/User' element={<User/>}/>
          <Route path='/Reservation' element={<Reservation/>}/>
        </Routes>
      <Footer/>
    </div>
    </>
  );
}

export default App;
