import React from 'react'

const RestaurantSearch= (props) => {

  return (
    <div className='RestaurantSearch'>
      <form onSubmit={props.onLocationSubmit} className='searchForm'>
        <input id="input-location" type="text" placeholder="Enter Location" />
        <input className="btn blue darken-3 waves-effect" type="submit" value="Search for Nearby Places" />
      </form>
    </div>
  )

}

export default RestaurantSearch
