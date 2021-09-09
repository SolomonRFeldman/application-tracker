import React, { useState } from 'react'
import SignOutButton from './SignOutButton'

export default function CurrentUserBanner({currentUser, setCurrentUser}) {

  return(
    <>
      <h1>Welcome {currentUser.name}</h1>
      <SignOutButton setCurrentUser={setCurrentUser} />
    </>
  )
}