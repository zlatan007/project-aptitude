import React from 'react';
import facebook from '../../../images/facebook.png';
import google from '../../../images/google.png';
import linkdln from '../../../images/linkdln.png';
import github from '../../../images/github.png';


function LoginPage(){
    return(
        <div className="container">
              <div className="row" style={{"marginTop":"60px"}}>
                <form className="col s12 m6 offset-m3">

                    <div className="input-field col s12">
                      <input placeholder="Your Username and email" id="first_name" type="text" className="validate"/>
                      <label classname="colorthing" for="email">Email</label>
                      
                    </div>

                    <div className="input-field col s12">
                      <input placeholder="Password" id="password" type="password" className="validate"/>
                      <label htmlFor="password">Password</label>
                    </div>

                      <div className="col s12">
                        <div className="left">
                            <p className="ppadding">
                              <label className="labelpadding">
                                <input type="checkbox" className="filled-in"  />
                                <span className="spanpadding">Remember me</span>
                              </label>
                            </p>
                        </div>
                      </div>
                    
                    
                      <div className="right-align">
                          <a className="modal-close waves-effect waves-light btn">
                            Log in
                          </a>
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
              </div>

          </div>
    )
}


export default LoginPage;