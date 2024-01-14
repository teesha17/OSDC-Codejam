import React , {useState,useEffect} from "react";
import Route from "./Route";
import { BrowserRouter, useNavigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.js";
import Footer from "./components/footer/Footer";
import { app } from "./config/firebaseconfig.js";
import { getAuth } from "firebase/auth";
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Route />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
