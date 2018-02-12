import React from "react";
import RestaurantCard from "../components/RestaurantCard"

class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="">
        HEY IM IN TH RESTAURANT LIST
        <RestaurantCard />
      </div>

    )
  }
 }
export default RestaurantList
