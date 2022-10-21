import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Offer from "./components/offer";
import Service from "./components/service";
import Footer from "./components/footer";
import Login from "./components/Login";

function App() {
  return (
    <>
    <BrowserRouter>
   
        <Routes>
        <Route path='/Login' element={<Login/>}/>
          {/* <Route /> */}
        </Routes>
        <div className="App">
      <Navbar/>
      <Header/>
      <Offer/>
      <Service/>
      <Footer/>
    </div>
      </BrowserRouter>
    </>
  );
}

export default App;
