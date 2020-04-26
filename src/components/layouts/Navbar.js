import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import '../../styles/navbar.css';

function Navbar(){
    const baseColor = "blue";
    return (
        <nav className={"nav-wrapper "+baseColor+" darken-3"}>
            <div className="container">
                <Link to="/" className="brand-logo">Project A</Link>
                <SignedInLinks baseColor={baseColor}/>
                {/* <SignedOutLinks baseColor={baseColor}/> */}
            </div>
        </nav>
    )
}

export default Navbar;