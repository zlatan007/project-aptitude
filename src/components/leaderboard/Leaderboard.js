import React from 'react';
import Header from '../layouts/Header';

function Leaderboard(props) {
    const pageFunc = "Leaderboard";
    const pageName = "Leaderboard";
    return(
        <div className="dashboard conatainer">
            <Header pageFunc={pageFunc} pageName={pageName}/>
            <div className="dashboard panel">

            </div>
        </div>
    )
}

export default Leaderboard;