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
  }

  render() {
    return (
      <div className="container">

        <NavBar />
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
