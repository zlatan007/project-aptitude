import React from 'react';
import ChallengePane from '../layouts/ChallengePane';
import FilterPane from '../layouts/FilterPane';

function DomainContent(){
    return(
        <div className="container">
            <div className="row">
                <ChallengePane/>
                <FilterPane/>
            </div>
        </div>
    )
}

export default DomainContent;