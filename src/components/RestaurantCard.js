import React from 'react'

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
        <div>
          <h4>Tell us about your visit!</h4>
            <form>
              <label for="tried"> Did you visit this restaurant? </label>
              <input type="checkbox" name="tried" />
              <label for="rating">Your restaurant rating: </label>
              <input type="number" name="rating" placeholder="Rating (1 - 5)" min="0" max="5" />
              <label>What was your favorite dish? </label>
              <input type="text" name="dish" placeholder="Enter dish name" />
              <label for="description">Description of Dish: </label>
              <input type="text_area" name="description" />
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
        <img className="activator" src="images/office.jpg" />
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
