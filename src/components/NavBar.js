import React from 'react'
import {Navbar, NavItem, Modal, Button} from 'react-materialize'
import SignUp from './SignUp'
const NavBar = (props) => {

  const links = ['Login', 'Search', 'My Saved Restaurants'].map(l => <li key={l}><a href="">{l}</a></li>)

  let displayCurrentUser
  if (props.currentUser.username) {
    displayCurrentUser = <div>{props.currentUser.username} is logged in</div>
  }

  let branding;
  if (props.currentUser.username){
    branding = `Welcome ${props.currentUser.username}`
  }
  return (

    <Navbar brand={branding} className='blue darken-4' right>
      <NavItem>
        {displayCurrentUser}
      </NavItem>
      <NavItem>
        <Modal
          header='Sign up'
          trigger={<NavItem>SignUp</NavItem>}>
          <SignUp handleSignUp={props.handleSignUp} />
        </Modal>
      </NavItem>
      <NavItem>
        Log in
      </NavItem>
    </Navbar>
  )
}

export default NavBar
