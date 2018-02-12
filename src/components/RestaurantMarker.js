import React from 'react'

const RestaurantMarker = (props) => {


  const handleClick = (event) => {
    // console.log(event.target.parentNode.searchid)
    props.onChildClick(props.searchid)
  }

  return (

    <div
      lat={props.lat}
      lng={props.lng}
      searchid = {props.searchid}
      onClick={handleClick}
       >

      <img className="restaurant-icon" src="/restauranticon.png" alt="restaurant" />
    </div>
  )

}

export default RestaurantMarker
