import React from "react";
import {Routes, Route } from "react-router-dom";
import Navbar from "./pages/components/navbar";
import Footer from "./pages/components/footer";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      <Footer/>
    </div>
    </>
  );
}

export default App;
