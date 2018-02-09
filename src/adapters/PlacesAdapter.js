class PlacesAdapter {
  //Adapter for Google Maps Places API for restaurants.
  static getPlaceInfo(latitude, longitude){
    const apiKey = process.env.REACT_APP_PLACES_API_KEY
    const URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},%20${longitude}&radius=500&type=restaurant&key=${apiKey}`
    return fetch(URL).then(res => res.json())
  }
}
