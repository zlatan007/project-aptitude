import React from 'react';
import ChallengeList from './ChallengeList';

function ChallengePane(props){
    const {collection} = props;
    return(
        <div className="col s12 m9" style={{"paddingTop":"3rem"}}>
            {/* <RecommendedChallenge /> */}
            <ChallengeList collection={collection}/>
        </div>
    )
}

export default ChallengePane;