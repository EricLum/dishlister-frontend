import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import DishlisterContainer from './containers/DishlisterContainer'
// import { Route, Switch, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="container">

        <NavBar />
        <h1>Dishlister</h1>
          <h3>A solution to all your rec needs!</h3>
        <h4>Save all of your restaurant recommendations. </h4>

        <DishlisterContainer />

      </div>
    );
  }
}

export default App;
