import React,{Component} from 'react';
import './modal.css'
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import facebook from '../../../images/facebook.png';
import google from '../../../images/google.png';
import linkdln from '../../../images/linkdln.png';
import github from '../../../images/github.png';
import { connect } from 'react-redux'
import { signIn } from '../../../components/store/actions/authActions'
import {Redirect} from 'react-router-dom';
import Dash from './Dash';



class LoginPage extends Component{
    state={
      email:'',
      password:''
    }

    handleChange = (e) =>{
        this.setState({
          [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.signIn(this.state)
    }

    render()
    {
      const { authError,auth} = this.props;
      if (auth.uid)return <Redirect to="/dash"></Redirect>

    return(
        <div className="container">
              <div className="row" style={{"marginTop":"0px"}}>
              <h3 className="center">Log In</h3>
                <form onSubmit={this.handleSubmit} className=" col s12 m6 offset-m3">
                    <div className="input-field col s12">
                        <input placeholder="" type="email" id="email" onChange={this.handleChange} />
                        <label className="colorthing" htmlFor="email">Email</label>
                    </div>

                    <div className="input-field col s12">
                      <input placeholder="" id="password" type="password" onChange={this.handleChange}/>
                      <label  className="colorthing" htmlFor="password">Password</label>
                    </div>

                      <div className="col s6">
                        <div className="left">
                            <p className="ppadding">
                              <label className="labelpadding">
                                <input type="checkbox" className="filled-in"  />
                                <span className="spanpadding">Remember me</span>
                              </label>
                            </p>
                        </div>
                      </div>

                      <div className="col s6 ">
                        {/* <div className="right-align"> */}
                          <a href="/" className="sized">
                            Forgot your password?
                          </a>
                        {/* </div> */}
                      </div>
                    
                    
                      <div className="right-align">
                          <button className="modal-close waves-effect waves-light btn">
                            Login
                          </button>
                      </div>
                    

                    <div className="row valign-wrapper" style={{"marginTop":"30px"}}>

                        <div className="col s4 hide-on-small-and-down ">
                          <hr></hr>
                        </div>

                        <div className="col s4 center">
                          or connect with
                        </div>

                        <div className="col s4 hide-on-small-and-down ">
                          <hr></hr>
                        </div>
                      </div>
                    
                        <div className="col s3">
                          <div className="center">
                            <img className="materialboxed"  length="44" width="44" src={facebook} alt="this is good" />
                          </div>
                        </div>

                        <div className="col s3">
                          <div className="center">
                            <img className="materialboxed"  length="44" width="44" src={google} alt="this is good" />
                          </div>
                        </div>

                        <div className="col s3">
                          <div className="center">
                            <img className="materialboxed"  length="44" width="44" src={linkdln} alt="this is good" />
                          </div>
                        </div>

                        <div className="col s3">
                          <div className="center">
                            <img className="materialboxed"  length="44" width="44" src={github} alt="this is good" />
                          </div>
                        </div>

                    {/* </div>                      */}

                </form>

                <div className="red-text center">
              { authError ? <p>{authError}</p> : null  }
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
    signIn: (creds) => dispatch(signIn(creds))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);
