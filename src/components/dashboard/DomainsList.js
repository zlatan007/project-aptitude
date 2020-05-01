import React from 'react';
import '../../styles/DomainList.css';
import DomainTile from '../layouts/DomainCard';

function DomainList(props){
    // const {domainData} = props
    const domainData = {
        domain_count: 5,
        domain_list: [
            {
                data_attr1: "Aptitude",
                data_attr2: "challenges-QA-DI",
                domain_name: "Quantitative - Data Interpretation",
                icon: "quantitative-icon.png",
                to: "/domain/quantitative-data-interpretation"
            },
            {
                data_attr1: "Aptitude",
                data_attr2: "challenges-NVR",
                domain_name: "Non-Verbal Reasoning",
                icon: "quantitative-icon.png",
                to: "/domain/non-verbal-reasoning"
            },
            {
                data_attr1: "Aptitude",
                data_attr2: "challenges-VR-MA",
                domain_name: "Verbal Reasoning - Mental Ability",
                icon: "quantitative-icon.png",
                to: "/domain/verbal-reasoning-mental-ability"
            },
            {
                data_attr1: "Aptitude",
                data_attr2: "challenges-QA-AA",
                domain_name: "Quantitative - Arithmetic Ability",
                icon: "quantitative-icon.png",
                to: "/domain/quantitative-arithmetic-ability"
            },
            {
                data_attr1: "Aptitude",
                data_attr2: "challenges-VR-LD",
                domain_name: "Verbal Reasoning - Logical Deduction",
                icon: "quantitative-icon.png",
                to: "/domain/verbal-reasoning-logical-deduction"
            },
        ]
    }
    const CreateDomainTiles = () =>{
        var domains = []
        for(var i = 1; i <= domainData.domain_count; i++){
            domains.push(<DomainTile key={i} domainDetail={domainData.domain_list[i-1]}/>)
        }
        return domains;
    }
    return(
        <div className="domain-list">
            <div className="card">
                <div className="card-content domain-list-card">
                    <div className="row domain-list-card">
                        {CreateDomainTiles()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DomainList;