import React,{Component} from 'react';
import './modal.css'
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import facebook from '../../../images/facebook.png';
import google from '../../../images/google.png';
import linkdln from '../../../images/linkdln.png';
import github from '../../../images/github.png';


class SignupPage extends Component{

    state={
        email:'',
        password:'',
        firstName:'',
        lastName:''
      }
  
      handleChange = (e) =>{
          this.setState({
            [e.target.id]: e.target.value
          })
      }
  
      handleSubmit = (e) =>{
          e.preventDefault();
          console.log(this.state);
      }

    render()
    {
    return(
        <div className="container">
              <div className="row" style={{"marginTop":"0px"}}>
              <h3 className="center">Sign In</h3>
                <form onSubmit={this.handleSubmit} className="col s12 m6 offset-m3">
                    
                    <div className="input-field col s12">
                      <input  id="firstName" type="text" onChange={this.handleChange}/>
                      <label className="colorthing" htmlFor="firstName">First name</label>
                    </div>

                    <div className="input-field col s12">
                      <input  id="lastName" type="text" onChange={this.handleChange}/>
                      <label className="colorthing" htmlFor="lastName">Last name</label>
                    </div>

                    <div className="input-field col s12">
                        <input  type="email" id="email" onChange={this.handleChange}/>
                        <label className="colorthing" htmlFor="email">Email</label>
                    </div>

                    <div className="input-field col s12">
                    <input id="password" type="password" onChange={this.handleChange}/>
                      <label className="colorthing" htmlFor="password">Password</label>
                    </div>

                      <div className="right-align">
                          <button className="modal-close waves-effect waves-light btn">
                            Sign up
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
              </div>

          </div>
    )
}
}

export default SignupPage;