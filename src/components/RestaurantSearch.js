import React from 'react'

const RestaurantSearch= (props) => {

  return (
    <div>
      <form onSubmit={props.onLocationSubmit}>
        <input id="input-location" type="text" placeholder="Enter Location" />
        <input type="submit" value="Search for Nearby Places" />
      </form>

      <p>MAP????</p>

    </div>
  )

}

export default RestaurantSearch
