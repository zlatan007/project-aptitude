import React from 'react';
import ChallengeList from './ChallengeList';

function ChallengePane(){
    return(
        <div className="col s12 m9" style={{"paddingTop":"3rem"}}>
            {/* <RecommendedChallenge /> */}
            <ChallengeList/>
        </div>
    )
}

export default ChallengePane;