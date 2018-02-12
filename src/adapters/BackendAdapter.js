const BackendAdapter (function(){

  const base_url = "http://localhost3000/api/v1/"

  class BackendAdapter {

    static createNewSavedRestaurant(user, restaurant, tried, rating) {
      return fetch(`${base_url}saved_restaurants`, {
        method: "POST",
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


    static createNewRestaurant({restaurant}){
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
      })
    }

    static createNewDish ({dish}){
      return fetch(`${base_url}dishes`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          saved_restaurant_id: `${dish.saved_restaurant_id}`
          name: `${dish.name}`
          price: `${dish.price}`
          description: `${dish.description}`
        })
      })
    }










  }


})()
