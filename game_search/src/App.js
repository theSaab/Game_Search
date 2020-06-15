

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import AutoCompleteText from './components/AutoCompleteText';

// Router 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// Pages 
import Gamepage from './pages/Gamepage'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <div className="App">
      <AutoCompleteText />
      {/* <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/Gamepage' component={Gamepage} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
