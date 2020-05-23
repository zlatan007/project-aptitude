import React from 'react';
import ChallengeTile from '../layouts/ChallengeTile';
import {connect} from 'react-redux';
import {compose} from 'redux';
import spinner from '../../assets/spin_loader.gif';
import { firestoreConnect } from 'react-redux-firebase';

function ChallengeList(props){
    var {challengesList} = props;
    return(
        <div>
            {challengesList && challengesList.map(challenge => {
                return(
                    <ChallengeTile challengeDetail={challenge} key={challenge.slug}/>
                )
            })}
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        challengesList: state.firestore.ordered[window.location.pathname.split('/')[3]]
    }
}


export default compose(connect(mapStateToProps), firestoreConnect((state) => [{
        collection: window.location.pathname.split('/')[3],
        orderBy: ["slug", "asc"]
    }]
))(ChallengeList);