import React from 'react';
import ChallengePane from '../layouts/ChallengePane';
import SidePane from '../layouts/SidePane';
import Header from '../layouts/Header';

function SubDomainPage(props){
    const pageLoc = "Practice > "+props.match.params.domain_name.replace(/\b(\w)/g, k => k.toUpperCase())+" > "+props.match.params.subdomain_name.replace(/\b(\w)/g, k => k.toUpperCase())
    const pageName = props.match.params.subdomain_name.replace(/\b(\w)/g, k => k.toUpperCase()).replace(/_/g,' ')
    return (
        <div>  
            <Header pageLoc={pageLoc} pageName={pageName.replace(/-/g,' ')}/>
            <div className="container">
                <div className="row">
                    <ChallengePane />
                    <SidePane/>
                </div>
            </div>
        </div>
    )
}

export default SubDomainPage;