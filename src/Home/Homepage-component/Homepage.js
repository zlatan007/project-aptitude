import React, {Component} from 'react';
import Navbar from './Navbar-component/Navbar'
import Frontmain from './Frontmain-component/Frontmain'

class Homepage extends Component{
    render(){
        return(
            <div>
               <Navbar />
               <Frontmain />
            </div>
            
        )
    }
}

export default Homepage;

