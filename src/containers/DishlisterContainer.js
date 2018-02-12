import React from "react";
import RestaurantList from './RestaurantList'
import RestaurantSearch from '../components/RestaurantSearch'
import PlacesAdapter from '../adapters/PlacesAdapter'
import StaticMapsAdapter from '../adapters/StaticMapsAdapter'
import MapContainer from './MapContainer'


class DishlisterContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startingAddress: [],
      searchResponse: [],
      clickedRestaurants: []
    }

  }

  fetchStaticGoogleMaps = (address) => {

    let cleanAddress = address.split(' ').join('%20')
    const apiKey = process.env.REACT_APP_API_KEY
    const URL = `https://maps.googleapis.com/maps/api/geocode/json?&address=${cleanAddress}&key=${apiKey}`
    return fetch(URL).then(res => res.json())
  }



  searchAddressForPlaces = (latitude, longitude) => {
    return fetch('http://localhost:3001/api/v1/fetchrestaurants', {
      method: 'post',
      headers:  {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        restaurant: {
          latitude, longitude
        }
      }
      )
    }).then(res => res.json())
  }



  handleLocationSubmit = (e) => {
    e.preventDefault();
    let address = e.target.firstElementChild.value;

    this.fetchStaticGoogleMaps(address).then(res => {
      this.setState({
        startingAddress: {lat: res.results[0].geometry.location.lat, lng: res.results[0].geometry.location.lng}
      })
       this.searchAddressForPlaces(res.results[0].geometry.location.lat, res.results[0].geometry.location.lng)
       .then(res => this.setState({
         searchResponse: res
       }, console.log("state is", this.state)))
    })
  }

  componentDidMount = () => {

  }

  handleRestaurantClick = (value) => {
    console.log(value)
    let clickedRest = this.state.searchResponse.filter(rest => rest.id === value)[0]
    // let prevState = this.state.clickedRestaurants
    // this.setState(previousState => {{
    //   clickedRestaurants: [...previousState, clickedRest]
    // }}, console.log("new state", this.state))
    this.setState((prevState) => {
      return {clickedRestaurants: [...prevState, clickedRest]}
    }, () => console.log(this.state) );
  }

  render() {
    return (
      <div>

        <RestaurantSearch onLocationSubmit={this.handleLocationSubmit}/>
        <MapContainer startingAddress={this.state.startingAddress} searchResults={this.state.searchResponse} onMarkerClick={this.handleRestaurantClick} />

        <RestaurantList />

      </div>
    )
  }
 }

export default DishlisterContainer
