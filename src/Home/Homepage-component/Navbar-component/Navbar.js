import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';



const Navbar = () => {
  return (
    
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <Link className="brand-logo" to="/dashboard">Aptistamper</Link>
        <ul className="right">
          <li><Link to ="/login">Login</Link></li>
          <li><Link to ="/signup">Signup</Link></li>
          
        </ul>
      </div>
    </nav> 
   
    
  )
}

export default Navbar