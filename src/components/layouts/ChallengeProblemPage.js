import React,{useEffect} from 'react';
import M from 'materialize-css';
import Header from './Header';
import ChallengeProblem from './ChallengeProblem';
import {connect} from 'react-redux';

function ChallengeProblemPage(props){
    const {challengesList} = props
    const challengeDetail = challengesList.find(x => x.slug === props.match.params.challenge_slug)
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

const mapStateToProps = (state) => {
    return {
        challengesList: state.quant.challenges
    }
}

export default connect(mapStateToProps)(ChallengeProblemPage);