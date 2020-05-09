import React, {Component} from 'react';
import { connect } from 'react-redux'
import LoginPage from './LoginPage';
import {signOut} from '../../../components/store/actions/authActions'
import {Redirect} from 'react-router-dom';


const Dash = (props) => {
//    console.log(props)
       
        const { authError,auth} = props;
        if (!auth.uid)return <Redirect to="/login"></Redirect>

        return(
           <div className="row">
               <div className="col s12">
                   <h2>Here goes your project</h2>
               </div>
               <div className="col s6">
                   <a className="modal-close waves-effect waves-light btn" onClick={props.signOut}>
                            Log out
                    </a>
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
  
  export default connect(mapStateToProps,mapDispatchToProps)(Dash)
