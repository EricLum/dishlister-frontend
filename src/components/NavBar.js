import React from 'react'
// import { Link } from 'react-router-dom'

const NavBar = (props) => {

  const links = ['Login', 'Search', 'My Saved Restaurants'].map(l => <li key={l}><a href="">{l}</a></li>)

  const displayCurrentUser = <div>{props.currentUser.username} is logged in</div>

  return (
    <div className='nav'>
      {displayCurrentUser}
      <nav>
        <div className="nav-wrapper blue darken-3">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
