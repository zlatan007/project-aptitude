import React from 'react';
import Homepage from './Home/Homepage-component/Homepage'
import Login from './Home/Homepage-component/Navbar-component/Login'
import Signup from './Home/Homepage-component/Navbar-component/Signup'
import { BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      
      <BrowserRouter>
         
         <Route exact path="/" component={Homepage}/>
         <Route exact path="/login" component={Login}/>
         <Route exact path="/signup" component={Signup}/>

      </BrowserRouter>
       
    </div>
  );
}

export default App;
