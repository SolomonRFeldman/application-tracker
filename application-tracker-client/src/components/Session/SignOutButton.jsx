import React from 'react'
import { Button } from 'react-bootstrap'
import { API_ENDPOINT } from '../../apiRequests'

export default function SignOutButton({className, varient, setCurrentUser}) {
  const handleClick = () => {
    console.log('click')
    fetch(API_ENDPOINT + '/signout', { method: "DELETE" })
      .then(resp => resp.status === 200 ? setCurrentUser() : null)
  }

  return(
    <Button className={className} aria-label='Sign Out' variant={varient} onClick={handleClick}>Log Out</Button>
  )
}