import React from 'react';
import '../../styles/Header.css';

function Header(props){
    const {pageLoc, pageName} = props
    return(
        <div>
            <div className="nav-wrapper header white valign-wrapper ">
            <div className="container ">
                <h6 className="grey-text text-lighten-1">{pageLoc}</h6>
                <h5 className="black-text"><b>{pageName}</b></h5>
                <h4></h4>
            </div>
            </div>
        </div>
    )
}

export default Header;