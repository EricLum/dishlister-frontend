const BackendAdapter = (function(){

  const base_url = "http://localhost:3001/api/v1/"

  return class BackendAdapter {

    //Saved Restaurants
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
      })
    }

    static findSavedRestaurant(user_id,restaurant_id){
      return fetch(`${base_url}saved_restaurants/locate`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          user_id: `${user_id}`,
          restaurant_id: `${restaurant_id}`
        })
      }).then(res => res.json())
    }

    static updateSavedRestaurant(user,restaurant, tried,rating){
      return fetch(`${base_url}saved_restaurants/find`, {
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
      })
        .then(res => res.json())
      }

    static deleteSavedRestaurant(saved_restaurant_id){
      return fetch(`${base_url}saved_restaurants/${saved_restaurant_id}`, {
        method: "DELETE"})
        .then(res => res.json())
    }


    //Restaurants
    static createNewRestaurant(restaurant){

      return fetch(`${base_url}restaurants`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: `${restaurant.name}`,
          api_id: `${restaurant.api_id}`,
          location: `${restaurant.location}`,
          price_range: `${restaurant.price_range}`,
          latitude: `${restaurant.latitude}`,
          longitude: `${restaurant.longitude}`
        })
      }).then(res => res.json())
    }


    //Dishes
    static createNewDish (restaurant_id, dish_name, dish_price, dish_description){
      return fetch(`${base_url}dishes`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          saved_restaurant_id: `${restaurant_id}`,
          name: `${dish_name}`,
          price: `${dish_price}`,
          description: `${dish_description}`
        })
      })
    }

  }
})()

export default BackendAdapter
