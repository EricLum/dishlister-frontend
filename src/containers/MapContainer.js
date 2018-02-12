import React from "react";
import GoogleMapReact from 'google-map-react';
import RestaurantMarker from '../components/RestaurantMarker'

class MapContainer extends React.Component {
  constructor(props) {
    super(props);

  }

  handleRestaurantClick = (value) => {
    this.props.onMarkerClick(value)
  }

  getRestaurantMarkers = () => {
    return  this.props.searchResults.map(rest => <RestaurantMarker lat={rest.geometry.location.lat} lng={rest.geometry.location.lng} onChildClick={this.handleRestaurantClick} searchid={rest.id} key={this.props.searchResults.indexOf(rest)}/>)
  }

  showMap = () => {
    let restaurants = this.getRestaurantMarkers();

    if (this.props.startingAddress == {}){
      return <GoogleMapReact
        center={{lat: 40.7128, lng: -74.0060}}
        defaultZoom={14}>
      </GoogleMapReact>
    } else {
      return   <GoogleMapReact
        center={{lat: this.props.startingAddress.lat, lng: this.props.startingAddress.lng}}
        defaultZoom={14}>
        {restaurants}
      </GoogleMapReact>
    }

  }

  render() {
    let map = this.showMap()
    console.log(this.props)
    return (
      <div className="wrapper">
        <div className="google-map" position="relative">
          {map}
         </div>
       </div>

    )
  }
 }
export default MapContainer
