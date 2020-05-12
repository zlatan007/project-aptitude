import React, {Component} from 'react';
import Navbarone from './navbarcomponent/Navbarone'
import Frontmain from './frontmaincomponent/Frontmain'

class Homepage extends Component{
    render(){
        return(
            
                <div>
                <Navbarone />
                <Frontmain />
                </div>
            
            
        )
    }
}

export default Homepage;

