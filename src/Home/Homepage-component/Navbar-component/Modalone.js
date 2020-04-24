import React, { Component } from "react";
import './modalone.css'
import './modal.css'
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";



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
       
          <div className="model-header">
                <div className="hcss1">
                  <h3 className="center darken-3">Sign up</h3>
                    <hr></hr>
                </div>
          </div>

          <div className="modal-content ">
              <div class="row">
                <form class="col s12">
                <div class="row">
                      <div className="marginofemail1">
                        <div class="input-field col s12">
                          <input placeholder="First & Last name" id="first_name" type="text" class="validate"/>
                          <label for="first_name">First & Last name</label>
                        </div>
                      </div>
                    </div>
                    
                    <div class="row">
                      <div className="marginofpassword1">
                          <div class="input-field col s12">
                            <input placeholder="Email" id="password" type="email" class="validate"/>
                            <label for="email">Email</label>
                          </div>
                      </div>
                    </div>

                    <div class="row">
                      <div className="marginofpassword1">
                          <div class="input-field col s12">
                            <input placeholder="Password" id="password" type="password" class="validate"/>
                            <label for="password">Password</label>
                          </div>
                      </div>
                    </div>

                </form>
              </div>

                

          </div>
       
            
            <div className="modal-footer">
              <a className="modal-close waves-effect waves-light btn">
                Cancel
              </a>
              <a className="modal-close waves-effect waves-light btn">
                Sign up
              </a>
            </div>


          </div>
      </div>
    );
  }
}

export default Modalone;
