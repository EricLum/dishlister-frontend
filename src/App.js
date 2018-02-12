import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import DishlisterContainer from './containers/DishlisterContainer'
// import { Route, Switch, Redirect } from 'react-router-dom'
import MyDishlisterContainer from './containers/MyDishlisterContainer'
import BackendAdapter from './adapters/BackendAdapter'

class App extends Component {

  state =  {
    favoriteRestaurants: [],
    currentUser: {}
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
          username: e.target.firstChild.value,
          password: e.target.children[1].value
        }
      })
    }).then(res => res.json())
    .then(json => this.setState({
      currentUser: json
    }))
  }

  handleAddRestToFavorites = (restaurant) => {
    this.setState( (prevState) => {
      return {favoriteRestaurants: [...prevState.favoriteRestaurants, restaurant]}
    } )

    // need to add a fetch to POST to the backend = creates a new saved_restaurant
  BackendAdapter.createNewSavedRestaurant(this.state.currentUser.id, restaurant.id, false , 0)
  }


  handleRemoveFromMyRestList = (restaurant) => {
    let restToRemove = this.state.favoriteRestaurants.filter(rest => rest.id === restaurant.id)[0]
    let indexToRemove = this.state.favoriteRestaurants.indexOf(restToRemove)
    let removed = this.state.favoriteRestaurants.splice(indexToRemove, 1)
    this.setState({
      favoriteRestaurants: this.state.favoriteRestaurants
    })
    // need to add a fetch to update the backend to delete a saved_restaurant (and associated dish)
  }

  render() {
    return (
      <div className="container">
        <NavBar handleSignUp={this.handleSignUp} currentUser= {this.state.currentUser}/>
        <h1>Dishlister</h1>
          <h3>A solution to all your rec needs!</h3>
        <h4>Save all of your restaurant recommendations. </h4>

        <DishlisterContainer handleAddRestToFavorites = {this.handleAddRestToFavorites}/>
        <MyDishlisterContainer favoriteRestaurants={this.state.favoriteRestaurants} handleRemoveFromMyRestList={this.handleRemoveFromMyRestList}/>
      </div>
    );
  }
}

export default App;
