import React from 'react';
import Homepage from './Home/Homepage-component/Homepage'
import { BrowserRouter,Route} from 'react-router-dom';
import Navbar from './Home/Homepage-component/Navbar-component/Navbar';
import LoginPage from './Home/Homepage-component/Navbar-component/LoginPage';
import SignupPage from './Home/Homepage-component/Navbar-component/SignupPage';
import Dashboard from './components/dashboard/Dashboard';
import Dash from './Home/Homepage-component/Navbar-component/Dash';





function App() {
  
  return (
    <div>
      
      <BrowserRouter>
         <Navbar />
         <Route exact path="/" component={Homepage}/>
         <Route exact path="/dashboard" component={Dashboard}/>
         <Route exact path="/dash" component={Dash}/>
         <Route exact path="/login" component={LoginPage}/>
         <Route exact path="/signup" component={SignupPage}/>
         
         
      </BrowserRouter>
       
    </div>
  );
}

export default App;
