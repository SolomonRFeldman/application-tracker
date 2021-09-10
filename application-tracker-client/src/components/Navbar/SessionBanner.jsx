import { useEffect, useState } from 'react'
import { getRequest } from '../../apiRequests'
import NavbarBody from './NavbarBody'
import SignInBanner from '../Session/SignInBanner'

export default function SessionBanner() {
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    getRequest('/current').then(({user}) => setCurrentUser(user))
  }, [])

  return(
    currentUser ?
      <NavbarBody className={'ml-auto'} currentUser={currentUser} setCurrentUser={setCurrentUser} /> :
      <SignInBanner className={'ml-auto'} setCurrentUser={setCurrentUser} />
  )
}