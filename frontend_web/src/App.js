import React from "react"; 
import { Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar"; 
import Diet from "./components/Diet"; 
import Running from "./components/Running"; 
import Wellness from "./components/Wellness"; 

function App() { 
 return ( 
  <div> 
   <Navbar /> 
   <Routes> 
    <Route path="/" element={<Diet />} /> 
    <Route path="/diet" element={<Diet />} /> 
    <Route path="/running" element={<Running />} /> 
    <Route path="/wellness" element={<Wellness />} /> 
    </Routes> 
  </div>
 ); 
} 

export default App;
