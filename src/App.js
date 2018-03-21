import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import DishlisterContainer from './containers/DishlisterContainer'
import SignUp from './components/SignUp'
// import { Route, Switch, Redirect } from 'react-router-dom'
import MyDishlisterContainer from './containers/MyDishlisterContainer'
import BackendAdapter from './adapters/BackendAdapter'
import {BrowserRouter as Router, Link, NavLink} from 'react-router-dom'
import {Modal, Button} from 'react-materialize'

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
    BackendAdapter.createNewSavedRestaurant(this.state.currentUser.id, restaurant.id, false , 0)

    this.setState( (prevState) => {
      return {favoriteRestaurants: [...prevState.favoriteRestaurants, restaurant]}
    } )
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
      <div>
        <NavBar handleSignUp={this.handleSignUp} currentUser= {this.state.currentUser}/>
        <div className='container'>
          <DishlisterContainer handleAddRestToFavorites = {this.handleAddRestToFavorites} currentUser = {this.state.currentUser} />
          <MyDishlisterContainer favoriteRestaurants={this.state.favoriteRestaurants} currentUser = {this.state.currentUser}  handleRemoveFromMyRestList={this.handleRemoveFromMyRestList}/>
        </div>
      </div>
    );
  }
}

export default App;
