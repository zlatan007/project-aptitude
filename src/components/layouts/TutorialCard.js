import React from 'react';
import {NavLink} from 'react-router-dom';

function TutorialCard(){
    const title_style = {
        "font": "600 20px Segoe UI",
        "letterSpacing": "2px"
    }
    return(
        <div className="col s12 m4 skill-card">
            <div className="card z-depth-2 hoverable">
                <div className="card-content grey-text text-darken-3">
                    <p className="grey-text">Tutorial</p>
                    <br></br>
                    <span className="card-title" style={title_style}>Learn Aptitude in 30 days</span>
                    <span className="grey-text">Learn quantitative, qualitative, verbal, reasoning and more.</span>
                    <br></br>
                    <br></br>
                    <NavLink to="/" className="blue-text text-darken-3">Start Tutorial</NavLink>
                </div>
            </div>
        </div>
    )
}

export default TutorialCard;