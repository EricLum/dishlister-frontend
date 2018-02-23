fimport React from 'react'
import BackendAdapter from '../adapters/BackendAdapter'

class RestaurantCard extends React.Component{

  state = {
    showSavedRestDetails: false,
    dish_description: '',
    dish: '',
    dish_price: 0.00,
    rating: '',
    tried: false,
    redChecked: true
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

    BackendAdapter.updateSavedRestaurant(this.props.currentUser.id, this.props.details.id, e.target.children[0].children[0].checked, e.target.children[1].children[2].value).then(res => {

      //Create Dish with saved restaurant id return.

        let dish_name = e.target.children[2].children[2].value
        let dish_description = e.target.children[3].children[2].value
        let dish_price= e.target.children[4].children[1].value
        let saved_restaurant_id = res.id
        BackendAdapter.createNewDish(saved_restaurant_id, dish_name, dish_price, dish_description)

        // set state

        this.setState({
          showSavedRestDetails: true,
          dish_description: dish_description,
          dish: dish_name,
          dish_price: dish_price,
          rating: e.target.children[1].children[2].value,
          tried: e.target.children[0].children[0].checked
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
      if (this.state.showSavedRestDetails === true) {
        return (
            <div className='SavedRestaurantForm'>
              <h4>{this.state.dish}</h4>
                <ul>
                  <li>Dish Price: {this.state.dish_price}</li>
                  <li>Dish Description: {this.state.dish_description}</li>
                  <li>Dish Tried?: {this.state.tried.toString()}</li>
                  <li>Dish Rating: {this.state.rating}</li>
                </ul>

            </div>
          )
      } else {
        return (  //This is in MyRestaurant List -- In Backend this is SavedRestaurants.
          <div className='SavedRestaurantForm'>
            <h4>Tell us about your visit!</h4>
              <form onSubmit={this.submitRestaurantForm}>
                <div className='input-field'>
                  <input type="checkbox" id="test5" checked={this.state.redChecked}/>
                </div>
              <div className='input-field'>
                <label for="rating">Your restaurant rating (1 - 5): </label><br></br>
                <input type="number" name="rating" min="0" max="5" />
              </div>
              <div className='input-field'>
                <label>What was your favorite dish? </label><br></br>
                <input type="text" name="dish"  />
              </div>
              <div className='input-field'>
                <label for="description">Description of Dish: </label><br></br>
                <input type="text" name="description"/>
              </div>
              <div className='input-field'>
                <label for="price">Price of Dish: $</label>
                <input type="number" name="price" />
              </div>
                <input type="submit" name="submit" value="Submit your favorite dish!" />
              </form>
          </div>
        )
      }
    }

  render () {
    return (
      <div className="card large">
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
