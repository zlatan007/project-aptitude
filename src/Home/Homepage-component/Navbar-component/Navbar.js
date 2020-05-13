import React from 'react';
import { Link } from 'react-router-dom'
// import LoginPage from './LoginPage';
// import SignupPage from './SignupPage';
// // import Dash from './Dash';
// import { connect } from 'react-redux'
// import Dashboard from '../../../components/dashboard/Dashboard';
// import {Redirect} from 'react-router-dom';



const Navbar = (props) => {
  //  const { authError,auth} = props;
  //  if (auth.uid)return <Redirect to="/dash"></Redirect>
   
  return (
    
    <div>
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <Link className="brand-logo" to="/dashboard">Aptistamper</Link>
        <ul className="right">
          <li><Link to ="/login">Login</Link></li>
          <li><Link to ="/signup">Signup</Link></li>
        </ul>
      </div>
    </nav>

    <div>
      {/* {links} */}
    </div>
     
    </div>
    
  )
}


//     const mapStateToProps = (state) => {
//   return{
//     authError: state.auth.authError,
//     auth: state.firebase.auth
//   }
// }
  

export default Navbar