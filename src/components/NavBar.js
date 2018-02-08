import React from 'react'
// import { Link } from 'react-router-dom'

const NavBar = (props) => {

  const links = ['Login', 'Search', 'My Saved Restaurants'].map(l => <li key={l}><a href="">{l}</a></li>)

  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>HEY </li>
              <li>Link 1</li>
              <li>Link 2 </li>
              <li>Link 3</li>

          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
