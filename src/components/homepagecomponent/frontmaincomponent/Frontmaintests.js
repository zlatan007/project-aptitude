import React, {Component} from 'react';
import apti from '../../../images/apti.png'
import vocal from '../../../images/vocal.svg'
import book from '../../../images/book.svg'
import booktwo from '../../../images/booktwo.svg'
import bookthree from '../../../images/bookthree.svg'
import '../../../styles/Frontmaintests.css'



class Frontmaintest extends Component{
    render(){
        return(
           <div className="container">
               <h2 className="center">Tests on different Topics</h2>
               <div className="row test-size ">
                   
                {/* <div className="row"> */}

               <div className="col s12 m4 l4 ">
                    <div className="card level z-depth-2 hoverable">
                        <div className="card-content sizing">
                            <div className="card-image tests">
                                <img className="center" src={book} alt="this is good" />
                            </div>
                        </div>

                        <div className="card-action foot">
                                <span className="center">
                                    Full Length Test
                                </span>
                        </div>

                    </div>
                </div>

                   <div className="col s12 m4 l4 ">
                       <div className="card level z-depth-2 hoverable">
                           <div className="card-content sizing">
                                <div className="card-image tests">
                                    <img className="center" src={booktwo} alt="this is good" />
                                </div>
                           </div>

                            <div className="card-action foot">
                                  <span className="center">
                                      Aptitude & Reasoning Test
                                  </span>
                            </div>

                       </div>
                   </div>

                   <div className="col s12 m4 l4">
                       <div className="card level z-depth-2 hoverable">
                           <div className="card-content sizing">
                                <div className="card-image tests">
                                    <img className="center" src={bookthree} alt="this is good" />
                                </div>
                           </div>

                            <div className="card-action foot">
                                  <span className="center">
                                      Verbal Ability Test
                                  </span>
                            </div>

                       </div>
                   </div>

               </div> 
           </div>
        )
    }
}


export default Frontmaintest
