import React from "react";
import RestaurantCard from "../components/RestaurantCard"


class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props)
  }

  renderRestaurantCards = () => {
    return this.props.clickedRestaurants.map(rest => <RestaurantCard details={rest} whichContainer={"restaurant_list"} handleAddRestToFavorites={this.props.handleAddRestToFavorites} handleRemoveFromRestList = {this.props.handleRemoveFromRestList} currentUser = {this.props.currentUser} />)
  }

  render() {
    let clickedRestaurants = this.renderRestaurantCards();

    return (
      <div className="RestaurantList">
        {clickedRestaurants}
      </div>
    )
  }
 }
export default RestaurantList
