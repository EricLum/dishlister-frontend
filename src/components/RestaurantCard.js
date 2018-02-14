import React from 'react'
import BackendAdapter from '../adapters/BackendAdapter'

const RestaurantCard = (props) => {

  let handleClick = (event) => {
    if(props.whichContainer === "restaurant_list"){
      props.handleAddRestToFavorites(props.details)
    } else {

    }

  }

  let handleRemove = (event) => {
    if(props.whichContainer === "restaurant_list"){
      props.handleRemoveFromRestList(props.details)
    } else {
      props.handleRemoveFromMyRestList(props.details)
    }
  }

  let submitRestaurantForm = (e) => {
    // updates a restaurant as well as create a new dish.
    e.preventDefault()

    //persist event so it can be used later on.
    e.persist()

    BackendAdapter.updateSavedRestaurant(props.currentUser.id, props.details.id, e.target.children[1].checked, e.target.children[3].value).then(res => {

      //Create Dish with saved restaurant id return.
        let dish_name = e.target.children[5].value
        let dish_price= e.target.children[9].value
        let dish_description = e.target.children[7].value
        let saved_restaurant_id = res.id
        BackendAdapter.createNewDish(saved_restaurant_id, dish_name, dish_price, dish_description)
      }
    )
   alert('Thank you for your input.')
  }

  let renderDetails = () => {
    if (props.whichContainer === "restaurant_list"){
      return (
        <div>
          <p>Price Level: {props.details.price_level}</p>
          <p>Rating: {props.details.rating}</p>
        </div>
      )
    } else {
      return (
        //This is in MyRestaurant List -- In Backend this is SavedRestaurants.
        <div>
          <h4>Tell us about your visit!</h4>
            <form onSubmit={submitRestaurantForm}>
              <label for="tried"> Did you visit this restaurant? </label>
              <input type="checkbox" name="tried" />
              <label for="rating">Your restaurant rating: </label>
              <input type="number" name="rating" placeholder="Rating (1 - 5)" min="0" max="5" />
              <label>What was your favorite dish? </label>
              <input type="text" name="dish" placeholder="Enter dish name" />
              <label for="description">Description of Dish: </label>
              <input type="text_area" name="description" /><br></br>
              <label for="price">Price of Dish: $</label>
              <input type="number" name="price" />
              <input type="submit" name="submit" value="Submit your favorite dish!" />
            </form>
        </div>
      )
    }
  }

  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{props.details.name}<i className="material-icons right">more_vert</i>
        </span>
        <i className="small material-icons" onClick={handleClick}>add_circle</i>
        <i className="small material-icons" onClick={handleRemove}>remove_circle</i>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">{props.details.name}<i className="material-icons right">close</i></span>
        {renderDetails()}
      </div>
  </div>
  )

}

export default RestaurantCard
