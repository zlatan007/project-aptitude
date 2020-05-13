import React from 'react';
import Header from '../layouts/Header';
import '../../styles/dashboard.css';
import SkillList from './SkillList';
import DomainsList from './DomainsList';
import TutorialList from './TutorialList';

import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import {Redirect} from 'react-router-dom';

function Dashboard(props) {
    var {prev_location} = props;
    prev_location===undefined ? prev_location = "" : prev_location= prev_location;
    const pageLoc = prev_location+"Practice";
    const pageName = "Dashboard";

    const { authError,auth} = props;
    if (!auth.uid)return <Redirect to="/login"></Redirect>


    return(
        <div className="dashboard">
            <Header pageLoc={pageLoc} pageName={pageName}/>
            <div className="container">
                <div className="row">
                    <h6><b>Your Skills</b></h6>
                    <SkillList />
                </div>
                <div className="row">
                    <br></br>
                    <h6><b>Skills Available For Practice</b></h6>
                    <br></br>
                    <DomainsList/>
                </div>
                <div className="row">
                    <h6><b>Tutorials</b></h6>
                    <br></br>
                    <TutorialList/>
                </div>

                

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
      authError: state.auth.authError,
      auth: state.firebase.auth
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }
  
 


 export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
