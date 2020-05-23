import React, {Component} from 'react';
import apti from '../../../images/apti.png'
import vocal from '../../../images/vocal.svg'
import book from '../../../images/book.svg'
import creativity from '../../../images/creativity.svg'
import '../../../styles/Frontmainquestion.css'



class Frontmainquestion extends Component{
    render(){
        return(
           <div className="container">
               <h2 className="center">Pratices Questions</h2>
               <div className="row ">
                   
               <div className="col s12 m4 l4">
                       <div className="card  level z-depth-2 hoverable">
                           <div className="card-content sizing">
                                <div className="card-image tests">
                                    <img className="center" src={vocal} alt="this is good" />
                                </div>
                           </div>

                            <div className="card-action foot">
                                  <span className="center">
                                      Aptitude
                                  </span>
                            </div>

                       </div>
                   </div>

                   <div className="col s12 m4 l4 ">
                       <div className="card level z-depth-2 hoverable">
                           <div className="card-content sizing">
                                <div className="card-image tests">
                                    <img className="center" src={creativity} alt="this is good" />
                                </div>
                           </div>

                            <div className="card-action foot">
                                  <span className="center">
                                      Reasoning 
                                  </span>
                            </div>

                       </div>
                   </div>

                   <div className="col s12 m4 l4">
                       <div className="card level z-depth-2 hoverable">
                           <div className="card-content sizing">
                                <div className="card-image tests">
                                    <img className="center" src={vocal} alt="this is good" />
                                </div>
                           </div>

                            <div className="card-action foot">
                                  <span className="center">
                                      Verbal Ability
                                  </span>
                            </div>

                       </div>
                   </div>

               </div> 
           </div>
        )
    }
}


export default Frontmainquestion
