class StaticMapsAdapter {
  //Google Geocoding API
  static getCoordinates(address) {
  debugger
  let cleanAddress = address.split(' ').join('%20')
  const apiKey = process.env.REACT_APP_API_KEY
  const URL = `https://maps.googleapis.com/maps/api/geocode/json?&address=${cleanAddress}&key=${apiKey}`
  return fetch(URL).then(res => res.json())
  }
}
