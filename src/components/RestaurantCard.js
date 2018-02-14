import React from 'react'
import BackendAdapter from '../adapters/BackendAdapter'

class RestaurantCard extends React.Component{

  state = {
    showSavedRestDetails: false,
    dish_descripton: '',
    dish: '',
    dish_price: 0.00,
    rating: 0,
    tried: false
  }

  handleClick = (event) => {
    if(this.props.whichContainer === "restaurant_list"){
      this.props.handleAddRestToFavorites(this.props.details)
    } else {
    }
  }

  handleRemove = (event) => {
    if(this.props.whichContainer === "restaurant_list"){
      this.props.handleRemoveFromRestList(this.props.details)
    } else {
      this.props.handleRemoveFromMyRestList(this.props.details)
    }
  }

  submitRestaurantForm = (e) => {
    // updates a restaurant as well as create a new dish.
    e.preventDefault()

    //persist event so it can be used later on.
    e.persist()

    BackendAdapter.updateSavedRestaurant(this.props.currentUser.id, this.props.details.id, e.target.children[1].checked, e.target.children[3].value).then(res => {

      //Create Dish with saved restaurant id return.
        let dish_name = e.target.children[5].value
        let dish_price= e.target.children[9].value
        let dish_description = e.target.children[7].value
        let saved_restaurant_id = res.id
        BackendAdapter.createNewDish(saved_restaurant_id, dish_name, dish_price, dish_description)

        // set state

        this.setState({
          showSavedRestDetails: true,
          dish_descripton: dish_description,
          dish: dish_name,
          dish_price: dish_price,
          rating: e.target.children[3].value,
          tried: e.target.children[1].checked
        })
      }
    )

  }

  renderDetails = () => {
    if (this.props.whichContainer === "restaurant_list"){
      return (
        <div>
          <p>Price Level: {this.props.details.price_level}</p>
          <p>Rating: {this.props.details.rating}</p>
        </div>
      )
    }
      if (this.state.showSavedRestDetails) {
        console.log('i am showing saved rest details')
        console.log (this.state)
        return
          (
            <div>
              <p> hello there </p>
            </div>
          )
      } else {
        return (  //This is in MyRestaurant List -- In Backend this is SavedRestaurants.
          <div className='SavedRestaurantForm'>
            <h4>Tell us about your visit!</h4>
              <form onSubmit={this.submitRestaurantForm}>
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

  render () {
    return (
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{this.props.details.name}<i className="material-icons right">more_vert</i>
          </span>
          <i className="small material-icons" onClick={this.handleClick}>add_circle</i>
          <i className="small material-icons" onClick={this.handleRemove}>remove_circle</i>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{this.props.details.name}<i className="material-icons right">close</i></span>
          {this.renderDetails()}
        </div>
    </div>
    )
  }
}

export default RestaurantCard
