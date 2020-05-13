import React from 'react';

function Domain(props){
    const {domainDetail} = props;
    var icon = domainDetail.icon;
    return (
            <div className="col s12 m4 domain-list-card">
                <div className="hoverable">
                <a className="black-text" href={domainDetail.to}>
                    <div className="card-content valign-wrapper">
                        <img src={require("../../assets/domain-icons/"+icon)} alt="" width="27" height="27"></img>
                        <span style={{paddingLeft: "1rem"}}><b> {domainDetail.domain_name}</b></span>
                    </div>
                </a>
                </div>
            </div>
    )
}

export default Domain;