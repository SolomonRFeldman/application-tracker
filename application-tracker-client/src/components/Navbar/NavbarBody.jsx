import React from 'react'
import { Nav } from 'react-bootstrap'
import SignOutButton from '../Session/SignOutButton'

export default function NavbarBody({className, currentUser, setCurrentUser}) {

  return(
    <Nav className={`${className}`}>
      <Nav.Link className='active'>{`${currentUser.username}`}</Nav.Link>
      <SignOutButton varient={'info'} setCurrentUser={setCurrentUser} />
    </Nav>
  )
}