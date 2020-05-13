import React,{ useState, useEffect} from 'react';
import ChallengeTile from '../layouts/ChallengeTile';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {getChallenges} from '../../store/actions/getChallengeAction';
import spinner from '../../assets/spin_loader.gif';

function ChallengeList(props){
    var {getChallenges, challengesList} = props;
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

    useEffect(() => {
        async function getData(){
            await setTimeout(async () => {
                
                await getChallenges(collection);
                
                console.log('removing spinner'); 
                setloading(false);
            }, 100);
        }
        getData();
    }, [collection, getChallenges])

    if(loading){
        return (
            <div className="center">
                <img src={spinner} height="60" width="60" alt="spinner"/>
            </div>
        )
    }else{
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
    
}
const mapStateToProps = (state) => {
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