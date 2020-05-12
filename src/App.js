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
import Domain from './components/domains/Domain';
import ChallengeRedirect from './components/layouts/ChallengeRedirect';
import ChallengeProblemPage from './components/layouts/ChallengeProblemPage';
import PageNotFound from './components/layouts/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/home" component={Homepage}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/leaderboard" component={Leaderboard}/>
          <Route exact path="/login" component={LoginPage}/>
          <Route exact path="/signup" component={SignupPage}/>
          <Route path="/domain/:domain_name" component={Domain} />
          <Route path="/challenge/:challenge_slug/problem" component={ChallengeProblemPage} />
          <Route path="/challenge/:challenge_slug" component={ChallengeRedirect} />
          <Route exact path='*' component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
