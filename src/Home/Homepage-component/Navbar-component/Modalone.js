import React, { Component } from "react";
import './modalone.css'
import './modal.css'
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import facebook from '../../../images/facebook.png';
import google from '../../../images/google.png';
import linkdln from '../../../images/linkdln.png';
import github from '../../../images/github.png';



class Modalone extends Component {
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
      opacity: 0.7,
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
        <a className=" modal-trigger" data-target="modal2">Signup</a>
        

        <div ref={Modal => { this.Modal = Modal;}} id="modal2" className="modal">
       
          {/* <div className="model-header"> */}
                <div className="hcss1">
                  <h3 className="center darken-3">Sign up</h3>
                    <hr></hr>
                </div>
          {/* </div> */}

          <div className="modal-content ">
              <div class="row">
                {/* <form class="col s12"> */}
                
                      {/* <div className="marginofemail1"> */}
                        <div class="input-field col s12">
                          <input placeholder="First & Last name" id="first_name" type="text" class="validate"/>
                          <label for="first_name">First & Last name</label>
                        </div>
                      {/* </div> */}
                    
                    
                    
                      <div className="marginofpassword1">
                          <div class="input-field col s12">
                            <input placeholder="Email" id="password" type="email" class="validate"/>
                            <label for="email">Email</label>
                          </div>
                      </div>
                    

                    
                      <div className="marginofpassword1">
                          <div class="input-field col s12">
                            <input placeholder="Password" id="password" type="password" class="validate"/>
                            <label for="password">Password</label>
                          </div>
                      </div>
                    
                      <div className="col s12">
                        <div className="right hr">
                          <a className="modal-close waves-effect waves-light btn">
                            Sign in
                          </a>
                        </div>  
                      </div>

                      <div className="col s4 lineconnectone">
                          <hr></hr>
                        </div>

                        <div className="col s4 center connect">
                          or connect with
                        </div>

                        <div className="col s4 lineconnectone">
                          <hr></hr>
                        </div>
                    
                      
                        <div className="col s3">
                          <div className="center">
                          <img className="materialboxed"  length="50" width="50" src={facebook} alt="this is good" />
                          </div>
                        </div>

                        {/* <div className="col s3">
                        <div className="center">
                          <img className="materialboxed"  length="50" width="50" src={google} alt="this is good" />
                          </div>
                        </div> */}

                        {/* <div className="col s3">
                        <div className="center">
                          <img className="materialboxed"  length="55" width="55" src={linkdln} alt="this is good" />
                          </div>
                        </div> */}

                        {/* <div className="col s3">
                        <div className="center">
                          <img className="materialboxed"  length="50" width="50" src={github} alt="this is good" />
                          </div>
                        </div> */}
                      

                {/* </form> */}
              </div>

                

          </div>



          </div>
      </div>
    );
  }
}

export default Modalone;
