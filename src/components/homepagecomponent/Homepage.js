import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';


import Frontmain from './frontmaincomponent/Frontmain'

class Homepage extends Component{

    

    render(){

       const { auth} = this.props;
       if (auth.uid) return <Redirect to="/dashboard"></Redirect>

        return(
            <div>
              <Frontmain />
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

  export default connect(mapStateToProps)(Homepage);



