import React from 'react';
import Header from '../layouts/Header';
import DomainContent from './DomainContent';

function Domain(props){
    //console.log(props.match.params.domain_name)
    const pageLoc = "Practice > "+props.match.params.domain_name.replace(/\b(\w)/g, k => k.toUpperCase())
    const pageName = props.match.params.domain_name.replace(/\b(\w)/g, k => k.toUpperCase())
    return(
        <div>  
            <Header pageLoc={pageLoc} pageName={pageName}/>
            <DomainContent />
        </div>
    )
}
export default Domain;