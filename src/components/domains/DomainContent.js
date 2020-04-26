import React, {useEffect} from 'react';
import ChallengePane from '../layouts/ChallengePane';
import FilterPane from '../layouts/FilterPane';

function DomainContent(){
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
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