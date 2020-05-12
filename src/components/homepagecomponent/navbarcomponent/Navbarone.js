import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import LoginPage from '../authpages/LoginPage';
import SignupPage from '../authpages/SignupPage';
// import Dash from './Dash';
import { connect } from 'react-redux'
import '../../../styles/navbarone.css'
import {Redirect} from 'react-router-dom';



const Navbarone = (props) => {
  
  return (

    
    <div>
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <Link className="brand-logo" to="/dashboard">Aptistamper</Link>
        <ul className="right">
          <li ><Link  to ="/login">Login</Link></li>
          <li><Link to ="/signup">Signup</Link></li>
        </ul>
      </div>
    </nav>

    
     
    </div>
    
  )
}


  

export default Navbarone