import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import Modal from './modal';
import Modalone from './Modalone';

const Navbar = () => {
  return (
    <>
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <Link className="brand-logo" to="dashboard">Aptistamper</Link>
        <ul className="right">
          <li> <Modal/></li>
          <li> <Modalone/> </li>
        </ul>
      </div>
    </nav> 
   
    </>
  )
}

export default Navbar