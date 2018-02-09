import React from "react";
import RestaurantList from './RestaurantList'
import RestaurantSearch from '../components/RestaurantSearch'
import PlacesAdapter from '../adapters/PlacesAdapter'
import StaticMapsAdapter from '../adapters/StaticMapsAdapter'


class DishlisterContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startingAddress: {},
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


  componentDidMount = () => {
    this.fetchStaticGoogleMaps("1556 York Avenue, New York, NY 10028").then(res => {
       this.searchAddressForPlaces(res.results[0].geometry.location.lat, res.results[0].geometry.location.lng).then(console.log)
      // this.setState({
      //   startingAddress: res.results[0].geometry.location
      // }, () => {console.log(this.state)})
    })
  }

  render() {
    return (
      <div>
        "HEY IM THE DISLISTER CONTAINER"
        <RestaurantSearch />
        <RestaurantList />

      </div>
    )
  }
 }

export default DishlisterContainer
