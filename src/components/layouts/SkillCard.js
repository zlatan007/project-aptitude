import React from 'react';
import '../../styles/skill-card.css';
import {NavLink} from 'react-router-dom';
import Badges from './Badges';

function SkillCard(){
    const styles = {
        width: "80%"
    };
    const title_style = {
        "font": "700 30px Segoe UI",
        "letterSpacing": "2px"
    }
    return(
        <div className="col s12 m6 skill-card">
            <div className="card z-depth-2 hoverable">
                <div className="card-content grey-text text-darken-3">
                    <p className="grey-text">Quantitative Aptitude</p>
                    <br></br>
                    <span className="card-title" style={title_style}>Logarithms Test#1</span>
                    <div className="progress">
                        <div className="determinate" style={styles}></div>
                    </div>
                    <p>80%<span className="grey-text"> (8/10 Scored)</span></p>
                    <br></br>
                    <NavLink to="#" className="waves-effect blue darken-3 waves-light btn-large">Try Again</NavLink>
                    <Badges/>
                </div>
            </div>
        </div>
    )
}

export default SkillCard;