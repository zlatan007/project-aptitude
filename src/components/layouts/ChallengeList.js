import React from 'react';
import ChallengeTile from '../layouts/ChallengeTile';
import {connect} from 'react-redux';

function ChallengeList(props){
    const {challengesList} = props
    // console.log(challengesList[0])
    return(
        <div>
            <ChallengeTile challengeDetail={challengesList[0]}/>
            <ChallengeTile challengeDetail={challengesList[1]}/>
            <ChallengeTile challengeDetail={challengesList[2]}/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        challengesList: state.quant.challenges
    }
}
export default connect(mapStateToProps)(ChallengeList);