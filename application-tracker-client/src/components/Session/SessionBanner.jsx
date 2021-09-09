import React, { useEffect, useState } from 'react'
import { getRequest } from '../../apiRequests'
import CurrentUserBanner from './CurrentUserBanner'
import SignInForm from './SignInForm'

export default function SessionBanner() {
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    getRequest('/current').then(({user}) => setCurrentUser(user))
  }, [])

  return(
    currentUser ?
      <CurrentUserBanner currentUser={currentUser} setCurrentUser={setCurrentUser} /> :
      <SignInForm setCurrentUser={setCurrentUser} />
  )
}