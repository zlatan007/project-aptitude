import React from 'react';
import Header from '../layouts/Header';

function Dashboard(props) {
    const pageFunc = "Practice";
    const pageName = "Dashboard";
    return(
        <div className="leaderboard conatainer">
            <Header pageFunc={pageFunc} pageName={pageName}/>
            <div className="dashboard panel">

            </div>
        </div>
    )
}

export default Dashboard;