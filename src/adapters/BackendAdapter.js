const BackendAdapter = (function(){

  const base_url = "http://localhost:3001/api/v1/"

  return class BackendAdapter {

    static createNewSavedRestaurant(user, restaurant, tried, rating) {
      return fetch(`${base_url}saved_restaurants`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({saved_restaurant:{
          user_id: `${user}`,
          restaurant_id: `${restaurant}`,
          tried: `${tried}`,
          rating: `${rating}`
        }})
      }).then(res => res.json())
        .then(console.log)
    }

    static updateSavedRestaurant(user,restaurant, tried,rating){
      return fetch(`${base_url}saved_restaurants`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          user_id: `${user}`,
          restaurant_id: `${restaurant}`,
          tried: `${tried}`,
          rating: `${rating}`
        })
        .then(res => res.json())
        .then(console.log)
      })
    }

    static createNewRestaurant(restaurant){
      return fetch(`${base_url}restaurants`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: `${restaurant.name}`,
          location: `${restaurant.location}`,
          price_range: `${restaurant.price_range}`,
          latitude: `${restaurant.latitude}`,
          longitude: `${restaurant.longitude}`
        })
      }).then(res => res.json())
    }

    static createNewDish ({dish}){
      return fetch(`${base_url}dishes`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          saved_restaurant_id: `${dish.saved_restaurant_id}`,
          name: `${dish.name}`,
          price: `${dish.price}`,
          description: `${dish.description}`
        })
      })
    }
  }

})()

console.log(BackendAdapter)
export default BackendAdapter
