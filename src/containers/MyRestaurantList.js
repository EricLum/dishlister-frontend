import React from "react";
import RestaurantCard from "../components/RestaurantCard"

class MyRestaurantList extends React.Component {
  constructor(props) {
    super(props);

    //expecting this.props.favoriteRestaurants
  }

  renderRestaurantCards = () => {
    return this.props.favoriteRestaurants.map(rest => <RestaurantCard details={rest}  handleRemoveFromMyRestList = {this.handleRemoveFromMyRestList}/>)
  }

  render() {
    return (
      <div >
        {this.renderRestaurantCards()}
      </div>
    )
  }
 }
export default MyRestaurantList
