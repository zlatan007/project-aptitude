import React,{useState, useEffect} from 'react';
import M from 'materialize-css';
import Header from './Header';
import ChallengeProblem from './ChallengeProblem';
import {connect, useSelector} from 'react-redux';
import {getProblem} from '../../store/actions/getProblemAction';
import { useFirestoreConnect } from 'react-redux-firebase';

function ChallengeProblemPage(props){
    // console.log(window.location.pathname.split('/')[2]);
    const problemInfo = getProblem(window.location.pathname.split('/')[2])

    const [loading, setloading] = useState(true)

    if(loading === false){
        const {challengesList} = props
        const challengeDetail = challengesList.find(x => x.slug === props.match.params.challenge_slug)
        var pageLoc = "Practice > "+challengeDetail.category + " > "+challengeDetail.challenge_title;
        var pageName = challengeDetail.challenge_title;
    }else{
        var pageLoc = '';
        var pageName = '';
        var challengeDetail = ''
    }

    useFirestoreConnect([{
        collection: problemInfo.collection,
        doc: problemInfo.document
    }])

    // useEffect(() => {
    //     let el = document.querySelector('.tabs');
    //     var instance = M.Tabs.init(el, {});
        
    // }, [])

    return (
        <div>
            <Header pageLoc={pageLoc} pageName={pageName} />
            {/* <ChallengeProblem challengeDetail={challengeDetail}/> */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        challengesList: state.getChallenge.challenges
    }
}

export default connect(mapStateToProps)(ChallengeProblemPage);