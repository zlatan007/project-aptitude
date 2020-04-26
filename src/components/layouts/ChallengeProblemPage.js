import React,{useEffect} from 'react';
import M from 'materialize-css';
import Header from './Header';
import ChallengeProblem from './ChallengeProblem';

function ChallengeProblemPage(){
    
    const challengeDetail = {
        "difficulty": "0.9",
        "difficulty_name" : "Easy",
        "challenge_title": "Challenge Title",
        "max_score" : "10",
        "success_rate": "90",
        "status" : "unsolved",
        "slug": "challenge-1",
        "category": "Quantitative"
    }
    const pageLoc = "Practice > "+challengeDetail.category + " > "+challengeDetail.challenge_title;
    const pageName = challengeDetail.challenge_title;

    useEffect(() => {
        let el = document.querySelector('.tabs');
        var instance = M.Tabs.init(el, {});
    }, [])

    return (
        <div>
            <Header pageLoc={pageLoc} pageName={pageName} />
            <ChallengeProblem challengeDetail={challengeDetail}/>
        </div>
    )
}

export default ChallengeProblemPage;