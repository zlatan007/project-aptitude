import React, {Component} from 'react';
import apti from '../../../images/apti.png'
import book from '../../../images/book.svg'
import main from '../../../images/main.svg'
import '../../../styles/Frontmaingetstarted.css'



class Frontmaingetstarted extends Component{
    render(){
        return(
           <div className="container">
               {/* <div className="row flex-container"> */}

                
                    <div className="card teal flex-container">
                        <div className="row ">
                            
                            <div class="col s12 m6">
                                <div className="card-content ">
                                    <div className="center">
                                        <h4 className="">BOOST YOURSELF FOR BETTER TOMMOROW</h4>
                                    </div>
                                   <div className="center">
        
                                        <a  href="/login" class="waves-effect waves-light btn getstartedbtn">Get Started</a>
                                    </div>
                                   
                                </div>
                            </div>
                                
                            <div class="col s12 m6 l6">
                            
                                <div className="card-image mainsvg">
                                    <img className="right-align" src={main} alt="this is good" />
                                </div>
                            
                            </div>
                        </div>
                    </div>
                

               {/* </div>  */}
           </div>
        )
    }
}


export default Frontmaingetstarted
