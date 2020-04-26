import React from 'react';
import '../../styles/Tabs.css';

function ChallengeProblem(props){
    const {challengeDetail} = props;
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }


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
                                <div className="card-content" >
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, saepe corrupti eaque architecto excepturi ipsa, ullam possimus provident accusamus animi nihil laudantium, optio assumenda rem enim eveniet alias quia doloribus!</p>
                                    <br></br>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, saepe corrupti eaque architecto excepturi ipsa, ullam possimus provident accusamus animi nihil laudantium, optio assumenda rem enim eveniet alias quia doloribus!</p>
                                    <br></br>
                                    <div className="divider"></div>
                                    <br></br>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, saepe corrupti eaque architecto excepturi ipsa, ullam possimus provident accusamus animi nihil laudantium, optio assumenda rem enim eveniet alias quia doloribus!</p>
                                    <br></br>
                                    <p><b>Example:</b></p>
                                    <br></br>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, saepe corrupti eaque architecto excepturi ipsa, ullam possimus provident accusamus animi nihil laudantium, optio assumenda rem enim eveniet alias quia doloribus!</p>
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
                                            <input className="with-gap" name="group1" type="radio" id="option-1"/>
                                            <span>Option 1</span>
                                        </label>
                                        </p>
                                        <p>
                                        <label className="black-text">
                                            <input className="with-gap" name="group1" type="radio" id="option-2" />
                                            <span>Option 2</span>
                                        </label>
                                        </p>
                                        <p>
                                        <label className="black-text">
                                            <input className="with-gap" name="group1" type="radio" id="option-3"/>
                                            <span>Option 3</span>
                                        </label>
                                        </p>
                                        <p>
                                        <label className="black-text">
                                            <input className="with-gap" name="group1" type="radio" id="option-4"/>
                                            <span>Option 4</span>
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

export default ChallengeProblem;