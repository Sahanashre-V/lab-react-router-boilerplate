import React from "react";
import {Routes,Route} from "react-router-dom";
import Contact from "./Component/Contact";
import About from "./Component/About";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";

function App(){
  return(
    <div>
      <Navbar/>
      <Routes>
      <Route exact path="/Contact" element={<Contact />} />
      <Route exact path="/About" element={<About />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/*" element={<h1>Page not found 404 error</h1>}/>
      </Routes>

    </div>
  )
}

export default App