

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import AutoCompleteText from './components/LandingPage';

// Router 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// Pages 
import Gamepage from './pages/Gamepage'
import LandingPage from './pages/Page'

function App() {
  return (
    <div className='background'>
    <div className="App">
    
     <Router>
        <Switch>
          <Route exact path='/' component={AutoCompleteText} />
          <Route exact path='/Gamepage' component={Gamepage} />
        </Switch>
      </Router> 
    </div>
    </div>
  );
}

export default App;
