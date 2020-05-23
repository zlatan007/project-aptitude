import React, {Component} from 'react';
import '../../../styles/Frontmainfooter.css'


class Frontmainfooter extends Component{
    render(){
        return(
        
            <footer class="page-footer" >
                {/* <div class="container"> */}
                    <div class="row" >
                        {/* <div class="col l6 s12">
                            <h5 class="white-text">Footer Content</h5>
                            <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                        </div> */}

                        <div class="col l4 offset-l2 s6">
                            <h5 class="white-text">Links</h5>
                            <ul>
                            <li><a class="grey-text text-lighten-3" href="#!">About us</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">Terms of use</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">privacy policy</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">blog</a></li>
                            </ul>
                        </div>

                        <div class="col l4 offset-l2 s6">
                            <h5 class="white-text">Test Series</h5>
                            <ul>
                            <li><a class="grey-text text-lighten-3" href="#!">CAT</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">GMAT</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">SBI PO</a></li>
                            <li><a class="grey-text text-lighten-3" href="#!">RAILWAYS</a></li>
                            </ul>
                        </div>

                    </div>
                {/* </div> */}
                <div class="footer-copyright">
                    <div class="container">
                    ©aptitudestamper
                    <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
            </footer>
        )
    }
}


export default Frontmainfooter
