import React from "react";
import RestaurantList from './RestaurantList'
import RestaurantSearch from '../components/RestaurantSearch'


class DishlisterContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }

  }




  render() {
    return (
      <div>
        "HEY IM THE DISLISTER CONTAINER"
        <RestaurantSearch />
        <RestaurantList />

      </div>
    )
  }
 }

export default DishlisterContainer
