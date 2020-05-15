import React from 'react';
import '../../styles/Header.css';
import { uploadChallenge } from '../../store/actions/uploadChallengeActions';
import { connect } from 'react-redux';

function Header(props){
    const {pageLoc, pageName} = props;

    const handleClick = () => {
        console.log('Click Handler called...');
        props.uploadChallenge();
    }
    return(
        <div>
            <div className="nav-wrapper header white valign-wrapper ">
            <div className="container ">
                <div className="left">
                    <h6 className="grey-text text-lighten-1">{pageLoc}</h6>
                    <span><h5 className="black-text"><b>{pageName}</b></h5> </span>
                    <br></br>
                </div>
                {/* <div className="right">
                    <br></br>
                    <h6 className="grey-text" onClick={handleClick}>Your Score: </h6>
                </div> */}
                
                
            </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      uploadChallenge: () => dispatch(uploadChallenge())
    }
}

export default connect(null,mapDispatchToProps)(Header);