import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import DishlisterContainer from './containers/DishlisterContainer'
// import { Route, Switch, Redirect } from 'react-router-dom'
import MyDishlisterContainer from './containers/MyDishlisterContainer'

class App extends Component {

  state =  {
    favoriteRestaurants: []
  }

  handleAddRestToFavorites = (restaurant) => {
    this.setState( (prevState) => {
      return {favoriteRestaurants: [...prevState.favoriteRestaurants, restaurant]}
    }, () => console.log(this.state.favoriteRestaurants) )

        // need to add a fetch to POST to the frontend
  }


  handleRemoveFromMyRestList = (restaurant) => {
    let restToRemove = this.state.favoriteRestaurants.filter(rest => rest.id === restaurant.id)[0]
    let indexToRemove = this.state.favoriteRestaurants.indexOf(restToRemove)
    let removed = this.state.favoriteRestaurants.splice(indexToRemove, 1)
    this.setState({
      favoriteRestaurants: this.state.favoriteRestaurants
    }, console.log("new state of fav rest", this.state))

    // need to add a fetch to update the backend
  }

  render() {
    return (
      <div className="container">

        <NavBar />
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
