import React from 'react';
import {NavLink} from 'react-router-dom';

function ChallengeTile(props){
    const {challengeDetail} = props
    const getDifficultyColor = (difficulty) =>{
        if(difficulty === "Easy"){
            return "green"
        }
        else if(difficulty === "Medium"){
            return "orange"
        }
        else if (difficulty === "Hard"){
            return "red"
        }
        else{
            return "grey"
        }
    }
    const getButtonText = (status) => {
        if(status === "solved"){
            return (
                <div className="valign-wrapper center" style={{"paddingLeft":"33%"}}>
                    <span>Solved</span><i className="material-icons">check_circle</i>
                </div>
            )
        }
        else{
            return <span className="center" style={{"paddingLeft":"25%"}}>Solve Challenge</span>
        }
    }

    return(
        <NavLink to={"/challenge/"+challengeDetail.slug} className="black-text">
            <div className="card hoverable">
                <div className="card-content row" >
                    <div className="col s12 m9">
                        <span className="card-title"><b>{challengeDetail.challenge_title}</b></span>
                        <p className="grey-text"><span className={getDifficultyColor(challengeDetail.difficulty_name)+"-text"}>{challengeDetail.difficulty_name}</span>, Max Score: {challengeDetail.max_score}, Success Rate: {challengeDetail.success_rate}%</p>
                    </div>
                    <div className="col s12 m3">
                        <div className="white blue-text text-darken-3 valign-wrapper" style={{"width":"190px","height":"45px","border":"1px solid #1565c0"}}>{getButtonText(challengeDetail.status)}</div>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default ChallengeTile;