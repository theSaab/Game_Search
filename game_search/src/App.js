import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Components
import LandingPage from "./components/LandingPage";

// Router
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// Pages
import Gamepage from "./pages/Gamepage";

function App() {
  return (
    <div>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/Gamepage" component={Gamepage} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
