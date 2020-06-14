

import React from 'react';
import logo from './logo.svg';
import './App.css';

// Router 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// Pages 
import Gamepage from './pages/Gamepage'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/Gamepage' component={Gamepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
