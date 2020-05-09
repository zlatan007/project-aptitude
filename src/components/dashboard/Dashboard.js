import React, {Component} from 'react';
import Coolimages from '../../images/coolimage1.gif'
import { connect } from 'react-redux'


class Dashboard extends Component{
    render(){
        console.log(this.props);
        return(
           <div className="row">
               <div className="col s12">
                   <h2>Here goes your project</h2>
               </div>
               <div className="col s6">
                   
                   
               </div>
           </div>
        )
    }
}



export default Dashboard
