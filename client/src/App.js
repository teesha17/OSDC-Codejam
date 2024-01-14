import React , {useState,useEffect} from "react";
import Route from "./Route";
import { BrowserRouter, useNavigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.js";
import Footer from "./components/footer/Footer";
import Loading from "./components/loading/Loading.js";
function App() {
  
  
  return (
    <>
      <BrowserRouter>
    
        <Route />
     
      </BrowserRouter>
    </>
  );
}

export default App;

