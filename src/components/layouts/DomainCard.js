import React from 'react';
import {NavLink} from 'react-router-dom';

function Domain(props){
    const {domainDetail} = props;
    var icon = domainDetail.icon;
    return (
            <div className="col s12 m4 domain-list-card">
                <div className="hoverable">
                <NavLink className="black-text" to={domainDetail.to}>
                    <div className="card-content valign-wrapper">
                        <img src={require("../../assets/domain-icons/"+icon)} alt="" width="27" height="27"></img>
                        <span style={{paddingLeft: "1rem"}}><b> {domainDetail.domain_name}</b></span>
                    </div>
                </NavLink>
                </div>
            </div>
    )
}

export default Domain;