import React, {Component} from 'react';
import Coolimages from '../../../images/coolimage1.gif'



class Mainfront extends Component{
    render(){
        return(
           <div className="row">
               <div className="col s6">
                  
               </div>
               <div className="col s6">
                  <img class="materialboxed" width="650" src={Coolimages} alt="this is good" />
               </div>
           </div>
        )
    }
}


export default Mainfront
