import React from 'react';
import {Link} from 'react-router-dom';

function SubCategoryTile(props){
    const {subCategory} = props;
    const title_style = {
        "font": "400 30px Segoe UI",
        "letterSpacing": "2px"
    }
    return(
        <Link  to={'/domain/'+window.location.pathname.split('/')[2]+'/'+subCategory.link}>
            <div className="col s12 m6 center">
                <div className="card z-depth-2 hoverable">
                    <div className="card-content grey-text text-darken-3">
                        <span className="card-title" style={title_style}>{subCategory.name}</span>
                        <img src={require("../../assets/domain-icons/"+subCategory.icon)} alt="" width="100" height="100"></img>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default SubCategoryTile;