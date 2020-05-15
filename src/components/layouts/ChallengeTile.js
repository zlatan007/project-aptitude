import React,{useEffect, useState} from 'react';
import M from 'materialize-css';

function ChallengeTile(props){
    const {challengeDetail} = props;
    useEffect(() => {
        var elems = document.querySelectorAll('.collapsible');
        var options = {
        }
        var instances = M.Collapsible.init(elems, options); // eslint-disable-line no-unused-vars
    },[])

    const [isActive, setIsActive] = useState(false)

    const handleClick = (e) => {
        // console.log(e.currentTarget.getAttribute('data-value'));
        setIsActive(!isActive);
        
    }

    
    return(
            <div className="card">
                <div className="card-content row" >
                    <div className="col s12 m12">
                        <p className="card-title"><b>Question: </b></p>
                        <p className="black-text" dangerouslySetInnerHTML={{__html:challengeDetail.question_html}}></p>
                    </div>
                    <div className="col s12 m12" style={{marginTop: 50}}>
                        <ul className="collection">
                            <a href="#!" className={`collection-item ${isActive ? (challengeDetail.option_1 === challengeDetail.answer ? 'green black-text' : 'red black-text') : 'blue-text'}`}  onClick={handleClick} data-value={challengeDetail.option_1} ><b>{challengeDetail.option_1}</b></a>
                            <a href="#!" className={`collection-item ${isActive ? (challengeDetail.option_2 === challengeDetail.answer ? 'green black-text' : 'red black-text') : 'blue-text'}`} onClick={handleClick} data-value={challengeDetail.option_2} ><b>{challengeDetail.option_2}</b></a>
                            <a href="#!" className={`collection-item ${isActive ? (challengeDetail.option_3 === challengeDetail.answer ? 'green black-text' : 'red black-text') : 'blue-text'}`} onClick={handleClick} data-value={challengeDetail.option_3} ><b>{challengeDetail.option_3}</b></a>
                            <a href="#!" className={`collection-item ${isActive ? (challengeDetail.option_4 === challengeDetail.answer ? 'green black-text' : 'red black-text') : 'blue-text'}`} onClick={handleClick} data-value={challengeDetail.option_4} ><b>{challengeDetail.option_4}</b></a>
                        </ul>
                    </div>
                    <ul className="collapsible z-depth-0" style={{border: 0}}>
                        <li>
                            <div className="collapsible-header"><i className="material-icons">question_answer</i>Show Explanation</div>
                            <div className="collapsible-body" dangerouslySetInnerHTML={{__html:challengeDetail.explanation_html}}>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
    )
}

export default ChallengeTile;