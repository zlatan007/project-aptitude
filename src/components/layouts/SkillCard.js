import React from 'react';
import '../../styles/skill-card.css';
import {NavLink} from 'react-router-dom';
import Badges from './Badges';

function SkillCard(){
    const styles = {
        width: "25%"
    };
    const title_style = {
        "font": "700 30px Segoe UI",
        "letterSpacing": "2px"
    }
    return(
        <div className="col s12 m6 skill-card">
            <div className="card z-depth-2 hoverable">
                <div className="card-content grey-text text-darken-3">
                    <p className="grey-text">Language Profficiency</p>
                    <br></br>
                    <span className="card-title" style={title_style}>Python</span>
                    <div className="progress">
                        <div className="determinate" style={styles}></div>
                    </div>
                    <p>25%<span className="grey-text"> (29/115 Challenges Solved)</span></p>
                    <br></br>
                    <NavLink to="#" className="waves-effect blue darken-3 waves-light btn-large">Continue Practice</NavLink>
                    <Badges/>
                </div>
            </div>
        </div>
    )
}

export default SkillCard;