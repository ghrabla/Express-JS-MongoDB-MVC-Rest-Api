import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <>
    <BrowserRouter>
   
      <div className="App">
        <Routes>
        <Route path='/Login' element={<Login/>}/>
          {/* <Route /> */}
        </Routes>
     
    </div>
      </BrowserRouter>
    </>
  );
}

export default App;
