import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import '../../styles/navbar.css';
import siteLogo from '../../assets/site-logo.ico';

function Navbar(){
    const baseColor = "blue";
    return (
        <nav className={"nav-wrapper "+baseColor+" darken-3"}>
            <div className="container">
                <Link to="/" className="brand-logo" style={{"display":"flex"}}> <img src={siteLogo} height="58" width="58"/><span style={{"fontFamily":"Julius Sans One","fontSize":"25px"}}> AptiStamper</span></Link>
                <SignedInLinks baseColor={baseColor}/>
                {/* <SignedOutLinks baseColor={baseColor}/> */}
            </div>
        </nav>
    )
}

export default Navbar;