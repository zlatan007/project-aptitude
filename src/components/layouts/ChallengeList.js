import React,{ useState, useEffect} from 'react';
import ChallengeTile from '../layouts/ChallengeTile';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {getChallenges} from '../../store/actions/getChallengeAction';
import spinner from '../../assets/spin_loader.gif';
import { firestoreConnect } from 'react-redux-firebase';

function ChallengeList(props){
    var {challengesList} = props;
    // console.log(challengesList)
    // let collection = null;
    // const [loading, setloading] = useState(false)
    // collection = window.location.pathname.split('/')[3];

    // useEffect(() => {
    //     async function getData(){
    //         await setTimeout(async () => {
                
    //             await getChallenges(collection);
                
    //             console.log('removing spinner'); 
    //             setloading(false);
    //         }, 100);
    //     }
    //     getData();
    // }, [collection, getChallenges])

    // if(loading){
    //     return (
    //         <div className="center">
    //             <img src={spinner} height="60" width="60" alt="spinner"/>
    //         </div>
    //     )
    // }else{
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
    // console.log(window.location.pathname.split('/')[3])
    return {
        challengesList: state.firestore.ordered[window.location.pathname.split('/')[3]]
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getChallenges: (collection) => dispatch(getChallenges(collection))
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), firestoreConnect(() => [window.location.pathname.split('/')[3]]))(ChallengeList);