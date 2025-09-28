import React from "react"; 
import { Link } from "react-router-dom"; 

const Navbar = () => { 
 return ( 
  <nav style={{ padding: "10px", background: "#282c34", color: "#fff" }}> 
   <Link to="/diet" style={{ margin: "10px", color: "white" }}>Diet</Link> 
   <Link to="/running" style={{ margin: "10px", color: "white" }}>Running</Link> 
   <Link to="/wellness" style={{ margin: "10px", color: "white" }}>Wellness</Link> 
  </nav> 
 ); 
}; 

export default Navbar;
