import React, { Component } from "react";
import './modal.css'
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import facebook from '../../../images/facebook.png';
import google from '../../../images/google.png';
import linkdln from '../../../images/linkdln.png';
import github from '../../../images/github.png';
import {Link,Navlink} from 'react-router-dom';


class Modal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },

      inDuration: 250,
      outDuration: 250,
      opacity: 0.8,
      dismissible: false,
      startingTop: "50%",
      endingTop: "12%"
    };
    M.Modal.init(this.Modal, options);

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }

  render() {
    return (
      <div>
        <a className=" modal-trigger" data-target="modal1">Login</a>
        

        <div ref={Modal => { this.Modal = Modal;}} id="modal1" className="modal">
       
          {/* <div className="model-header"> */}
                <div className="hcss">
                  <h3 className="center #f4f4f4 darken-3 ">Log In</h3>
                    <hr></hr>
                </div>
          {/* </div> */}

          <div className="modal-content ">
              <div class="row">
                <form class="col s12">

                    <div class="input-field col s12">
                      <input placeholder="Your Username and email" id="first_name" type="text" class="validate"/>
                      <label classname="colorthing" for="email">Email</label>
                      
                    </div>

                    <div class="input-field col s12">
                      <input placeholder="Password" id="password" type="password" class="validate"/>
                      <label for="password">Password</label>
                    </div>
                    
                    
                      <div className="col s6">
                        <div className="left">
                            <p className="ppadding">
                              <label className="labelpadding">
                                <input type="checkbox" class="filled-in"  />
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
                    
                    
                    {/* <div className="row"> */}
                      <div className="col s12">
                        <div className="right hr">
                          <a className="modal-close waves-effect waves-light btn">
                            Log in
                          </a>
                        </div>  
                      </div>
                    {/* </div> */}
                    

                    <div className="row">

                        <div className="col s4 hide-on-small-and-down lineconnect">
                          <hr></hr>
                        </div>

                        <div className="col s4 center connect">
                          or connect with
                        </div>

                        <div className="col s4 hide-on-small-and-down lineconnect">
                          <hr></hr>
                        </div>
                      </div>
                    
                        <div className="col s3">
                          <div className="center">
                            <Link to="/" className="changed">
                              <img className="materialboxed"  length="44" width="44" src={facebook} alt="this is good" />
                            </ Link>
                          </div>
                        </div>

                        <div className="col s3">
                          <div className="center">
                            <Link to="/" className="changed">
                                <img className="materialboxed"  length="44" width="44" src={google} alt="this is good" />
                            </Link>
                          </div>
                        </div>

                        <div className="col s3">
                          <div className="right">
                            <Link to="/" className="changed">
                              <img className="materialboxed"  length="44" width="44" src={linkdln} alt="this is good" />
                            </Link>
                          </div>
                        </div>

                        <div className="col s3">
                          <div className="right">
                            <Link to="" className="changed">
                              <img className="materialboxed"  length="44" width="44" src={github} alt="this is good" />
                            </Link>
                          </div>
                        </div>

                    {/* </div>                      */}

                </form>
              </div>

          </div>

          </div>
      </div>
    );
  }
}

export default Modal;
