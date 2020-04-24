import React from 'react';
import '../../styles/DomainList.css';
import Domain from '../layouts/DomainCard';

function DomainList(props){
    // const {domainData} = props
    const domainData = {
        domain_count: 8,
        domain_list: [
            {
                data_attr1: "aptitude",
                data_attr2: "quantitative",
                domain_name: "Quantitative",
                icon: "quantitative-icon.png",
                to: "/domain/quantitative"
            }
        ]
    }
    const CreateDomainTiles = () =>{
        var domains = []
        for(var i = 1; i <= domainData.domain_count; i++){
            domains.push(<Domain key={i} domainDetail={domainData.domain_list[0]}/>)
        }
        return domains;
    }
    return(
        <div className="domain-list">
            <div className="card">
                <div className="domain-list-card">
                    <div className="row domain-list-card">
                        {CreateDomainTiles()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DomainList;