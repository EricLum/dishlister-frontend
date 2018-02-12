import React from "react";
import GoogleMapReact from 'google-map-react';
import RestaurantMarker from '../components/RestaurantMarker'

class MapContainer extends React.Component {
  constructor(props) {
    super(props);

  }

  handleRestaurantClick = (event) => {
    this.props.onClick(event.target.value)
  }

  getRestaurantMarkers = () => {
    console.log(this.props)
    return  this.props.searchResults.map(rest => <RestaurantMarker lat={rest.geometry.location.lat} lng={rest.geometry.location.lng} onClick={this.handleRestaurantClick}/>)
  }

  render() {
    console.log(this.props)
    let restaurants = this.getRestaurantMarkers();
    return (
      <div className="wrapper">
        <div className="google-map" position="relative">

          <GoogleMapReact
            center={{lat: this.props.startingAddress.lat, lng: this.props.startingAddress.lng}}
            defaultZoom={14}>

            {restaurants}


          </GoogleMapReact>
         </div>
       </div>

    )
  }
 }
export default MapContainer
