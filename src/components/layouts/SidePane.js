import React from 'react';
import '../../styles/FilterPane.css';

function FilterPane(){
    return(
        <div className="col s12 m3 " style={{paddingLeft:"2rem","paddingTop":"3rem","position":"relative"}}>
            <button class="btn waves-effect waves-light">Test your knowledge
                <i class="material-icons right">assignment</i>
            </button>
        </div>
    )
}

export default FilterPane;