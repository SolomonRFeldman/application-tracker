import React from 'react'
import NavbarBody from './NavbarBody'
import SignInBanner from '../Session/SignInBanner'

export default function SessionBanner({currentUser, setCurrentUser}) {

  return(
    currentUser ?
      <NavbarBody className={'ml-auto'} currentUser={currentUser} setCurrentUser={setCurrentUser} /> :
      <SignInBanner className={'ml-auto'} setCurrentUser={setCurrentUser} />
  )
}