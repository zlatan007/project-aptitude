import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import 'materialize-css/dist/css/materialize.min.css';

import Homepage from './components/homepagecomponent/Homepage';
import LoginPage from './components/homepagecomponent/authpages/LoginPage'
import SignupPage from './components/homepagecomponent/authpages/SignupPage'

import Dashboard from './components/dashboard/Dashboard';
import Leaderboard from './components/leaderboard/Leaderboard';
import DomainPage from './components/domains/DomainPage';
import SubDomainPage from './components/domains/SubDomainPage';
import PageNotFound from './components/layouts/PageNotFound';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/home" component={Homepage}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/leaderboard" component={Leaderboard}/>
          <Route exact path="/login" component={LoginPage}/>
          <Route exact path="/signup" component={SignupPage}/>
          <Route exact path="/domain/:domain_name" component={DomainPage} />
          <Route path="/domain/:domain_name/:subdomain_name" component={SubDomainPage} />
          {/* <Route path="/challenge/:challenge_slug/problem" component={ChallengeProblemPage} /> */}
          {/* <Route path="/challenge/:challenge_slug" component={ChallengeRedirect} /> */}
          <Route exact path='*' component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
