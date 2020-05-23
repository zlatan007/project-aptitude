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
    prev_location===undefined ? prev_location = "" : prev_location = prev_location; // eslint-disable-line no-self-assign
    const pageLoc = prev_location+"Dashboard";
    const pageName = "Dashboard";

    const { auth  } = props;
    if (!auth.uid) {
        console.log('no user logged in');
        return <Redirect to="/login"></Redirect> 
    }else{
        return(
            <div className="dashboard">
                <Header pageLoc={pageLoc} pageName={pageName}/>
                <div className="container">
                    <div className="row">
                        <h4><b>Test</b></h4>
                        <SkillList />
                    </div>
                    <div className="row">
                        <br></br>
                        <h4><b>Practice</b></h4>
                        <br></br>
                        <DomainsList/>
                    </div>
                    <div className="row">
                        <h4><b>Learn</b></h4>
                        <br></br>
                        <TutorialList/>
                    </div>
                </div>
            </div>
        )
    }
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
