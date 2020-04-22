import React from 'react';
import Header from '../layouts/Header';
import '../../styles/dashboard.css';
import SkillList from './SkillList';

function Dashboard(props) {
    const pageFunc = "Practice";
    const pageName = "Dashboard";
    return(
        <div className="dashboard">
            <Header pageFunc={pageFunc} pageName={pageName}/>
            <div className="container">
                <div className="row">
                    <h6><b>Your Skills</b></h6>
                    <SkillList />
                </div>
                <div className="row">
                    <h6><b>Skills Available For Practice</b></h6>
                </div>
                <div className="row">
                    <h6><b>Tutorials</b></h6>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;