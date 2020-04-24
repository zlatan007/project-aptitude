import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import 'materialize-css/dist/css/materialize.min.css';
import Dashboard from './components/dashboard/Dashboard';
import Leaderboard from './components/leaderboard/Leaderboard';
import Domain from './components/domains/Domain';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/leaderboard" component={Leaderboard}/>
          <Route path="/domain/:domain_name" component={Domain} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
