import React from 'react';

function Badges(props){
    const {badgeDetail} = props
    var temp_badgeDetail = {
        badge_name:"Python",
        stars: 5,
        badge_image: "https://hrcdn.net/fcore/assets/badges/python-f70befd824.svg"
    }
    const CreateStars = () => {
        var stars = []
        for (var i = 1; i <= temp_badgeDetail.stars; i++) {
            stars.push(<i className="material-icons tiny" key={i}>star</i>);
        }
        return stars
    }
    return(
        <div className="skill-card-badge">
            <div className="hexagon-badge center z-depth-3">
                <img src={temp_badgeDetail.badge_image} alt="" height="27" width="27"/>
                <br></br>
                {CreateStars()}
            </div>
        </div>
        
    )
}

export default Badges;