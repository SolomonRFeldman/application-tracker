import React from 'react'
import { API_ENDPOINT } from '../../apiRequests'

export default function SignOutButton({setCurrentUser}) {
  const handleClick = () => {
    console.log('click')
    fetch(API_ENDPOINT + '/signout', { method: "DELETE" })
      .then(resp => resp.status === 200 ? setCurrentUser() : null)
  }

  return(
    <input type="submit" value="Sign Out" onClick={handleClick} />
  )
}