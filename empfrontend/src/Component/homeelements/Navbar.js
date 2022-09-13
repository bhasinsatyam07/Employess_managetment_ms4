import React from 'react'
import '../homeelements/navbar.css'
import { Link } from 'react-router-dom'

 const Navbar = () => {
  return (
    <div>
        <ul className="navbar">
          <Link to="/">  <li id="li"><a>Home</a></li></Link>
          <Link to="/login"> <li id="li"><a>Login</a></li></Link> 
          <Link to="/register">  <li id="li"><a>Register</a></li></Link> 
          <Link to="/bill"><li id="li"><a>AdminBill manage</a></li></Link> 
          <Link to="/employess"><li id="li"><a>Admin employee manage</a></li></Link> 
        </ul>
    </div>
  )
}

export default Navbar