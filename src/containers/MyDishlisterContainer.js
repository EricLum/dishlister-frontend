import React from "react";
import MyRestaurantList from './MyRestaurantList'
class MyDishlisterContainer extends React.Component {
  constructor(props) {
    super(props);

    //expecting props.favoriteRestaurants
  }

  render() {
    return (
      <div>
        this is my dish lister container
        <MyRestaurantList favoriteRestaurants = {this.props.favoriteRestaurants}/>
      </div>
    )
  }
 }
export default MyDishlisterContainer
