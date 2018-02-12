import React from 'react'
// import { Link } from 'react-router-dom'

const NavBar = (props) => {

  const links = ['Login', 'Search', 'My Saved Restaurants'].map(l => <li key={l}><a href="">{l}</a></li>)

  const displayCurrentUser = <div>{props.currentUser.username} is logged in</div>

  return (
    <div>
      {displayCurrentUser}
      <nav>
        <div className="nav-wrapper blue darken-3 z-depth-5">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>HEY </li>
              <li>Link 1</li>
              <li>Link 2 </li>
              <li>Link 3</li>
          </ul>
        </div>
      </nav>
      <label> Signup </label>
      <form onSubmit={props.handleSignUp}>
        <input type='text' placeholder='Username'></input>
        <input type='password' placeholder='Password'></input>
        <input type='submit'></input>
      </form>
    </div>
  )
}

export default NavBar
