import React from 'react';
import Homepage from './Home/Homepage-component/Homepage'

import Signup from './Home/Homepage-component/Navbar-component/Signup'
import { BrowserRouter,Route} from 'react-router-dom';
import Navbar from './Home/Homepage-component/Navbar-component/Navbar';
import LoginPage from './Home/Homepage-component/Navbar-component/LoginPage';

function App() {
  return (
    <div>
      
      <BrowserRouter>
         <Navbar />
         <Route exact path="/" component={Homepage}/>
         <Route exact path="/login" component={LoginPage}/>
         <Route exact path="/signup" component={Signup}/>

      </BrowserRouter>
       
    </div>
  );
}

export default App;
