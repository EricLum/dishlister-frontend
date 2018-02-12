import React from 'react'

const RestaurantCard = (props) => {
  console.log(props)

  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src="images/office.jpg" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{props.details.name}<i className="material-icons right">More deets!</i></span>
        {props.details.photos["0"].html_attributions["0"]}
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">{props.details.name}<i className="material-icons right">close</i></span>
        <p>Price Level: {props.details.price_level}</p>
        <p>Rating: {props.details.rating}</p>
        <button></button>
        <button> Hide/Remove Card</button>

      </div>
  </div>
  )

}

export default RestaurantCard
