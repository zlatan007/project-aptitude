import React, {useState} from 'react';
import '../../styles/Tabs.css';
import {submitChallenge} from '../../store/actions/challengeActions';
import {connect} from 'react-redux';
import {uploadChallenge} from '../../store/actions/uploadChallengeActions';

function ChallengeProblem(props){
    const {challengeDetail} = props;

    const [userAnswer, setUserAnswer] = useState(null);

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

    const handleChange = (e) => {
        setUserAnswer(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e);
        if(userAnswer !== null){
            props.submitChallenge(challengeDetail, userAnswer);
            // props.uploadChallenge();
        }
    }

    if(challengeDetail === undefined){
        return (
            <div>

            </div>
        )
    }else{
    return(
        <div className="container">
                <div className = "row" style={{"paddingTop":"2rem","marginBottom":"0"}}>
                    <div className = "col s12">
                        <ul className = "tabs transparent" style={{"zIndex":"1"}}>
                            <li className = "tab col s3" ><a href = "#problem"> <b>Problem</b></a></li>
                            <li className = "tab col s3"><a href = "#submissions"><b>Submissions</b></a></li>
                        </ul>
                    </div>
                </div>
                <div id="problem">
                    <div className="row">
                        <div  className = "col s12 m9">
                            <div className="card z-depth-1" style={{"marginTop":"0px"}}>
                                <div className="card-content" dangerouslySetInnerHTML={{__html:challengeDetail.challenge_statement}}>
                                    
                                </div>
                            </div>
                        </div>
                        <div className = "col s0 m3 hide-on-small-and-down">
                            <div className="">
                                <div className="left grey-text">
                                    <p className="">Difficulty</p>
                                    <p className="">Max Score</p>
                                </div>
                                <div className="right">
                                    <p className={getDifficultyColor(challengeDetail.difficulty_name)+"-text"}>{challengeDetail.difficulty_name}</p>
                                    <p className="">{challengeDetail.max_score}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 m9">
                            <div className="card" >
                                <div className="card-content">
                                    <p className="card-title" style={{"font": "400 20px Segeo UI"}}><b>Choose the correct option:</b></p>
                                    <br></br>
                                    <form onSubmit={handleSubmit}>
                                        <p>
                                        <label className="black-text">
                                            <input className="with-gap" name="group1" type="radio" id="option-1" value={challengeDetail.options.option1} onChange={handleChange}/>
                                            <span>A) {challengeDetail.options.option1}</span>
                                        </label>
                                        </p>
                                        <p>
                                        <label className="black-text">
                                            <input className="with-gap" name="group1" type="radio" id="option-2" value={challengeDetail.options.option2} onChange={handleChange}/>
                                            <span>B) {challengeDetail.options.option2}</span>
                                        </label>
                                        </p>
                                        <p>
                                        <label className="black-text">
                                            <input className="with-gap" name="group1" type="radio" id="option-3" value={challengeDetail.options.option3} onChange={handleChange}/>
                                            <span>C) {challengeDetail.options.option3}</span>
                                        </label>
                                        </p>
                                        <p>
                                        <label className="black-text">
                                            <input className="with-gap" name="group1" type="radio" id="option-4" value={challengeDetail.options.option4} onChange={handleChange}/>
                                            <span>D) {challengeDetail.options.option4}</span>
                                        </label>
                                        </p>
                                        <div className="right-align">
                                            <button className="btn waves-effect waves-light" type="submit">Submit
                                                <i className="material-icons right">send</i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div id="submissions" className="col s12 m9">
                        <div className="card" style={{"marginTop":"0px"}}>
                            <div className="card-content">
                                <p>Submissions</p>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
    )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        submitChallenge: (challengeDetail, answer) => dispatch(submitChallenge(challengeDetail, answer)),
        uploadChallenge: () => dispatch(uploadChallenge())
    }
}

export default connect(null, mapDispatchToProps)(ChallengeProblem);