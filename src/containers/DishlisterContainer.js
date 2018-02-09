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



  fetchPlaces = () => {
    const apiKey = process.env.REACT_APP_PLACES_API_KEY
    const URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${40.7733832},${-73.94863389999999}&radius=500&type=restaurant&key=${apiKey}`
    return fetch(URL).then(res => res.json()).then(console.log)

  }


  componentDidMount = () => {
    this.fetchStaticGoogleMaps("1556 York Avenue, New York, NY 10028").then(res => {
      console.log(res)
      this.setState({
        startingAddress: res.results[0].geometry.location
      }, () => {console.log(this.state)})
    }).then(this.fetchPlaces())
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
