import React from "react";
import {Routes, Route } from "react-router-dom";
import Navbar from "./pages/components/navbar";
import Footer from "./pages/components/footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Trip from "./pages/Trip";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Trip' element={<Trip/>}/>
        </Routes>
      <Footer/>
    </div>
    </>
  );
}

export default App;
