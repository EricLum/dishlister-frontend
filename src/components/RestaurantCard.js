import React from 'react'

const RestaurantCard = (props) => {

  let handleClick = (event) => {
    if(props.whichContainer === "restaurant_list"){
      props.handleAddRestToFavorites(props.details)
    } else {

    }

  }

  let handleRemove = (event) => {
    if(props.whichContainer === "restaurant_list"){
      props.handleRemoveFromRestList(props.details)
    } else {
      console.log(props)
      debugger
      props.handleRemoveFromMyRestList(props.details)
    }
  }


  let renderCorrectInformation = () => {
    if (props.whichContainer === "restaurant_list"){

    }
  }

  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src="images/office.jpg" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{props.details.name}<i className="material-icons right">more_vert</i>
        </span>
        <i className="small material-icons" onClick={handleClick}>add_circle</i>
        <i className="small material-icons" onClick={handleRemove}>remove_circle</i>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">{props.details.name}<i className="material-icons right">close</i></span>
        <p>Price Level: {props.details.price_level}</p>
        <p>Rating: {props.details.rating}</p>
      </div>
  </div>
  )

}

export default RestaurantCard
