import React from 'react';
import '../../styles/Header.css';

function Header(props){
    const {pageLoc, pageName} = props
    return(
        <div>
            <div className="nav-wrapper header white valign-wrapper ">
            <div className="container ">
                <div className="left">
                    <h6 className="grey-text text-lighten-1">{pageLoc}</h6>
                    <span><h5 className="black-text"><b>{pageName}</b></h5> </span>
                    <h4></h4>
                </div>
                <div className="right">
                    <br></br>
                    <h6 className="grey-text">Your Score: </h6>
                </div>
                
                
            </div>
            </div>
        </div>
    )
}

export default Header;