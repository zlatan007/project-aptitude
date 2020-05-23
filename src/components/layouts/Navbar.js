import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import '../../styles/navbar.css';
import siteLogo from '../../assets/site-logo.ico';
import { connect } from 'react-redux';

function Navbar(props){
    const baseColor = "blue";
    const { auth } = props;
    
    
    if (!auth.uid){
        return (
            <nav className={"nav-wrapper "+baseColor+" darken-3"}>
                <div className="container">
                    <Link to="/" className="brand-logo" style={{"display":"flex"}}> <img src={siteLogo} height="58" width="58" alt="site-logo"/><span style={{"fontFamily":"Julius Sans One","fontSize":"25px"}}> AptiStamper</span></Link>
                    {}
                    <SignedOutLinks baseColor={baseColor}/>
                    {/*<SignedInLinks baseColor={baseColor}/>*/}
                </div>
            </nav>
        )
    }else{
        return (
            <div class="navbar-fixed">
            <nav className={"nav-wrapper "+baseColor+" darken-3"}>
                <div className="container">
                    <Link to="/" className="brand-logo" style={{"display":"flex"}}> <img src={siteLogo} height="58" width="58" alt="site-logo"/><span style={{"fontFamily":"Julius Sans One","fontSize":"25px"}}> AptiStamper</span></Link>
                    <SignedInLinks baseColor={baseColor} authData={auth}/>
                </div>
            </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
      authError: state.auth.authError,
      auth: state.firebase.auth
    }
}

export default connect(mapStateToProps,null)(Navbar);