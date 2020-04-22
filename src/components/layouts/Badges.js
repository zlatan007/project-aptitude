import React from 'react';

function Badges(props){
    const {badgeDetail} = props
    var temp_badgeDetail = {
        badge_name:"Python",
        stars: 5,
        badge_image: "https://hrcdn.net/fcore/assets/badges/python-f70befd824.svg"
    }
    return(
        <div className="skill-card-badge">
            <div className="hexagon-badge center">
                <a className="btn-floating disabled center"><img src={temp_badgeDetail.badge_image}/></a>
            </div>
        </div>
        
    )
}

export default Badges;