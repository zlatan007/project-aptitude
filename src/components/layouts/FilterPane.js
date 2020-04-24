import React from 'react';
import '../../styles/FilterPane.css';

function FilterPane(){
    return(
        <div className="col s12 m3 " style={{paddingLeft:"2rem","paddingTop":"3rem"}}>
            <div className="section">
                <h6 className="grey-text">STATUS</h6>
                <form action="#" >
                    <p >
                    <label className="valign-wrapper">
                        <input type="checkbox" className="filled-in checkbox-blue" style={{"height":"14px","width":"14px"}}/>
                        <span>Solved</span>
                    </label>
                    </p>
                    <p >
                    <label className="valign-wrapper">
                        <input type="checkbox" className="filled-in checkbox-blue" />
                        <span>Unsolved</span>
                    </label>
                    </p>
                </form>
            </div>
            <div className="divider"></div>
            <div className="section">
                <h6 className="grey-text">DIFFICULTY</h6>
                <form action="#" >
                    <p >
                    <label className="valign-wrapper">
                        <input type="checkbox" className="filled-in checkbox-blue" style={{"height":"14px","width":"14px"}}/>
                        <span>Easy</span>
                    </label>
                    </p>
                    <p >
                    <label className="valign-wrapper">
                        <input type="checkbox" className="filled-in checkbox-blue" />
                        <span>Medium</span>
                    </label>
                    </p>
                    <p >
                    <label className="valign-wrapper">
                        <input type="checkbox" className="filled-in checkbox-blue" />
                        <span>Hard</span>
                    </label>
                    </p>
                </form>
            </div>
            <div className="divider"></div>
        </div>
    )
}

export default FilterPane;