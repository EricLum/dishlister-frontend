import React from "react";
import RestaurantCard from "../components/RestaurantCard"

class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }

  handleAddRestToFavorites = () => {

  }


  renderRestaurantCards = () => {
    return this.props.clickedRestaurants.map(rest => <RestaurantCard details={rest} onClick={this.handleAddRestToFavorites}/>)
  }

  render() {
    console.log(this.props)
    let clickedRestaurants = this.renderRestaurantCards();

    return (
      <div className="">
        {clickedRestaurants}
      </div>

    )
  }
 }
export default RestaurantList
