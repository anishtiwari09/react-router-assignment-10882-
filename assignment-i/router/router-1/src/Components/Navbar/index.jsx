import React from 'react'
import {Link} from "react-router-dom"
function NavBar() {
  return (
    <div style={{display:"flex",gap:"1rem",justifyContent:"center", margin:"1rem"}}>
      <div><Link to="/">Home</Link></div>
      <div><Link to="/contact">Contact</Link></div>
      <div><Link to="/about-us">About Us</Link></div>
      <div><Link to="/services">Services</Link></div>
      <div><Link to="/login">Login</Link></div>
    </div>
  )
}

export default NavBar
