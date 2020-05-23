import React, {Component} from 'react';
import Frontmaintests from './Frontmaintests';
import Frontmainquestion from './Frontmainquestion';
import Frontmaingetstarted from './Frontmaingetstarted';
import Frontmainfooter from './Frontmainfooter';
// import Frontmainfooter from './Frontmainfooter';
// import Tabs from './Tabs';



class Frontmain extends Component{
    render(){
        return(
           <div className="row">
               <Frontmaingetstarted/>
                <Frontmaintests />
                <Frontmainquestion />
                <Frontmainfooter/>
                {/* <Tabs/>
               <Frontmainfooter/>  */}
           </div>
        )
    }
}


export default Frontmain





// import React, {Component} from 'react';

// class Frontmain extends Component{
//     render(){
//         return(
//            <div className="row">
//                <div className="col s6">
//                    <h1 className="red center">Here we go</h1>
//                </div>
//                <div className="col s6">
//                     <h1 className="blue center">Here we go</h1>
//                </div>
//            </div>
//         )
//     }
// }


// export default Frontmain
