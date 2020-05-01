import React,{ useState, useEffect} from 'react';
import ChallengeTile from '../layouts/ChallengeTile';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {getChallenges} from '../../store/actions/getChallengeAction';
import loader from '../../assets/spin_loader.gif';

function ChallengeList(props){
    var {challengesList} = props;
    let collection = null;
    const [loading, setloading] = useState(true)
    switch(window.location.pathname.split('/')[2]){
        case 'quantitative-data-interpretation':
            collection = 'challenges-QA-DI';
            break;
        case 'non-verbal-reasoning':
            collection = 'challenges-NVR';
            break;
        case 'verbal-reasoning-mental-ability':
            collection = 'challenges-VR-MA';
            break;
        case 'quantitative-arithmetic-ability':
            collection = 'challenges-QA-AA';
            break;
        case 'verbal-reasoning-logical-deduction':
            collection = 'challenges-VR-LD';
            break;
        default:
            collection = null;
    }
    // console.log(collection)
    useEffect(() => {
        props.getChallenges(collection)
        // console.log("challenge: ",ChallengeList)
        setloading(false)
    }, [])


    return(
        <div>
            {challengesList && challengesList.map(challenge => {
                return(
                    <ChallengeTile challengeDetail={challenge} key={challenge.slug}/>
                )
            })}
            {loading && loader}
        </div>
    )
}
const mapStateToProps = (state) => {
    // console.log(state)
    return {
        challengesList: state.getChallenge.challenges
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getChallenges: (collection) => dispatch(getChallenges(collection))
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(ChallengeList);