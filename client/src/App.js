import React from "react";
import Route from "./Route";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.js";
import Footer from "./components/footer/Footer";

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
