import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import DishlisterContainer from './containers/DishlisterContainer'
// import { Route, Switch, Redirect } from 'react-router-dom'
import MyDishlisterContainer from './containers/MyDishlisterContainer'

class App extends Component {

  state =  {
    favoriteRestaurants: [],
    currentUser: ''
  }

  handleSignUp = (e) => {
    e.preventDefault()
    return fetch('http://localhost:3001/api/v1/users/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username:e.target.firstChild.value
        }
      })
    }).then(res => res.json())
    .then(json => this.setState({
      currentUser: json.username
    }))
  }

  handleAddRestToFavorites = (restaurant) => {
    this.setState( (prevState) => {
      return {favoriteRestaurants: [...prevState.favoriteRestaurants, restaurant]}
    })
    //have to post to backend for current user.
  }

  render() {
    return (
      <div className="container">
        <NavBar handleSignUp={this.handleSignUp} currentUser= {this.state.currentUser}/>
        <h1>Dishlister</h1>
          <h3>A solution to all your rec needs!</h3>
        <h4>Save all of your restaurant recommendations. </h4>

        <DishlisterContainer handleAddRestToFavorites = {this.handleAddRestToFavorites}/>
        <MyDishlisterContainer favoriteRestaurants={this.state.favoriteRestaurants} />
      </div>
    );
  }
}

export default App;
