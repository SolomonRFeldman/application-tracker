import React, { useState } from 'react'
import SignOutButton from './SignOutButton'

export default function CurrentUserBanner({currentUser, setCurrentUser}) {

  return(
    <>
      <h1>Welcome {currentUser.username}</h1>
      <SignOutButton setCurrentUser={setCurrentUser} />
    </>
  )
}