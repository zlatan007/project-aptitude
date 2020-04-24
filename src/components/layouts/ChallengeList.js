import React from 'react';
import ChallengeTile from '../layouts/ChallengeTile';

function ChallengeList(){
    const titleTypeOne = {
        "difficulty": "0.9",
        "difficulty_name" : "Easy",
        "challenge_title": "Challenge Title",
        "max_score" : "10",
        "success_rate": "90",
        "status" : "unsolved"
    }
    const titleTypeTwo = {
        "difficulty": "1.5",
        "difficulty_name" : "Medium",
        "challenge_title": "Challenge Title",
        "max_score" : "20",
        "success_rate": "87.88",
        "status" : "solved"
    }
    const titleTypeThree = {
        "difficulty": "3.0",
        "difficulty_name" : "Hard",
        "challenge_title": "Challenge Title",
        "max_score" : "50",
        "success_rate": "57.88",
        "status" : "unsolved"
    }
    return(
        <div>
            <ChallengeTile challengeDetail={titleTypeTwo}/>
            <ChallengeTile challengeDetail={titleTypeOne}/>
            <ChallengeTile challengeDetail={titleTypeTwo}/>
            <ChallengeTile challengeDetail={titleTypeThree}/>
            <ChallengeTile challengeDetail={titleTypeTwo}/>
            <ChallengeTile challengeDetail={titleTypeOne}/>
            <ChallengeTile challengeDetail={titleTypeTwo}/>
            <ChallengeTile challengeDetail={titleTypeThree}/>
            <ChallengeTile challengeDetail={titleTypeTwo}/>
            <ChallengeTile challengeDetail={titleTypeOne}/>
            <ChallengeTile challengeDetail={titleTypeTwo}/>
            <ChallengeTile challengeDetail={titleTypeThree}/>
            <ChallengeTile challengeDetail={titleTypeTwo}/>
            <ChallengeTile challengeDetail={titleTypeOne}/>
            <ChallengeTile challengeDetail={titleTypeTwo}/>
            <ChallengeTile challengeDetail={titleTypeThree}/>
        </div>
    )
}

export default ChallengeList;