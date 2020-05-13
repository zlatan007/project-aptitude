import React,{useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import M from 'materialize-css';
import { connect } from 'react-redux'
import {signOut} from '../../store/actions/authActions'


function SignedInLinks(props){
    const {authData,baseColor} = props;

    useEffect(() => {
        var dropdown_elems = document.querySelectorAll('.dropdown-trigger');
        var dropdown_options = {
            'closeOnClick': true,
            'coverTrigger': false
        }
        var instances = M.Dropdown.init(dropdown_elems, dropdown_options); // eslint-disable-line no-unused-vars
        var sidebar_elems = document.querySelectorAll('.sidenav');
        var sidebar_options = {

        }
        var instances = M.Sidenav.init(sidebar_elems, sidebar_options); // eslint-disable-line no-redeclare
    },[])

  return (
    <div>
        <Link to="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
        <ul id="profile-dropdown" className="dropdown-content">
            <li><Link to="#">Profile</Link></li>
            <li className="divider"></li>
            <li><Link to="/home" onClick={props.signOut}>Logout</Link></li>
        </ul>
        <ul className={"sidenav "+baseColor+" darken-3"} id="mobile-demo">
            <li><br></br></li>
            <li><div className="center"><NavLink className="btn-large btn-floating pink lighten-1 waves-effect center" to="/">AK</NavLink></div></li>
            <li><h5 className="center">Anand Kumar</h5></li>
            <li><br></br></li>
            <li><NavLink to='/dashboard'>Practice</NavLink></li>
            <li><NavLink to='/leaderboard'>Leaderboard</NavLink></li>
            <li><NavLink to='#'>Notifications</NavLink></li>
            <li><NavLink to='#'>Profile</NavLink></li>
            <li><NavLink to='#'>Log Out</NavLink></li>
        </ul>
        {/* <ul className="left hide-on-med-and-down">
            <li><NavLink to='/'>Practice</NavLink></li>
            <li><NavLink to='/'>Leaderboard</NavLink></li>
        </ul> */}
        <ul className="right hide-on-med-and-down">
            <li>
                <nav className="z-depth-0">
                    <div className={"nav-wrapper "+baseColor+" darken-2 "}>
                        <form>
                        <div className="input-field">
                            <input id="search" type="search" placeholder="Search" required/>
                            <label className="label-icon" htmlFor=""><i className="material-icons">search</i></label>
                            <i className={"material-icons "+baseColor+"-text"}>close</i>
                        </div>
                        </form>
                    </div>
                </nav>
            </li>
            <li><NavLink to='/dashboard'>Practice</NavLink></li>
            <li><NavLink to='/leaderboard'>Leaderboard</NavLink></li>
            <li><NavLink to='#'>Notifications</NavLink></li>
            <li><NavLink className="dropdown-trigger btn btn-floating pink lighten-1" to="/" data-target="profile-dropdown">{authData.email.toString().slice(0,1)}<i className="material-icons right">arrow_drop_down</i></NavLink></li>
        </ul>
    </div>
  )
}


const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
}
  
export default connect(null,mapDispatchToProps)(SignedInLinks)
